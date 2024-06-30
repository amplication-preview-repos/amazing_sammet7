import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectTypeServiceBase } from "./base/projectType.service.base";

@Injectable()
export class ProjectTypeService extends ProjectTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
