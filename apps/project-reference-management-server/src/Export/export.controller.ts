import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ExportService } from "./export.service";
import { ExportProjectReferenceInput } from "../export/ExportProjectReferenceInput";

@swagger.ApiTags("exports")
@common.Controller("exports")
export class ExportController {
  constructor(protected readonly service: ExportService) {}

  @common.Get("/:id/export-project-references")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ExportProjectReferences(
    @common.Body()
    body: ExportProjectReferenceInput
  ): Promise<string> {
        return this.service.ExportProjectReferences(body);
      }

  @common.Get("/:id/export-to-docx")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ExportToDocx(
    @common.Body()
    body: ExportProjectReferenceInput
  ): Promise<string> {
        return this.service.ExportToDocx(body);
      }

  @common.Post("/generate-docx-report")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateDocxReport(
    @common.Body()
    body: ExportProjectReferenceInput
  ): Promise<string> {
        return this.service.GenerateDocxReport(body);
      }
}
