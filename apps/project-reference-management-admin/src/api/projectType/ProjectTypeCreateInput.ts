import { ProjectReferenceCreateNestedManyWithoutProjectTypesInput } from "./ProjectReferenceCreateNestedManyWithoutProjectTypesInput";

export type ProjectTypeCreateInput = {
  name?: string | null;
  projectReferences?: ProjectReferenceCreateNestedManyWithoutProjectTypesInput;
};
