import { ProjectReferenceUpdateManyWithoutProjectTypesInput } from "./ProjectReferenceUpdateManyWithoutProjectTypesInput";

export type ProjectTypeUpdateInput = {
  name?: string | null;
  projectReferences?: ProjectReferenceUpdateManyWithoutProjectTypesInput;
};
