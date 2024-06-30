import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BUSINESSLINE_TITLE_FIELD } from "./BusinessLineTitle";
import { PROJECTTYPE_TITLE_FIELD } from "../projectType/ProjectTypeTitle";

export const BusinessLineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProjectReference"
          target="businessLineId"
          label="ProjectReferences"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BusinessLine"
              source="businessline.id"
              reference="BusinessLine"
            >
              <TextField source={BUSINESSLINE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="EndDate" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="ProjectManager" source="projectManager" />
            <TextField label="ProjectName" source="projectName" />
            <TextField label="ProjectPrice" source="projectPrice" />
            <ReferenceField
              label="ProjectType"
              source="projecttype.id"
              reference="ProjectType"
            >
              <TextField source={PROJECTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ResponsiblePerson" source="responsiblePerson" />
            <TextField label="StartDate" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
