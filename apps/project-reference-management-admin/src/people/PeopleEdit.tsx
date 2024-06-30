import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PeopleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
      </SimpleForm>
    </Edit>
  );
};
