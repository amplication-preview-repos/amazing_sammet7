import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectTypeList } from "./projectType/ProjectTypeList";
import { ProjectTypeCreate } from "./projectType/ProjectTypeCreate";
import { ProjectTypeEdit } from "./projectType/ProjectTypeEdit";
import { ProjectTypeShow } from "./projectType/ProjectTypeShow";
import { PeopleList } from "./people/PeopleList";
import { PeopleCreate } from "./people/PeopleCreate";
import { PeopleEdit } from "./people/PeopleEdit";
import { PeopleShow } from "./people/PeopleShow";
import { ProjectReferenceList } from "./projectReference/ProjectReferenceList";
import { ProjectReferenceCreate } from "./projectReference/ProjectReferenceCreate";
import { ProjectReferenceEdit } from "./projectReference/ProjectReferenceEdit";
import { ProjectReferenceShow } from "./projectReference/ProjectReferenceShow";
import { BusinessLineList } from "./businessLine/BusinessLineList";
import { BusinessLineCreate } from "./businessLine/BusinessLineCreate";
import { BusinessLineEdit } from "./businessLine/BusinessLineEdit";
import { BusinessLineShow } from "./businessLine/BusinessLineShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ProjectReferenceManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ProjectType"
          list={ProjectTypeList}
          edit={ProjectTypeEdit}
          create={ProjectTypeCreate}
          show={ProjectTypeShow}
        />
        <Resource
          name="People"
          list={PeopleList}
          edit={PeopleEdit}
          create={PeopleCreate}
          show={PeopleShow}
        />
        <Resource
          name="ProjectReference"
          list={ProjectReferenceList}
          edit={ProjectReferenceEdit}
          create={ProjectReferenceCreate}
          show={ProjectReferenceShow}
        />
        <Resource
          name="BusinessLine"
          list={BusinessLineList}
          edit={BusinessLineEdit}
          create={BusinessLineCreate}
          show={BusinessLineShow}
        />
      </Admin>
    </div>
  );
};

export default App;
