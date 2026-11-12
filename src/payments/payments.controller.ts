import {
  Controller,
  Post,
  Body,
  Req,
  UseGuards,
  Get,
  Param,
  Query,
  Headers,
  HttpCode,
} from "@nestjs/common";

import { PaymentsService } from "./payments.service.js";
import { AuthGuard } from "@shared/shared/guards/auth.guard.js";
import { VerifyPaymentDto } from "./dto/verify-payment.dto.js";
import { PaymentQueryDto } from "./dto/payment-query.dto.js";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";

@ApiTags("Payments")
@Controller("payments")
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  // Public Razorpay webhook
  @Post("webhook")
  @HttpCode(200)
  @ApiOperation({ summary: "Handle Razorpay webhook events" })
  async handleWebhook(
    @Req() req: any,
    @Headers("x-razorpay-signature") signature: string,
  ) {
    return this.paymentsService.handleWebhook(req.rawBody, signature);
  }

  @UseGuards(AuthGuard)
  @Post("create")
  async createPayment(@Req() req: any, @Body("orderId") orderId: string) {
    return this.paymentsService.createPayment(req.user.id, orderId);
  }

  @UseGuards(AuthGuard)
  @Post("verify")
  async verifyPayment(@Req() req: any, @Body() dto: VerifyPaymentDto) {
    return this.paymentsService.verifyPayment(req.user.id, dto);
  }

  @UseGuards(AuthGuard)
  @Get(":paymentId")
  async getPaymentById(@Param("paymentId") paymentId: string, @Req() req: any) {
    return this.paymentsService.getPaymentById(paymentId, req.user);
  }

  @UseGuards(AuthGuard)
  @Get("order/:orderId")
  async getPaymentByOrderId(
    @Param("orderId") orderId: string,
    @Req() req: any,
  ) {
    return this.paymentsService.getPaymentByOrderId(orderId, req.user);
  }

  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({ summary: "Get all payments (Admin)" })
  @ApiResponse({
    status: 200,
    description: "Payments retrieved successfully",
  })
  @ApiBearerAuth()
  async getAllPayments(@Query() query: PaymentQueryDto, @Req() req: any) {
    return this.paymentsService.getAllPayments(query, req.user);
  }
}
