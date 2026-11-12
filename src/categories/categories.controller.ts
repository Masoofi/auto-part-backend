import { Body, Controller, Get, Post, Query, Patch, Param, UseGuards, Delete, ParseUUIDPipe } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@shared/shared/guards/auth.guard.js";
import { RolesGuard } from "@shared/shared/guards/roles.guard.js";
import { Roles } from "@shared/shared/decorators/roles.decorator.js";
import { UpdateCategoryDto } from "./dto/update-category.dto.js";
import { CategoriesService } from "./categories.service.js";
import { CreateCategoryDto } from "./dto/create-category.dto.js";
import { PaginationDto } from "../../libs/shared/src/dto/pagination.dto.js";

@ApiTags("Categories")
@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(@Query() query: PaginationDto) {
    return this.categoriesService.findAll(query.page, query.limit);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Post()
  create(@Body() body: CreateCategoryDto) {
    return this.categoriesService.create(body.name);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Patch(":id")
  update(@Param("id") id: string, @Body() body: UpdateCategoryDto) {
    return this.categoriesService.update(String(id), body);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Delete(":id")
  remove(@Param("id", ParseUUIDPipe) id: string) {
    return this.categoriesService.remove(id);
  }
}
