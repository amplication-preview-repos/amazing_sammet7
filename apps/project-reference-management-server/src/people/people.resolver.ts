import * as graphql from "@nestjs/graphql";
import { PeopleResolverBase } from "./base/people.resolver.base";
import { People } from "./base/People";
import { PeopleService } from "./people.service";

@graphql.Resolver(() => People)
export class PeopleResolver extends PeopleResolverBase {
  constructor(protected readonly service: PeopleService) {
    super(service);
  }
}
