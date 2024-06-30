import { ProjectReference } from "../projectReference/ProjectReference";

export type BusinessLine = {
  createdAt: Date;
  id: string;
  name: string | null;
  projectReferences?: Array<ProjectReference>;
  updatedAt: Date;
};
