import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectReferenceService } from "./projectReference.service";
import { ProjectReferenceControllerBase } from "./base/projectReference.controller.base";

@swagger.ApiTags("projectReferences")
@common.Controller("projectReferences")
export class ProjectReferenceController extends ProjectReferenceControllerBase {
  constructor(protected readonly service: ProjectReferenceService) {
    super(service);
  }
}
