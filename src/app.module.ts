
import { Module } from '@nestjs/common';
import { SharedModule } from '../libs/shared/src/shared.module.js';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { Pool } from 'pg';
import { PrismaModule } from './prisma/prisma.module.js';
import { CategoriesService } from './categories/categories.service.js';
import { CategoriesController } from './categories/categories.controller.js';
import { CategoriesModule } from './categories/categories.module.js';
import { ProductsService } from './products/products.service.js';
import { ProductsModule } from './products/products.module.js';
import { ProductsController } from './products/products.controller.js';
import { UsersService } from './users/users.service.js';
import { UsersController } from './users/users.controller.js';
import { UsersModule } from './users/users.module.js';
import { AuthModule } from './auth/auth.module.js';
import { CartModule } from './cart/cart.module.js';
import { OrdersModule } from './orders/orders.module.js';
import { PaymentsModule } from './payments/payments.module.js';
import { StatsModule } from './stats/stats.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
    SharedModule,
    PrismaModule,
    CategoriesModule,
    ProductsModule,
    UsersModule,
    AuthModule,
    CartModule,
    OrdersModule,
    PaymentsModule,
    StatsModule,
  ],
  controllers: [AppController, CategoriesController, ProductsController, UsersController],
  providers: [
    {
      provide: 'PG_POOL',
      useFactory: () =>
        new Pool({
          host: process.env.DB_HOST || 'localhost',
          port: Number(process.env.DB_PORT || 5432),
          user: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
        }),
    },
    CategoriesService,
    ProductsService,
    UsersService,
  ],
  exports: ['PG_POOL'],
})
export class AppModule {}