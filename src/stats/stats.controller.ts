import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "@shared/shared/guards/auth.guard.js";
import { RolesGuard } from "@shared/shared/guards/roles.guard.js";
import { Roles } from "@shared/shared/decorators/roles.decorator.js";
import { ResponseMessage } from "@shared/shared/decorators/response-message.decorator.js";
import { StatsService } from "./stats.service.js";

@ApiTags("Admin")
@ApiBearerAuth()
@Controller("admin/stats")
@UseGuards(AuthGuard, RolesGuard)
@Roles("ADMIN")
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get()
  @ResponseMessage("Stats retrieved successfully")
  getOverview() {
    return this.statsService.getOverview();
  }
}
