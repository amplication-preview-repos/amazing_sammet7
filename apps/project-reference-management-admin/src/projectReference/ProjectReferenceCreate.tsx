import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BusinessLineTitle } from "../businessLine/BusinessLineTitle";
import { ProjectTypeTitle } from "../projectType/ProjectTypeTitle";

export const ProjectReferenceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="businessLine.id"
          reference="BusinessLine"
          label="BusinessLine"
        >
          <SelectInput optionText={BusinessLineTitle} />
        </ReferenceInput>
        <DateTimeInput label="EndDate" source="endDate" />
        <TextInput label="ProjectManager" source="projectManager" />
        <TextInput label="ProjectName" source="projectName" />
        <NumberInput label="ProjectPrice" source="projectPrice" />
        <ReferenceInput
          source="projectType.id"
          reference="ProjectType"
          label="ProjectType"
        >
          <SelectInput optionText={ProjectTypeTitle} />
        </ReferenceInput>
        <TextInput label="ResponsiblePerson" source="responsiblePerson" />
        <DateTimeInput label="StartDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
