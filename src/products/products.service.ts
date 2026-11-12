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

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

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
}
