import {
  Controller,
  Post,
  Patch,
  Req,
  UseGuards,
  Get,
  Request,
  Query,
  Param,
  ParseUUIDPipe,
  Body,
} from "@nestjs/common";
import { OrdersService } from "./orders.service.js";
import { AuthGuard } from "@shared/shared/guards/auth.guard.js";
import { ResponseMessage } from "@shared/shared/decorators/response-message.decorator.js";
import { OrderQueryDto } from "./dto/order-query.dto.js";
import { AdminOrderQueryDto } from "./dto/admin-order-query.dto.js";
import { Roles } from "@shared/shared/decorators/roles.decorator.js";
import { RolesGuard } from "@shared/shared/guards/roles.guard.js";
import { UpdateOrderStatusDto } from "./dto/update-order-status.dto.js";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

interface AuthenticatedRequest {
  user: {
    id: string;
    email: string;
    role: string;
  };
}

@ApiTags("Orders")
@ApiBearerAuth()
@Controller("orders")
@UseGuards(AuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ResponseMessage("Order placed successfully")
  createOrder(@Req() request: AuthenticatedRequest) {
    return this.ordersService.createOrder(request.user.id);
  }

  @Get()
  @ResponseMessage("Orders retrieved successfully")
  findCustomerOrders(
    @Request() request: AuthenticatedRequest,
    @Query() query: OrderQueryDto,
  ) {
    return this.ordersService.findCustomerOrders(request.user.id, query);
  }

  @Get(":id")
  @ResponseMessage("Order retrieved successfully")
  findOrderById(
    @Request() request: AuthenticatedRequest,
    @Param("id", ParseUUIDPipe) id: string,
  ) {
    return this.ordersService.findOrderById(request.user.id, id);
  }

  @Patch(":id/cancel")
  @ResponseMessage("Order cancelled successfully")
  cancelOrder(
    @Request() request: AuthenticatedRequest,
    @Param("id", ParseUUIDPipe) id: string,
  ) {
    return this.ordersService.cancelOrder(request.user.id, id);
  }

  @Get("admin/all")
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @ResponseMessage("All orders retrieved successfully")
  findAllOrdersForAdmin(@Query() query: AdminOrderQueryDto) {
    return this.ordersService.findAllOrdersForAdmin(query);
  }

  @Patch(":id/status")
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @ResponseMessage("Order status updated successfully")
  updateOrderStatus(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    return this.ordersService.updateOrderStatus(id, updateOrderStatusDto);
  }
}
