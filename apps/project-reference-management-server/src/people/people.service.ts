import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeopleServiceBase } from "./base/people.service.base";

@Injectable()
export class PeopleService extends PeopleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
