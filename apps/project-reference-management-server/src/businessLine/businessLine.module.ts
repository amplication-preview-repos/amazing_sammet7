import { Module } from "@nestjs/common";
import { BusinessLineModuleBase } from "./base/businessLine.module.base";
import { BusinessLineService } from "./businessLine.service";
import { BusinessLineController } from "./businessLine.controller";
import { BusinessLineResolver } from "./businessLine.resolver";

@Module({
  imports: [BusinessLineModuleBase],
  controllers: [BusinessLineController],
  providers: [BusinessLineService, BusinessLineResolver],
  exports: [BusinessLineService],
})
export class BusinessLineModule {}
