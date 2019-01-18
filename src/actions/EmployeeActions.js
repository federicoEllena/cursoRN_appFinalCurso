import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};
/*la idea es que por prop se le pase la key en prop, por ejemplo
name, y en value el valor con el cual se desea actualizar esa key*/