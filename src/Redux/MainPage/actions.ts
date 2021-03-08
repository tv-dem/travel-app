import { changeInputFieldAT } from './types';
import CHANGE_INPUT_FIELD from './actionsTypes';


const changeInputFieldAC = (str: string): changeInputFieldAT => ({
  type: CHANGE_INPUT_FIELD,
  str,
});

export default changeInputFieldAC;

