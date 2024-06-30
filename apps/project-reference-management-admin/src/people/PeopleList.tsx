import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PeopleList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PeopleItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastName" source="lastName" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
