import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";

import { CartService } from "./cart.service.js";
import { AddCartItemDto } from "./dto/add-cart-item.dto.js";
import { AuthGuard } from "../../libs/shared/src/guards/auth.guard.js";
import { ResponseMessage } from "../../libs/shared/src/decorators/response-message.decorator.js";
import { UpdateCartItemDto } from "./dto/update-cart-item.dto.js";
import { ApiTags } from "@nestjs/swagger";

interface AuthenticatedRequest {
  user: {
    id: string;
    email: string;
    role: string;
  };
}

@ApiTags("Cart")
@Controller("cart")
@UseGuards(AuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post("items")
  @ResponseMessage("Product added to cart successfully")
  addItem(@Req() request: AuthenticatedRequest, @Body() dto: AddCartItemDto) {
    return this.cartService.addItem(request.user.id, dto);
  }

  @Get()
  @ResponseMessage("Cart retrieved successfully")
  getCart(@Req() request: AuthenticatedRequest) {
    return this.cartService.getCart(request.user.id);
  }

  @Patch("items/:itemId")
  @ResponseMessage("Cart item quantity updated successfully")
  updateItem(
    @Req() request: AuthenticatedRequest,
    @Param("itemId") itemId: string,
    @Body() dto: UpdateCartItemDto,
  ) {
    return this.cartService.updateItem(request.user.id, itemId, dto.quantity);
  }
  
  @Delete("items/:itemId")
  @ResponseMessage("Cart item removed successfully")
  removeItem(
    @Req() request: AuthenticatedRequest,
    @Param("itemId") itemId: string,
  ) {
    return this.cartService.removeItem(request.user.id, itemId);
  }

  @Delete()
  @ResponseMessage("Cart cleared successfully")
  clearCart(@Req() request: AuthenticatedRequest) {
    return this.cartService.clearCart(request.user.id);
  }
}
