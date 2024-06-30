import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BusinessLineService } from "./businessLine.service";
import { BusinessLineControllerBase } from "./base/businessLine.controller.base";

@swagger.ApiTags("businessLines")
@common.Controller("businessLines")
export class BusinessLineController extends BusinessLineControllerBase {
  constructor(protected readonly service: BusinessLineService) {
    super(service);
  }
}
