import { SortOrder } from "../../util/SortOrder";

export type ProjectReferenceOrderByInput = {
  businessLineId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  projectManager?: SortOrder;
  projectName?: SortOrder;
  projectPrice?: SortOrder;
  projectTypeId?: SortOrder;
  responsiblePerson?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
