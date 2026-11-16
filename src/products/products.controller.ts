import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  ParseUUIDPipe,
  BadRequestException,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { ProductsService } from "./products.service.js";
import { CreateProductDto } from "./dto/create-product.dto.js";
import { UpdateProductDto } from "./dto/update-product.dto.js";
import { ProductQueryDto } from "./dto/product-query.dto.js";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@shared/shared/guards/auth.guard.js";
import { RolesGuard } from "@shared/shared/guards/roles.guard.js";
import { Roles } from "@shared/shared/decorators/roles.decorator.js";
import { FileInterceptor } from "@nestjs/platform-express/multer/interceptors/index.js";

type RestoreProductBody = {
  isActive: boolean;
};

@ApiTags("Products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(@Query() query: ProductQueryDto) {
    return this.productsService.findAll(query);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Get("admin/list")
  findAllForAdmin(@Query() query: ProductQueryDto) {
    return this.productsService.findAll(query, true);
  }

  @Get(":id")
  findOne(@Param("id", ParseUUIDPipe) id: string) {
    return this.productsService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Post()
  create(
    @Body()
    body: CreateProductDto,
  ) {
    return this.productsService.create(body);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Patch(":id")
  update(@Param("id") id: string, @Body() body: UpdateProductDto) {
    return this.productsService.update(id, body);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.remove(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Patch(":id/restore")
  restore(@Param("id") id: string, @Body() body: RestoreProductBody) {
    return this.productsService.restore(id, body);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Patch(":id/image")
  @UseInterceptors(
    FileInterceptor("image", {
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
      fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/^image\/(jpeg|png|webp)$/)) {
          return callback(
            new BadRequestException(
              "Only JPEG, PNG and WebP images are allowed",
            ),
            false,
          );
        }

        callback(null, true);
      },
    }),
  )
  async updateProductImage(
    @Param("id", ParseUUIDPipe) productId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      throw new BadRequestException("Image file is required");
    }

    return this.productsService.updateProductImage(productId, file);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Delete(":id/image")
  async deleteProductImage(@Param("id", ParseUUIDPipe) id: string) {
    return this.productsService.deleteProductImage(id);
  }
}
