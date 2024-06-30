import { Module } from "@nestjs/common";
import { PeopleModuleBase } from "./base/people.module.base";
import { PeopleService } from "./people.service";
import { PeopleController } from "./people.controller";
import { PeopleResolver } from "./people.resolver";

@Module({
  imports: [PeopleModuleBase],
  controllers: [PeopleController],
  providers: [PeopleService, PeopleResolver],
  exports: [PeopleService],
})
export class PeopleModule {}
