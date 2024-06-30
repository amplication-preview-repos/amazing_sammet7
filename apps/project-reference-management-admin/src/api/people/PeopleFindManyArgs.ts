import { PeopleWhereInput } from "./PeopleWhereInput";
import { PeopleOrderByInput } from "./PeopleOrderByInput";

export type PeopleFindManyArgs = {
  where?: PeopleWhereInput;
  orderBy?: Array<PeopleOrderByInput>;
  skip?: number;
  take?: number;
};
