import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller.js';
import { ProductsService } from './products.service.js';
import { CloudinaryModule } from '../cloudinary/cloudinary.module.js';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [CloudinaryModule],
})
export class ProductsModule {}
