import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import Razorpay from "razorpay";

@Injectable()
export class RazorpayGateway {
  private readonly razorpay: Razorpay;

  constructor(private readonly configService: ConfigService) {
    const keyId = this.configService.get<string>("RAZORPAY_KEY_ID");

    const keySecret = this.configService.get<string>("RAZORPAY_KEY_SECRET");

    if (!keyId || !keySecret) {
      throw new InternalServerErrorException(
        "Razorpay credentials are missing",
      );
    }

    this.razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });
  }

  async createOrder(amount: number, receipt: string, currency = "INR") {
    return this.razorpay.orders.create({
      amount,
      currency,
      receipt,
    });
  }

  async fetchPayment(paymentId: string) {
    return this.razorpay.payments.fetch(paymentId);
  }
}
