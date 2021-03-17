import { FETCH_LOG_IN, FETCH_SIGN_IN } from './actionsTypes';

type StateType = {
  userName: null | string,
  lastName: null | string,
  password: null | string,
  eMail: null | string,
  photoUrl: null | string,
  isLogIn: boolean,
}

const initState:StateType = {
  userName: null,
  lastName: null,
  password: null,
  eMail: null,
  photoUrl: null,
  isLogIn: false
}

const AuthReducer = (state = initState, action) => {
  switch (action.type){
    case FETCH_SIGN_IN:{
      return state;
    }
    case FETCH_LOG_IN:{
      return state;
    }
    default:
      return state;
  }
}

export default AuthReducer;
