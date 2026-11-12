import { Type } from 'class-transformer';
import {
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { PaginationDto } from '../../../libs/shared/src/dto/pagination.dto.js';

export class UserQueryDto extends PaginationDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsIn([true, false])
  isActive?: true | false;
  
  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsIn(['firstName', 'lastName', 'email', 'createdAt'])
  sortBy?: 'firstName' | 'lastName' | 'email' | 'createdAt';

  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc';
}