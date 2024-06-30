/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BusinessLineService } from "../businessLine.service";
import { BusinessLineCreateInput } from "./BusinessLineCreateInput";
import { BusinessLine } from "./BusinessLine";
import { BusinessLineFindManyArgs } from "./BusinessLineFindManyArgs";
import { BusinessLineWhereUniqueInput } from "./BusinessLineWhereUniqueInput";
import { BusinessLineUpdateInput } from "./BusinessLineUpdateInput";
import { ProjectReferenceFindManyArgs } from "../../projectReference/base/ProjectReferenceFindManyArgs";
import { ProjectReference } from "../../projectReference/base/ProjectReference";
import { ProjectReferenceWhereUniqueInput } from "../../projectReference/base/ProjectReferenceWhereUniqueInput";

export class BusinessLineControllerBase {
  constructor(protected readonly service: BusinessLineService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BusinessLine })
  async createBusinessLine(
    @common.Body() data: BusinessLineCreateInput
  ): Promise<BusinessLine> {
    return await this.service.createBusinessLine({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BusinessLine] })
  @ApiNestedQuery(BusinessLineFindManyArgs)
  async businessLines(@common.Req() request: Request): Promise<BusinessLine[]> {
    const args = plainToClass(BusinessLineFindManyArgs, request.query);
    return this.service.businessLines({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BusinessLine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async businessLine(
    @common.Param() params: BusinessLineWhereUniqueInput
  ): Promise<BusinessLine | null> {
    const result = await this.service.businessLine({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BusinessLine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBusinessLine(
    @common.Param() params: BusinessLineWhereUniqueInput,
    @common.Body() data: BusinessLineUpdateInput
  ): Promise<BusinessLine | null> {
    try {
      return await this.service.updateBusinessLine({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BusinessLine })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBusinessLine(
    @common.Param() params: BusinessLineWhereUniqueInput
  ): Promise<BusinessLine | null> {
    try {
      return await this.service.deleteBusinessLine({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/projectReferences")
  @ApiNestedQuery(ProjectReferenceFindManyArgs)
  async findProjectReferences(
    @common.Req() request: Request,
    @common.Param() params: BusinessLineWhereUniqueInput
  ): Promise<ProjectReference[]> {
    const query = plainToClass(ProjectReferenceFindManyArgs, request.query);
    const results = await this.service.findProjectReferences(params.id, {
      ...query,
      select: {
        businessLine: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        endDate: true,
        id: true,
        projectManager: true,
        projectName: true,
        projectPrice: true,

        projectType: {
          select: {
            id: true,
          },
        },

        responsiblePerson: true,
        startDate: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/projectReferences")
  async connectProjectReferences(
    @common.Param() params: BusinessLineWhereUniqueInput,
    @common.Body() body: ProjectReferenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projectReferences: {
        connect: body,
      },
    };
    await this.service.updateBusinessLine({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/projectReferences")
  async updateProjectReferences(
    @common.Param() params: BusinessLineWhereUniqueInput,
    @common.Body() body: ProjectReferenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projectReferences: {
        set: body,
      },
    };
    await this.service.updateBusinessLine({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/projectReferences")
  async disconnectProjectReferences(
    @common.Param() params: BusinessLineWhereUniqueInput,
    @common.Body() body: ProjectReferenceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projectReferences: {
        disconnect: body,
      },
    };
    await this.service.updateBusinessLine({
      where: params,
      data,
      select: { id: true },
    });
  }
}
