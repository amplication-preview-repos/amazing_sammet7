import { ProjectReferenceUpdateManyWithoutBusinessLinesInput } from "./ProjectReferenceUpdateManyWithoutBusinessLinesInput";

export type BusinessLineUpdateInput = {
  name?: string | null;
  projectReferences?: ProjectReferenceUpdateManyWithoutBusinessLinesInput;
};
