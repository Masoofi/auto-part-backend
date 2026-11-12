import { IsIn, IsOptional, IsString, IsEmail } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto.js';

export class UpdateUserRoleDto extends PartialType(CreateUserDto) {
     @IsOptional()
     @IsIn(['CUSTOMER', 'ADMIN'])
     role?: 'CUSTOMER' | 'ADMIN';

     @IsOptional()
     @IsIn([true, false])
     isActive?: true | false;
}