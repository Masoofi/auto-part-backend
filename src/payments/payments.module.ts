
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PaymentsController } from './payments.controller.js';
import { PaymentsService } from './payments.service.js';
import { RazorpayGateway } from './gateways/razorpay.gateway.js';

@Module({
  imports: [ConfigModule],
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    RazorpayGateway,
  ],
  exports: [PaymentsService],
})
export class PaymentsModule {}
