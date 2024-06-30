import { ProjectReferenceCreateNestedManyWithoutBusinessLinesInput } from "./ProjectReferenceCreateNestedManyWithoutBusinessLinesInput";

export type BusinessLineCreateInput = {
  name?: string | null;
  projectReferences?: ProjectReferenceCreateNestedManyWithoutBusinessLinesInput;
};
