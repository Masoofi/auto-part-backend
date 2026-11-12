
import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from '../../../libs/shared/src/dto/pagination.dto.js';
import { OrderStatus } from '../../generated/prisma/client.js';

export class OrderQueryDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;
}
