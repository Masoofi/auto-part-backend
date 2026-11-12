
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Controller('health')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async checkHealth() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;

      return {
        status: 'ok',
        message: 'Backend and PostgreSQL are connected through Prisma',
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Prisma database connection failed',
        details:
          error instanceof Error ? error.message : 'Unknown database error',
      };
    }
  }
}