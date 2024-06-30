import * as graphql from "@nestjs/graphql";
import { ExportProjectReferenceInput } from "../export/ExportProjectReferenceInput";
import { ExportService } from "./export.service";

export class ExportResolver {
  constructor(protected readonly service: ExportService) {}

  @graphql.Query(() => String)
  async ExportProjectReferences(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ExportProjectReferences(args);
  }

  @graphql.Query(() => String)
  async ExportToDocx(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ExportToDocx(args);
  }

  @graphql.Mutation(() => String)
  async GenerateDocxReport(
    @graphql.Args()
    args: ExportProjectReferenceInput
  ): Promise<string> {
    return this.service.GenerateDocxReport(args);
  }
}
