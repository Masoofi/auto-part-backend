import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from "@nestjs/common";
import { OrderQueryDto } from "./dto/order-query.dto.js";
import { randomUUID } from "crypto";
import { PrismaService } from "../prisma/prisma.service.js";
import { OrderStatus } from "../generated/prisma/enums.js";
import { AdminOrderQueryDto } from "./dto/admin-order-query.dto.js";
import { UpdateOrderStatusDto } from "./dto/update-order-status.dto.js";

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(userId: string) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Get the customer's cart
      const cart = await tx.cart.findUnique({
        where: { userId },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      });

      if (!cart || cart.items.length === 0) {
        throw new BadRequestException("Your cart is empty");
      }

      // 2. Validate product availability
      for (const item of cart.items) {
        if (!item.product.isActive) {
          throw new BadRequestException(
            `${item.product.name} is currently unavailable`,
          );
        }
      }

      // 3. Deduct stock atomically.
      // Sort by product ID to reduce deadlock risk.
      const sortedItems = [...cart.items].sort((a, b) =>
        a.productId.localeCompare(b.productId),
      );

      for (const item of sortedItems) {
        const result = await tx.product.updateMany({
          where: {
            id: item.productId,
            isActive: true,
            stock: {
              gte: item.quantity,
            },
          },
          data: {
            stock: {
              decrement: item.quantity,
            },
          },
        });

        if (result.count !== 1) {
          throw new BadRequestException(
            `Insufficient stock for ${item.product.name}. Please update your cart.`,
          );
        }
      }

      // 4. Calculate totals using Prisma Decimal
      const subtotal = cart.items.reduce(
        (total, item) => total.plus(item.product.price.mul(item.quantity)),
        cart.items[0].product.price.mul(0),
      );

      const shippingFee = subtotal.mul(0);
      const tax = subtotal.mul(0);
      const total = subtotal.plus(shippingFee).plus(tax);

      // 5. Create the order and its items
      const order = await tx.order.create({
        data: {
          orderNumber: `ORD-${randomUUID().toUpperCase()}`,
          userId,
          subtotal,
          shippingFee,
          tax,
          total,
          items: {
            create: cart.items.map((item) => ({
              productId: item.productId,
              productName: item.product.name,
              sku: item.product.sku,
              price: item.product.price,
              quantity: item.quantity,
              lineTotal: item.product.price.mul(item.quantity),
            })),
          },
        },
        include: {
          items: true,
        },
      });

      // 6. Clear the cart only after order creation
      await tx.cartItem.deleteMany({
        where: {
          cartId: cart.id,
        },
      });

      return order;
    });
  }

  async findCustomerOrders(userId: string, query: OrderQueryDto) {
    const { page, limit, status } = query;

    const skip = (page - 1) * limit;

    const where = {
      userId,
      ...(status && { status }),
    };

    const [orders, total] = await Promise.all([
      this.prisma.order.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          items: {
            select: {
              id: true,
              productId: true,
              productName: true,
              sku: true,
              price: true,
              quantity: true,
              lineTotal: true,
            },
          },
        },
      }),

      this.prisma.order.count({
        where,
      }),
    ]);

    return {
      items: orders,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findOrderById(userId: string, orderId: string) {
    const order = await this.prisma.order.findFirst({
      where: {
        id: orderId,
        userId,
      },
      include: {
        items: {
          select: {
            id: true,
            productId: true,
            productName: true,
            sku: true,
            price: true,
            quantity: true,
            lineTotal: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException("Order not found");
    }

    return order;
  }

  async cancelOrder(userId: string, orderId: string) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Find customer's order
      const order = await tx.order.findFirst({
        where: {
          id: orderId,
          userId,
        },
        include: {
          items: true,
        },
      });

      if (!order) {
        throw new NotFoundException("Order not found");
      }

      // 2. Check cancellation eligibility
      const allowedStatuses: OrderStatus[] = [
        OrderStatus.PENDING,
        OrderStatus.CONFIRMED,
      ];

      if (!allowedStatuses.includes(order.status)) {
        throw new ConflictException(
          `Order cannot be cancelled because its status is ${order.status}`,
        );
      }

      // 3. Update status conditionally to prevent
      // duplicate stock restoration during concurrent requests
      const updated = await tx.order.updateMany({
        where: {
          id: orderId,
          userId,
          status: order.status,
        },
        data: {
          status: OrderStatus.CANCELLED,
        },
      });

      if (updated.count !== 1) {
        throw new ConflictException(
          "Order status changed. Please refresh and try again.",
        );
      }

      // 4. Restore product stock
      for (const item of order.items) {
        await tx.product.update({
          where: {
            id: item.productId,
          },
          data: {
            stock: {
              increment: item.quantity,
            },
          },
        });
      }

      // 5. Return updated order
      return tx.order.findUnique({
        where: {
          id: orderId,
        },
        include: {
          items: true,
        },
      });
    });
  }

  async findAllOrdersForAdmin(query: AdminOrderQueryDto) {
    const { page, limit, status, search } = query;

    const skip = (page - 1) * limit;

    const where = {
      ...(status && { status }),
      ...(search && {
        orderNumber: {
          contains: search,
          mode: "insensitive" as const,
        },
      }),
    };

    const [orders, total] = await Promise.all([
      this.prisma.order.findMany({
        where,
        skip,
        take: limit,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              role: true,
            },
          },
          items: {
            select: {
              id: true,
              productId: true,
              productName: true,
              sku: true,
              price: true,
              quantity: true,
              lineTotal: true,
            },
          },
        },
      }),

      this.prisma.order.count({ where }),
    ]);

    return {
      items: orders,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async updateOrderStatus(
    orderId: string,
    updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    const { status: newStatus } = updateOrderStatusDto;

    const allowedTransitions: Record<OrderStatus, OrderStatus[]> = {
      [OrderStatus.PENDING]: [OrderStatus.CONFIRMED],
      [OrderStatus.CONFIRMED]: [OrderStatus.PROCESSING],
      [OrderStatus.PROCESSING]: [OrderStatus.SHIPPED],
      [OrderStatus.SHIPPED]: [OrderStatus.DELIVERED],
      [OrderStatus.DELIVERED]: [],
      [OrderStatus.CANCELLED]: [],
    };

    return this.prisma.$transaction(async (tx) => {
      // 1. Find existing order
      const order = await tx.order.findUnique({
        where: { id: orderId },
      });

      if (!order) {
        throw new NotFoundException("Order not found");
      }

      // 2. Validate status transition
      const allowedStatuses = allowedTransitions[order.status];

      if (!allowedStatuses.includes(newStatus)) {
        throw new ConflictException(
          `Cannot change order status from ${order.status} to ${newStatus}`,
        );
      }

      // 3. Update only if the status hasn't changed concurrently
      const updated = await tx.order.updateMany({
        where: {
          id: orderId,
          status: order.status,
        },
        data: {
          status: newStatus,
        },
      });

      if (updated.count !== 1) {
        throw new ConflictException(
          "Order status changed. Please refresh and try again.",
        );
      }

      // 4. Return updated order
      return tx.order.findUnique({
        where: { id: orderId },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              role: true,
            },
          },
          items: true,
        },
      });
    });
  }
}
