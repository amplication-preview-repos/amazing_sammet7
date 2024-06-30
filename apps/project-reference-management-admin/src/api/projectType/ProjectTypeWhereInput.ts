import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectReferenceListRelationFilter } from "../projectReference/ProjectReferenceListRelationFilter";

export type ProjectTypeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  projectReferences?: ProjectReferenceListRelationFilter;
};
