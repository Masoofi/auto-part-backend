
import {
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';

export class VerifyPaymentDto {
  @IsString()
  @IsNotEmpty()
  razorpay_order_id: string;

  @IsString()
  @IsNotEmpty()
  razorpay_payment_id: string;

  @IsString()
  @Matches(/^[a-fA-F0-9]{64}$/)
  razorpay_signature: string;
}
