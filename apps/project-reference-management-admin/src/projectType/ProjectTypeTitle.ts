import { ProjectType as TProjectType } from "../api/projectType/ProjectType";

export const PROJECTTYPE_TITLE_FIELD = "name";

export const ProjectTypeTitle = (record: TProjectType): string => {
  return record.name?.toString() || String(record.id);
};
