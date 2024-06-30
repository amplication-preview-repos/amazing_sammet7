import { BusinessLineWhereUniqueInput } from "../businessLine/BusinessLineWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProjectTypeWhereUniqueInput } from "../projectType/ProjectTypeWhereUniqueInput";

export type ProjectReferenceWhereInput = {
  businessLine?: BusinessLineWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  projectManager?: StringNullableFilter;
  projectName?: StringNullableFilter;
  projectPrice?: FloatNullableFilter;
  projectType?: ProjectTypeWhereUniqueInput;
  responsiblePerson?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
