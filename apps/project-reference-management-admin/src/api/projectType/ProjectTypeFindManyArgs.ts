import { ProjectTypeWhereInput } from "./ProjectTypeWhereInput";
import { ProjectTypeOrderByInput } from "./ProjectTypeOrderByInput";

export type ProjectTypeFindManyArgs = {
  where?: ProjectTypeWhereInput;
  orderBy?: Array<ProjectTypeOrderByInput>;
  skip?: number;
  take?: number;
};
