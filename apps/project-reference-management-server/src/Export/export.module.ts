import { Module } from "@nestjs/common";
import { ExportService } from "./export.service";
import { ExportController } from "./export.controller";
import { ExportResolver } from "./export.resolver";

@Module({
  controllers: [ExportController],
  providers: [ExportService, ExportResolver],
  exports: [ExportService],
})
export class ExportModule {}
