import { People as TPeople } from "../api/people/People";

export const PEOPLE_TITLE_FIELD = "firstName";

export const PeopleTitle = (record: TPeople): string => {
  return record.firstName?.toString() || String(record.id);
};
