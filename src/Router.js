import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="authScreen">
          <Scene key="login" component={LoginForm} title="Login" initial />
        </Scene>
        <Scene key="main">
          <Scene rightTitle="Add+" onRight={() => Actions.employeeCreate()} key="employeeList" component={EmployeeList} title="Employees" initial />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create employee"/>
        </Scene>        
      </Stack>
    </Router> 
  );
};

export default RouterComponent;
/*onRight recibe una callback function que puede ser usada para navegar entre pantallas */