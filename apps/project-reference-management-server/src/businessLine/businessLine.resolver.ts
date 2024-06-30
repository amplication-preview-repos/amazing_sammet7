import * as graphql from "@nestjs/graphql";
import { BusinessLineResolverBase } from "./base/businessLine.resolver.base";
import { BusinessLine } from "./base/BusinessLine";
import { BusinessLineService } from "./businessLine.service";

@graphql.Resolver(() => BusinessLine)
export class BusinessLineResolver extends BusinessLineResolverBase {
  constructor(protected readonly service: BusinessLineService) {
    super(service);
  }
}
