import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name:'',
  phone:'',
  shift:''
};

export default ( state = INITIAL_STATE, action) => {
  switch (action.type){
    case EMPLOYEE_UPDATE:
      //action.payload == { prop:'name', value= 'pedro' }
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
};

/* [] no es un array en este caso, indican "key interpolation"
, varia de acuerdo a la prop con la que se lo llama
ejemplo  [action.payload.prop] = name: 'pedro' */