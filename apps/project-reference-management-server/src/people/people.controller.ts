import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PeopleService } from "./people.service";
import { PeopleControllerBase } from "./base/people.controller.base";

@swagger.ApiTags("people")
@common.Controller("people")
export class PeopleController extends PeopleControllerBase {
  constructor(protected readonly service: PeopleService) {
    super(service);
  }
}
