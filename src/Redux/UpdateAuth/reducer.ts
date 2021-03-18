import { FETCH_UPDATE_ERROR } from './actionTypes';
import StateT from './interface';

const initState:StateT = {
  username: '',
  lastname: '',
  email: '',
  photoUrl: '',
  err: '',
}

const updateReducer = (state = initState, action): StateT => {
  
  switch (action.type){
    case FETCH_UPDATE_ERROR: {
      return {
        ...state, 
        err: action.payload.err
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
