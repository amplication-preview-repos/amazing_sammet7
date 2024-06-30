import { BusinessLine as TBusinessLine } from "../api/businessLine/BusinessLine";

export const BUSINESSLINE_TITLE_FIELD = "name";

export const BusinessLineTitle = (record: TBusinessLine): string => {
  return record.name?.toString() || String(record.id);
};
