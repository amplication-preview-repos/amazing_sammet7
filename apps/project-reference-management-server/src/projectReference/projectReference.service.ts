import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectReferenceServiceBase } from "./base/projectReference.service.base";

@Injectable()
export class ProjectReferenceService extends ProjectReferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
