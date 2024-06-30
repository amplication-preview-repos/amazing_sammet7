import { ProjectReference } from "../projectReference/ProjectReference";

export type ProjectType = {
  createdAt: Date;
  id: string;
  name: string | null;
  projectReferences?: Array<ProjectReference>;
  updatedAt: Date;
};
