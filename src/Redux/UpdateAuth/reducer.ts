import { FETCH_UPDATE_ERROR, FETCH_UPDATE_PASSWORD_SUCCESS } from './actionTypes';
import StateT from './interface';

const initState:StateT = {
  username: '',
  lastname: '',
  email: '',
  photoUrl: '',
  err: '',
  message: '',
}

const updateReducer = (state = initState, action): StateT => {
  
  switch (action.type){
    case FETCH_UPDATE_ERROR: {
      return {
        ...state, 
        err: action.payload
      }
    }

    case FETCH_UPDATE_PASSWORD_SUCCESS: {
      return {
        ...state, 
        message: action.payload
      }
    }

    default: {

      return {
        ...state
      };
    }
  }
};

export default updateReducer;
