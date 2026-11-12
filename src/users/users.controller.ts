
import { Body, Controller, Post, Get, Query, Patch, Param, UseGuards, ParseUUIDPipe } from '@nestjs/common';
import { AuthGuard } from '@shared/shared/guards/auth.guard.js';
import { RolesGuard } from '@shared/shared/guards/roles.guard.js';
import { Roles } from '@shared/shared/decorators/roles.decorator.js';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UserQueryDto } from './dto/user-query.dto.js';
import { UpdateUserRoleDto } from './dto/update-user.dto.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get()
  findAll(@Query() query: UserQueryDto) {
    return this.usersService.findAll(query);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserRoleDto) {
    return this.usersService.update(id, updateUserDto);
  }
}
