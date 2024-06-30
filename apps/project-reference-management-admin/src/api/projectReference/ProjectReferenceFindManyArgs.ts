import { ProjectReferenceWhereInput } from "./ProjectReferenceWhereInput";
import { ProjectReferenceOrderByInput } from "./ProjectReferenceOrderByInput";

export type ProjectReferenceFindManyArgs = {
  where?: ProjectReferenceWhereInput;
  orderBy?: Array<ProjectReferenceOrderByInput>;
  skip?: number;
  take?: number;
};
