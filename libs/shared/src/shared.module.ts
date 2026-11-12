import { Global, Module } from '@nestjs/common';
import {
  APP_FILTER,
  APP_INTERCEPTOR,
} from '@nestjs/core';

import { SharedService } from './shared.service.js';
import { ResponseInterceptor } from './interceptors/response.interceptor.js';
import { HttpExceptionFilter } from './filters/http-exception.filter.js';
import { PermissionGuard } from './guards/permission.guard.js';
import { AuthGuard } from './guards/auth.guard.js';


@Global()
@Module({
  providers: [
    SharedService,

    // Global response interceptor
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },

    // Global exception filter
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },

    AuthGuard,
    PermissionGuard,
  ],
  exports: [
    SharedService,
    AuthGuard,
    PermissionGuard,
  ],
})
export class SharedModule {}