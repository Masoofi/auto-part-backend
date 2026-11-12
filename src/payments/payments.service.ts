import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
  Logger,
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { VerifyPaymentDto } from "./dto/verify-payment.dto.js";
import { PrismaService } from "../prisma/prisma.service.js";
import { RazorpayGateway } from "./gateways/razorpay.gateway.js";
import { createHmac, timingSafeEqual } from "crypto";
import { PaymentQueryDto } from "./dto/payment-query.dto.js";
import { Prisma, PaymentStatus } from "../generated/prisma/client.js";

@Injectable()
export class PaymentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly razorpayGateway: RazorpayGateway,
    private readonly configService: ConfigService,
  ) {}

  async createPayment(userId: string, orderId: string) {
    // 1. Find order
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: {
        payments: true,
      },
    });

    if (!order) {
      throw new NotFoundException("Order not found");
    }

    // 2. Verify order ownership
    if (order.userId !== userId) {
      throw new ForbiddenException("You cannot pay for this order");
    }

    // 3. Check order status
    if (order.status === "CANCELLED") {
      throw new BadRequestException("Cannot pay for a cancelled order");
    }

    // 4. Prevent duplicate successful payments
    const alreadyPaid = order.payments.some(
      (payment) =>
        payment.status === "CAPTURED" ||
        payment.status === "REFUNDED" ||
        payment.status === "PARTIALLY_REFUNDED",
    );

    if (alreadyPaid) {
      throw new ConflictException("This order has already been paid");
    }

    // 5. Convert INR to paise
    const amountInPaise = order.total.mul(100).toNumber();

    if (!Number.isSafeInteger(amountInPaise) || amountInPaise <= 0) {
      throw new BadRequestException("Invalid order payment amount");
    }

    // 6. Create payment record
    const payment = await this.prisma.payment.create({
      data: {
        orderId: order.id,
        provider: "RAZORPAY",
        amount: order.total,
        currency: "INR",
      },
    });

    try {
      // 7. Create Razorpay order
      const razorpayOrder = await this.razorpayGateway.createOrder(
        amountInPaise,
        payment.id,
        "INR",
      );

      // 8. Update payment with Razorpay order ID
      await this.prisma.payment.update({
        where: { id: payment.id },
        data: {
          providerOrderId: razorpayOrder.id,
        },
      });

      // 9. Return checkout details
      return {
        paymentId: payment.id,
        orderId: order.id,
        razorpayOrderId: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        keyId: this.configService.get<string>("RAZORPAY_KEY_ID"),
      };
    } catch (error) {
      // 10. Mark failed payment initialization
      await this.prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: "FAILED",
          failureReason:
            error instanceof Error
              ? error.message.slice(0, 500)
              : "Payment initialization failed",
        },
      });

      throw new InternalServerErrorException(
        "Unable to initialize payment. Please try again.",
      );
    }
  }

  async verifyPayment(userId: string, dto: VerifyPaymentDto) {
    // 1. Find payment and verify ownership
    const payment = await this.prisma.payment.findFirst({
      where: {
        providerOrderId: dto.razorpay_order_id,
        provider: "RAZORPAY",
        order: {
          userId,
        },
      },
      include: {
        order: true,
      },
    });

    if (!payment) {
      throw new NotFoundException("Payment not found");
    }

    // 2. Prevent duplicate verification
    if (payment.status === "CAPTURED") {
      return {
        message: "Payment already verified",
        paymentId: payment.id,
        status: payment.status,
      };
    }

    // 3. Generate signature using stored order ID
    const secret = this.configService.get<string>("RAZORPAY_KEY_SECRET");

    if (!secret) {
      throw new InternalServerErrorException(
        "Razorpay secret is not configured",
      );
    }

    const expectedSignature = createHmac("sha256", secret)
      .update(`${payment.providerOrderId}|${dto.razorpay_payment_id}`)
      .digest();

    const receivedSignature = Buffer.from(dto.razorpay_signature, "hex");

    // 4. Compare signatures securely
    if (
      expectedSignature.length !== receivedSignature.length ||
      !timingSafeEqual(expectedSignature, receivedSignature)
    ) {
      throw new BadRequestException("Invalid payment signature");
    }

    // 5. Fetch actual payment from Razorpay
    const razorpayPayment = await this.razorpayGateway.fetchPayment(
      dto.razorpay_payment_id,
    );

    // 6. Validate payment details
    const expectedAmount = payment.amount.mul(100).toNumber();

    if (
      razorpayPayment.order_id !== payment.providerOrderId ||
      razorpayPayment.amount !== expectedAmount ||
      razorpayPayment.currency !== payment.currency
    ) {
      throw new BadRequestException("Payment details do not match");
    }

    // 7. Check actual payment status
    if (
      razorpayPayment.status !== "captured" &&
      razorpayPayment.status !== "authorized"
    ) {
      throw new BadRequestException("Payment is not successful");
    }

    // 8. Update database
    const status =
      razorpayPayment.status === "captured" ? "CAPTURED" : "AUTHORIZED";

    await this.prisma.$transaction(async (tx) => {
      await tx.payment.update({
        where: { id: payment.id },
        data: {
          providerPaymentId: dto.razorpay_payment_id,
          status,
          paymentMethod: razorpayPayment.method,
          paidAt: status === "CAPTURED" ? new Date() : null,
        },
      });

      if (status === "CAPTURED") {
        await tx.order.update({
          where: { id: payment.orderId },
          data: {
            status: "CONFIRMED",
          },
        });
      }
    });

    return {
      message: "Payment verified successfully",
      paymentId: payment.id,
      orderId: payment.orderId,
      status,
    };
  }

  async getPaymentById(paymentId: string, user: any) {
    const payment = await this.prisma.payment.findUnique({
      where: { id: paymentId },
      include: {
        order: {
          select: {
            id: true,
            userId: true,
          },
        },
      },
    });

    if (!payment) {
      throw new NotFoundException("Payment not found");
    }

    if (user.role !== "ADMIN" && payment.order.userId !== user.id) {
      throw new ForbiddenException(
        "You are not allowed to access this payment",
      );
    }

    return payment;
  }

  async getPaymentByOrderId(orderId: string, user: any) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      select: {
        id: true,
        userId: true,
      },
    });

    if (!order) {
      throw new NotFoundException("Order not found");
    }

    if (user.role !== "ADMIN" && order.userId !== user.id) {
      throw new ForbiddenException("You are not allowed to access this order");
    }

    const payments = await this.prisma.payment.findMany({
      where: { orderId },
      orderBy: { createdAt: "desc" },
    });

    return payments;
  }

  async getAllPayments(query: PaymentQueryDto, user: any) {
    const { page = 1, limit = 10, search, status, fromDate, toDate } = query;

    if (user.role !== "ADMIN") {
      throw new ForbiddenException("Only admins can access all payments");
    }

    const skip = (page - 1) * limit;

    const where: Prisma.PaymentWhereInput = {
      ...(status && { status }),

      ...(search && {
        OR: [
          { id: search },
          { orderId: search },
          {
            providerOrderId: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            providerPaymentId: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),

      ...(fromDate || toDate
        ? {
            createdAt: {
              ...(fromDate && { gte: new Date(fromDate) }),
              ...(toDate && { lte: new Date(toDate) }),
            },
          }
        : {}),
    };

    const [payments, total] = await Promise.all([
      this.prisma.payment.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          order: {
            select: {
              id: true,
              userId: true,
            },
          },
        },
      }),

      this.prisma.payment.count({ where }),
    ]);

    return {
      payments,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page < Math.ceil(total / limit),
        hasPreviousPage: page > 1,
      },
    };
  }

  async handleWebhook(rawBody: Buffer | undefined, signature: string) {
    // 1. Validate request
    if (!rawBody || !signature) {
      throw new BadRequestException("Missing webhook body or signature");
    }
    Logger.log("Received webhook", "PaymentsService")
    Logger.log(`Raw body: ${rawBody.toString("utf8")}`, "PaymentsService")
    Logger.log(`Signature: ${signature}`, "PaymentsService")

    // 2. Get webhook secret
    const webhookSecret = this.configService.get<string>(
      "RAZORPAY_WEBHOOK_SECRET",
    );

    if (!webhookSecret) {
      throw new InternalServerErrorException(
        "Razorpay webhook secret is not configured",
      );
    }

    // 3. Generate expected signature
    const expectedSignature = createHmac("sha256", webhookSecret)
      .update(rawBody)
      .digest();

    // 4. Validate received signature format
    if (!/^[a-fA-F0-9]{128}$/.test(signature)) {
      throw new UnauthorizedException("Invalid webhook signature");
    }

    const receivedSignature = Buffer.from(signature, "hex");

    // 5. Secure signature comparison
    if (
      expectedSignature.length !== receivedSignature.length ||
      !timingSafeEqual(expectedSignature, receivedSignature)
    ) {
      throw new UnauthorizedException("Invalid webhook signature");
    }

    // 6. Parse verified payload
    let eventData: any;

    try {
      eventData = JSON.parse(rawBody.toString("utf8"));
    } catch {
      throw new BadRequestException("Invalid webhook payload");
    }

    const event = eventData.event;

    // 7. Identify supported events
    if (!["payment.captured", "payment.failed", "order.paid"].includes(event)) {
      return {
        message: "Webhook event ignored",
        event,
      };
    }

    const razorpayPayment = eventData.payload?.payment?.entity;

    if (!razorpayPayment?.id || !razorpayPayment?.order_id) {
      throw new BadRequestException("Invalid Razorpay payment payload");
    }

    // 8. Find payment in database
    const payment = await this.prisma.payment.findFirst({
      where: {
        providerOrderId: razorpayPayment.order_id,
        provider: "RAZORPAY",
      },
    });

    if (!payment) {
      throw new NotFoundException("Payment record not found");
    }

    // 9. Prevent mismatched payment details
    const expectedAmount = payment.amount.mul(100).toNumber();

    if (
      razorpayPayment.amount !== expectedAmount ||
      razorpayPayment.currency !== payment.currency
    ) {
      throw new BadRequestException("Webhook payment details do not match");
    }

    // 10. Handle successful payment
    if (event === "payment.captured" || event === "order.paid") {
      if (
        payment.status === "CAPTURED" ||
        payment.status === "REFUNDED" ||
        payment.status === "PARTIALLY_REFUNDED"
      ) {
        return {
          message: "Payment already processed",
          paymentId: payment.id,
          status: payment.status,
        };
      }

      await this.prisma.$transaction(async (tx) => {
        await tx.payment.update({
          where: { id: payment.id },
          data: {
            providerPaymentId: razorpayPayment.id,
            status: "CAPTURED",
            paymentMethod: razorpayPayment.method,
            paidAt: new Date(),
          },
        });

        // Update order status to CONFIRMED after successful payment
        await tx.order.update({
          where: { id: payment.orderId },
          data: {
            status: "CONFIRMED",
          },
        });
      });

      return {
        message: "Payment captured successfully",
        paymentId: payment.id,
        orderId: payment.orderId,
        status: "CAPTURED",
      };
    }

    // 11. Handle failed payment
    if (event === "payment.failed") {
      if (
        payment.status === "CAPTURED" ||
        payment.status === "REFUNDED" ||
        payment.status === "PARTIALLY_REFUNDED"
      ) {
        return {
          message: "Payment already completed; failure event ignored",
          paymentId: payment.id,
          status: payment.status,
        };
      }

      await this.prisma.payment.update({
        where: { id: payment.id },
        data: {
          providerPaymentId: razorpayPayment.id,
          status: "FAILED",
          failureReason: razorpayPayment.error_description || "Payment failed",
        },
      });

      return {
        message: "Payment failure recorded",
        paymentId: payment.id,
        status: "FAILED",
      };
    }
  }
}
