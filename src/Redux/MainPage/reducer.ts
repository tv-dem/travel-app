import CHANGE_INPUT_FIELD from './actionsTypes'
import { stateType } from './types';

const initialState: stateType = {
  input: '',
};

const mainPageReducer = (state = initialState, action:any):stateType => {
  switch(action.type){
    case CHANGE_INPUT_FIELD:
      return {...state, input: action.str}
    default:
      return state;
  }
}

export default mainPageReducer;
