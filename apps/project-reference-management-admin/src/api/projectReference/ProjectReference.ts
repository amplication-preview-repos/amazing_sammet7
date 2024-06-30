import { BusinessLine } from "../businessLine/BusinessLine";
import { ProjectType } from "../projectType/ProjectType";

export type ProjectReference = {
  businessLine?: BusinessLine | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  projectManager: string | null;
  projectName: string | null;
  projectPrice: number | null;
  projectType?: ProjectType | null;
  responsiblePerson: string | null;
  startDate: Date | null;
  updatedAt: Date;
};
