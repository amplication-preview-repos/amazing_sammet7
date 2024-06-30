import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectTypeService } from "./projectType.service";
import { ProjectTypeControllerBase } from "./base/projectType.controller.base";

@swagger.ApiTags("projectTypes")
@common.Controller("projectTypes")
export class ProjectTypeController extends ProjectTypeControllerBase {
  constructor(protected readonly service: ProjectTypeService) {
    super(service);
  }
}
