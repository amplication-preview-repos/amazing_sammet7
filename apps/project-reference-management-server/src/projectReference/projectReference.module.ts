import { Module } from "@nestjs/common";
import { ProjectReferenceModuleBase } from "./base/projectReference.module.base";
import { ProjectReferenceService } from "./projectReference.service";
import { ProjectReferenceController } from "./projectReference.controller";
import { ProjectReferenceResolver } from "./projectReference.resolver";

@Module({
  imports: [ProjectReferenceModuleBase],
  controllers: [ProjectReferenceController],
  providers: [ProjectReferenceService, ProjectReferenceResolver],
  exports: [ProjectReferenceService],
})
export class ProjectReferenceModule {}
