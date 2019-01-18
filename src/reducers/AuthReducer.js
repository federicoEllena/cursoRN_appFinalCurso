/* Recordar que la primera vez que se levante la app, se ejecutara el ciclo de redux y el state
seria undefined, initial state remedia esto ultimo, puesto que redux no
admite state undefined */
import { EMAIL_CHANGED, PASS_CHANGED } from '../actions/types';

const INITIAL_STATE = { 
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASS_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
