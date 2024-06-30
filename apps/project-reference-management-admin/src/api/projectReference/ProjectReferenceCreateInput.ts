import { BusinessLineWhereUniqueInput } from "../businessLine/BusinessLineWhereUniqueInput";
import { ProjectTypeWhereUniqueInput } from "../projectType/ProjectTypeWhereUniqueInput";

export type ProjectReferenceCreateInput = {
  businessLine?: BusinessLineWhereUniqueInput | null;
  endDate?: Date | null;
  projectManager?: string | null;
  projectName?: string | null;
  projectPrice?: number | null;
  projectType?: ProjectTypeWhereUniqueInput | null;
  responsiblePerson?: string | null;
  startDate?: Date | null;
};
