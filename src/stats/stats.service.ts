import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";

const LOW_STOCK_THRESHOLD = 5;

@Injectable()
export class StatsService {
  constructor(private readonly prisma: PrismaService) {}

  async getOverview() {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const [
      totalOrders,
      ordersToday,
      statusGroups,
      revenue,
      activeProducts,
      lowStockCount,
      lowStockProducts,
      customers,
    ] = await Promise.all([
      this.prisma.order.count(),
      this.prisma.order.count({ where: { createdAt: { gte: startOfToday } } }),
      this.prisma.order.groupBy({ by: ["status"], _count: { _all: true } }),
      this.prisma.payment.aggregate({
        where: { status: "CAPTURED" },
        _sum: { amount: true },
      }),
      this.prisma.product.count({ where: { isActive: true } }),
      this.prisma.product.count({
        where: { isActive: true, stock: { lte: LOW_STOCK_THRESHOLD } },
      }),
      this.prisma.product.findMany({
        where: { isActive: true, stock: { lte: LOW_STOCK_THRESHOLD } },
        orderBy: { stock: "asc" },
        take: 5,
        select: { id: true, name: true, sku: true, stock: true },
      }),
      this.prisma.user.count({ where: { role: "CUSTOMER" } }),
    ]);

    const ordersByStatus: Record<string, number> = {};
    for (const group of statusGroups) {
      ordersByStatus[group.status] = group._count._all;
    }

    return {
      orders: {
        total: totalOrders,
        today: ordersToday,
        byStatus: ordersByStatus,
      },
      revenue: (revenue._sum.amount ?? 0).toString(),
      products: {
        active: activeProducts,
        lowStockThreshold: LOW_STOCK_THRESHOLD,
        lowStockCount,
        lowStock: lowStockProducts,
      },
      customers,
    };
  }
}
