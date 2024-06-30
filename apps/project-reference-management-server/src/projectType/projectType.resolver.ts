import * as graphql from "@nestjs/graphql";
import { ProjectTypeResolverBase } from "./base/projectType.resolver.base";
import { ProjectType } from "./base/ProjectType";
import { ProjectTypeService } from "./projectType.service";

@graphql.Resolver(() => ProjectType)
export class ProjectTypeResolver extends ProjectTypeResolverBase {
  constructor(protected readonly service: ProjectTypeService) {
    super(service);
  }
}
