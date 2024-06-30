import { BusinessLineWhereInput } from "./BusinessLineWhereInput";
import { BusinessLineOrderByInput } from "./BusinessLineOrderByInput";

export type BusinessLineFindManyArgs = {
  where?: BusinessLineWhereInput;
  orderBy?: Array<BusinessLineOrderByInput>;
  skip?: number;
  take?: number;
};
