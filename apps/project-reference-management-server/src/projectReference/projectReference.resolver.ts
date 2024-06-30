import * as graphql from "@nestjs/graphql";
import { ProjectReferenceResolverBase } from "./base/projectReference.resolver.base";
import { ProjectReference } from "./base/ProjectReference";
import { ProjectReferenceService } from "./projectReference.service";

@graphql.Resolver(() => ProjectReference)
export class ProjectReferenceResolver extends ProjectReferenceResolverBase {
  constructor(protected readonly service: ProjectReferenceService) {
    super(service);
  }
}
