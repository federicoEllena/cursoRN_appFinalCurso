import { EMPLOYEE_UPDATE } from './types';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ( { name, phone, shift } ) => {
  return () => Actions.pop();
};
/*la idea es que por prop se le pase la key en prop, por ejemplo
name, y en value el valor con el cual se desea actualizar esa key*/