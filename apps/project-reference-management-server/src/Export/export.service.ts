import { Injectable } from "@nestjs/common";
import { ExportProjectReferenceInput } from "../export/ExportProjectReferenceInput";

@Injectable()
export class ExportService {
  constructor() {}
  async ExportProjectReferences(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ExportToDocx(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GenerateDocxReport(args: ExportProjectReferenceInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
