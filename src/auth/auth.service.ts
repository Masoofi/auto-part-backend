import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { randomBytes, createHash } from "crypto";
import { ForgotPasswordDto } from "./dto/forgot-password.dto.js";
import { LoginDto } from "./dto/login.dto.js";
import { ConfigService } from "@nestjs/config";
import { MailService } from "../../libs/shared/src/mail/mail.service.js";

import { UsersService } from "../users/users.service.js";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly mailService: MailService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Find user
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException("Invalid email or password");
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid email or password");
    }

    // Check account status
    if (!user.isActive) {
      throw new UnauthorizedException("Your account is inactive");
    }

    // JWT payload
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    // Generate token
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      access_token: accessToken,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    };
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const { email } = dto;

    const successMessage =
      "If an account exists with this email, a password reset link will be sent.";

    // 1. Find user
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      return { message: successMessage };
    }

    // 2. Generate secure random token
    const resetToken = randomBytes(32).toString("hex");

    // 3. Hash token
    const hashedToken = createHash("sha256").update(resetToken).digest("hex");

    // 4. Set expiration (15 minutes)
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    // 5. Save hashed token
    await this.usersService.updatePasswordResetToken(
      user.id,
      hashedToken,
      expiresAt,
    );

    // 6. Get frontend URL
    const frontendUrl = this.configService.get<string>("FRONTEND_URL");

    if (!frontendUrl) {
      throw new Error("FRONTEND_URL is not configured");
    }

    // 7. Create reset link
    const resetLink = `${frontendUrl}/reset-password?token=${resetToken}`;

    // 8. Send email
    await this.mailService.sendPasswordResetEmail(email, resetLink);

    return { message: successMessage };
  }
}

