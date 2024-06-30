import { ProjectReference as TProjectReference } from "../api/projectReference/ProjectReference";

export const PROJECTREFERENCE_TITLE_FIELD = "projectName";

export const ProjectReferenceTitle = (record: TProjectReference): string => {
  return record.projectName?.toString() || String(record.id);
};
