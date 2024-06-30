import { Module } from "@nestjs/common";
import { ProjectTypeModuleBase } from "./base/projectType.module.base";
import { ProjectTypeService } from "./projectType.service";
import { ProjectTypeController } from "./projectType.controller";
import { ProjectTypeResolver } from "./projectType.resolver";

@Module({
  imports: [ProjectTypeModuleBase],
  controllers: [ProjectTypeController],
  providers: [ProjectTypeService, ProjectTypeResolver],
  exports: [ProjectTypeService],
})
export class ProjectTypeModule {}
