import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
  Logger,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { CreateProductDto } from "./dto/create-product.dto.js";
import { UpdateProductDto } from "./dto/update-product.dto.js";
import { ProductQueryDto } from "./dto/product-query.dto.js";
import type { Prisma } from "../generated/prisma/client.js";
import { CloudinaryService } from "../cloudinary/cloudinary.service.js";

@Injectable()
export class ProductsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}
  async findAll(
    query: ProductQueryDto = {
      page: 1,
      limit: 10,
    },
    includeInactive = false,
  ) {
    const { page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;
    Logger.log(
      `Fetching products with page: ${page}, limit: ${limit}`,
      "ProductsService",
    );
    Logger.log(`Filters applied: ${JSON.stringify(query)}`, "ProductsService");
    const {
      search,
      categoryId,
      brand,
      minPrice,
      maxPrice,
      sortBy = "createdAt",
      sortOrder = "desc",
    } = query;

    if (
      minPrice !== undefined &&
      maxPrice !== undefined &&
      minPrice > maxPrice
    ) {
      throw new BadRequestException(
        "Minimum price cannot be greater than maximum price.",
      );
    }

    const where: Prisma.ProductWhereInput = {
      ...(!includeInactive && { isActive: true }),

      ...(search?.trim() && {
        OR: [
          {
            name: {
              contains: search.trim(),
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: search.trim(),
              mode: "insensitive",
            },
          },
        ],
      }),

      ...(categoryId && { categoryId }),

      ...(brand && {
        brand: {
          contains: brand,
          mode: "insensitive",
        },
      }),

      ...((minPrice !== undefined || maxPrice !== undefined) && {
        price: {
          ...(minPrice !== undefined && { gte: minPrice }),
          ...(maxPrice !== undefined && { lte: maxPrice }),
        },
      }),
    };

    const [products, count] = await Promise.all([
      this.prisma.product.findMany({
        where,
        skip,
        take: limit,
        include: {
          category: true,
        },
        orderBy: {
          [sortBy]: sortOrder,
        },
      }),

      this.prisma.product.count({ where }),
    ]);

    return {
      data: products,
      count,
      total: products.length,
      page,
      page_count: Math.ceil(count / limit),
    };
  }

  async create(body: CreateProductDto) {
    const name = body.name.trim();
    const sku = body.sku.trim().toUpperCase();

    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const existing = await this.prisma.product.findFirst({
      where: {
        OR: [{ sku }, { slug }],
      },
    });

    if (existing) {
      throw new ConflictException(
        "A product with this SKU or slug already exists.",
      );
    }

    const category = await this.prisma.category.findUnique({
      where: { id: body.categoryId },
    });

    if (!category) {
      throw new NotFoundException("Category not found.");
    }

    return this.prisma.product.create({
      data: {
        sku,
        name,
        slug,
        description: body.description,
        price: body.price,
        stock: body.stock ?? 0,
        brand: body.brand,
        imageUrl: body.imageUrl,
        categoryId: body.categoryId,
      },
      include: { category: true },
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!product) {
      throw new NotFoundException("Product not found.");
    }

    return product;
  }

  async update(id: string, body: UpdateProductDto) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException("Product not found.");
    }

    const name = body.name?.trim();
    const sku = body.sku?.trim().toUpperCase();

    const slug = name
      ? name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
      : undefined;

    const existing = await this.prisma.product.findFirst({
      where: {
        id: { not: id },
        OR: [...(sku ? [{ sku }] : []), ...(slug ? [{ slug }] : [])],
      },
    });

    if (existing) {
      throw new ConflictException(
        "Another product already uses this SKU or slug.",
      );
    }

    if (body.categoryId) {
      const category = await this.prisma.category.findUnique({
        where: { id: body.categoryId },
      });

      if (!category) {
        throw new NotFoundException("Category not found.");
      }
    }

    return this.prisma.product.update({
      where: { id },
      data: {
        ...body,
        ...(name !== undefined ? { name } : {}),
        ...(sku !== undefined ? { sku } : {}),
        ...(slug !== undefined ? { slug } : {}),
      },
      include: { category: true },
    });
  }

  async remove(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException("Product not found.");
    }

    return this.prisma.product.update({
      where: { id },
      data: {
        isActive: false,
      },
      include: { category: true },
    });
  }

  async restore(id: string, data: { isActive: boolean }) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException("Product not found.");
    }

    return this.prisma.product.update({
      where: { id },
      data,
      include: { category: true },
    });
  }

  async updateProductImage(productId: string, file: Express.Multer.File) {
    // 1. Find existing product
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
      include: { category: true },
    });

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    // 2. Upload new image
    const uploadedImage = await this.cloudinaryService.uploadImage(
      file,
      "auto-parts/products",
    );

    try {
      // 3. Update image details in PostgreSQL
      const updatedProduct = await this.prisma.product.update({
        where: { id: productId },
        data: {
          imageUrl: uploadedImage.url,
          imagePublicId: uploadedImage.publicId,
        },
        include: { category: true },
      });

      // 4. Delete previous image after successful database update
      if (product.imagePublicId) {
        try {
          await this.cloudinaryService.deleteImage(product.imagePublicId);
        } catch (error) {
          // Database update succeeded; old image cleanup can be retried.
          console.error("Old Cloudinary image cleanup failed:", error);
        }
      }

      // 5. Return updated product
      return {
        message: "Product image updated successfully",
        product: updatedProduct,
      };
    } catch (error) {
      // Clean up newly uploaded image if database update fails
      try {
        await this.cloudinaryService.deleteImage(uploadedImage.publicId);
      } catch (cleanupError) {
        console.error("New Cloudinary image cleanup failed:", cleanupError);
      }

      throw error;
    }
  }

  async deleteProductImage(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException("Product not found");
    }

    if (!product.imagePublicId) {
      throw new NotFoundException("Product image not found");
    }

    // Delete image from Cloudinary
    await this.cloudinaryService.deleteImage(product.imagePublicId);

    // Remove image details from database
    await this.prisma.product.update({
      where: { id },
      data: {
        imageUrl: null,
        imagePublicId: null,
      },
    });

    return {
      message: "Product image deleted successfully",
    };
  }
}
