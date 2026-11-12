
import {
  Body,
  Controller,
  Post,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';

import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
import { AuthGuard } from '../../libs/shared/src/guards/auth.guard.js';
import { Roles } from '../../libs/shared/src/decorators/roles.decorator.js';
import { PermissionGuard } from '../../libs/shared/src/guards/permission.guard.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  getProfile(@Req() request: any) {
    return request.user;
  }

  @Get('admin-check')
  @UseGuards(AuthGuard, PermissionGuard)
  @Roles('ADMIN')
  adminCheck() {
    return {
      message: 'Welcome Admin!',
    };
  }
}
