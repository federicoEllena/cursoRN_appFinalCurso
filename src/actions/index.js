import { EMAIL_CHANGED, PASS_CHANGED } from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => {
  return {
    type: PASS_CHANGED,
    payload: text
  };
};

/*este metodo viene del scene creado con el key correspondiente
las keys se transcriben instantaneamente al objeto Actions
importado de la libreria */
