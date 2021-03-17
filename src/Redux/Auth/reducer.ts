import { FETCH_LOG_IN_SUCCESS, FETCH_LOG_IN_ERROR, FETCH_SIGN_IN_SUCCESS, REMOVE_LOG_IN_ERROR } from './actionsTypes';

type StateType = {
  userName: null | string,
  lastName: null | string,
  password: null | string,
  eMail: null | string,
  photoUrl: null | string,
  isLogIn: boolean,
  isErrorLogIn: string,
}

const initState:StateType = {
  userName: null,
  lastName: null,
  password: null,
  eMail: null,
  photoUrl: null,
  isLogIn: false,
  isErrorLogIn: '',
}

const AuthReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type){
    case FETCH_SIGN_IN_SUCCESS:{
      return state;
    }
    case REMOVE_LOG_IN_ERROR: {
      return {...state, isErrorLogIn: ''}
    }
    case FETCH_LOG_IN_ERROR: {
      console.log(action)
      return { initState, isErrorLogIn: `error: ${action.err.message}` };
    }
    case FETCH_LOG_IN_SUCCESS:{
      const {name, lastName, token, url, mail} = action;
      console.log(token, 'sldjflkdsjflk');
      return { ...state, userName: name, lastName, eMail: mail, photoUrl: url, isLogIn: token };
    }
    default:
      return state;
  }
}

export default AuthReducer;
