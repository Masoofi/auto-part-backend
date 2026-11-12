import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service.js";
import { AddCartItemDto } from "./dto/add-cart-item.dto.js";

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async addItem(userId: string, dto: AddCartItemDto) {
    const { productId, quantity } = dto;

    return this.prisma.$transaction(async (tx) => {
      // 1. Find the product
      const product = await tx.product.findUnique({
        where: { id: productId },
      });

      if (!product) {
        throw new NotFoundException("Product not found");
      }

      // 2. Check whether product is active
      if (!product.isActive) {
        throw new BadRequestException("This product is currently unavailable");
      }

      // 3. Find existing cart or create a new one
      const cart = await tx.cart.upsert({
        where: { userId },
        update: {},
        create: { userId },
      });

      // 4. Check whether this product is already in the cart
      const existingItem = await tx.cartItem.findUnique({
        where: {
          cartId_productId: {
            cartId: cart.id,
            productId,
          },
        },
      });

      // 5. Calculate the new quantity
      const newQuantity = (existingItem?.quantity ?? 0) + quantity;

      // 6. Check available stock
      if (newQuantity > product.stock) {
        throw new BadRequestException(
          `Only ${product.stock} items are available in stock`,
        );
      }

      // 7. Create or update cart item
      if (existingItem) {
        await tx.cartItem.update({
          where: { id: existingItem.id },
          data: { quantity: newQuantity },
        });
      } else {
        await tx.cartItem.create({
          data: {
            cartId: cart.id,
            productId,
            quantity,
          },
        });
      }

      // 8. Return the updated cart
      return tx.cart.findUnique({
        where: { id: cart.id },
        include: {
          items: {
            include: {
              product: {
                select: {
                  id: true,
                  name: true,
                  sku: true,
                  price: true,
                  stock: true,
                  imageUrl: true,
                },
              },
            },
          },
        },
      });
    });
  }

  async getCart(userId: string) {
    // 1. Find the logged-in user's cart
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                sku: true,
                price: true,
                stock: true,
                imageUrl: true,
                isActive: true,
              },
            },
          },
        },
      },
    });

    // 2. If cart doesn't exist, return an empty cart
    if (!cart) {
      return {
        id: null,
        userId,
        items: [],
        summary: {
          uniqueItems: 0,
          totalQuantity: 0,
          subtotal: "0.00",
        },
      };
    }

    // 3. Calculate subtotal using Prisma Decimal
    const subtotal =
      cart.items.length > 0
        ? cart.items
            .reduce(
              (total, item) =>
                total.plus(item.product.price.mul(item.quantity)),
              cart.items[0].product.price.mul(0),
            )
            .toFixed(2)
        : "0.00";

    // 4. Calculate individual item totals
    const items = cart.items.map((item) => ({
      id: item.id,
      productId: item.productId,
      quantity: item.quantity,
      product: item.product,
      lineTotal: item.product.price.mul(item.quantity).toFixed(2),
    }));

    // 5. Calculate total quantity
    const totalQuantity = cart.items.reduce(
      (total, item) => total + item.quantity,
      0,
    );

    return {
      id: cart.id,
      userId: cart.userId,
      items,
      summary: {
        uniqueItems: cart.items.length,
        totalQuantity,
        subtotal,
      },
    };
  }

  async updateItem(userId: string, itemId: string, quantity: number) {
    // 1. Find the cart item belonging to this user
    const cartItem = await this.prisma.cartItem.findFirst({
      where: {
        id: itemId,
        cart: {
          userId,
        },
      },
      include: {
        product: true,
      },
    });

    if (!cartItem) {
      throw new NotFoundException("Cart item not found");
    }

    // 2. Check whether product is active
    if (!cartItem.product.isActive) {
      throw new BadRequestException("This product is currently unavailable");
    }

    // 3. Check available stock
    if (quantity > cartItem.product.stock) {
      throw new BadRequestException(
        `Only ${cartItem.product.stock} items are available in stock`,
      );
    }

    // 4. Update quantity
    return this.prisma.cartItem.update({
      where: {
        id: itemId,
      },
      data: {
        quantity,
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            sku: true,
            price: true,
            stock: true,
            imageUrl: true,
          },
        },
      },
    });
  }

  async removeItem(userId: string, itemId: string) {
    // 1. Find the cart item belonging to this user
    const cartItem = await this.prisma.cartItem.findFirst({
      where: {
        id: itemId,
        cart: {
          userId,
        },
      },
    });

    if (!cartItem) {
      throw new NotFoundException("Cart item not found");
    }

    // 2. Remove the cart item
    await this.prisma.cartItem.delete({
      where: {
        id: itemId,
      },
    });

    return this.getCart(userId);
  }

  async clearCart(userId: string) {
    // 1. Find the cart belonging to this user
    const cart = await this.prisma.cart.findFirst({
      where: {
        userId,
      },
      include: {
        items: true,
      },
    });

    if (!cart) {
      throw new NotFoundException("Cart not found");
    }

    // 2. Remove all cart items
    await this.prisma.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });

    return this.getCart(userId);
  }
}
