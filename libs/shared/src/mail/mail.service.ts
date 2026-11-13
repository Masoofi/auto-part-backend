
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: Number(this.configService.get('MAIL_PORT')),
      secure: false,
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });
  }

  async sendPasswordResetEmail(
    email: string,
    resetLink: string,
  ) {
    await this.transporter.sendMail({
      from: this.configService.get<string>('MAIL_USER'),
      to: email,
      subject: 'Reset Your Password',
      html: `
        <h2>Password Reset Request</h2>
        <p>Click the link below to reset your password.</p>
        <a href="${resetLink}">Reset Password</a>
        <p>This link expires in 15 minutes.</p>
        <p>If you didn't request this, ignore this email.</p>
      `,
    });
  }
}
