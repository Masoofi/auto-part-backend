
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [categories, count] = await Promise.all([
      this.prisma.category.findMany({
        orderBy: { name: 'asc' },
        skip,
        take: limit,
      }),
      this.prisma.category.count(),
    ]);

    return {
      data: categories,
      count,
      total: categories.length,
      page,
      page_count: Math.ceil(count / limit),
    };
  }

  async create(name: string) {
    const slug = name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    return this.prisma.category.create({
      data: { name: name.trim(), slug },
    });
  }

  async update(id: string, body: UpdateCategoryDto) {
    const slug = body.name
      ?.trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    return this.prisma.category.update({
      where: { id },
      data: { ...body, slug },
    });
  }

  async remove(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: { _count: { select: { products: true } } },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    if (category._count.products > 0) {
      throw new ConflictException(
        'Category has products. Move or remove them before deleting it',
      );
    }

    await this.prisma.category.delete({ where: { id } });

    return { id };
  }
}

