import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectReferenceListRelationFilter } from "../projectReference/ProjectReferenceListRelationFilter";

export type BusinessLineWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  projectReferences?: ProjectReferenceListRelationFilter;
};
