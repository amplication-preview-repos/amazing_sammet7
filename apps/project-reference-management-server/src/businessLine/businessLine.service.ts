import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessLineServiceBase } from "./base/businessLine.service.base";

@Injectable()
export class BusinessLineService extends BusinessLineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
