import {
  FETCH_LOG_IN_SUCCESS,
  FETCH_LOG_IN_ERROR,
  FETCH_SIGN_IN_SUCCESS,
  REMOVE_LOG_IN_ERROR,
  FETCH_SIGN_IN_ERROR, REMOVE_SIGN_IN_ERROR, SET_SIGN_IN_ERROR, REMOVE_SIGN_IN_SUCCESS, LOGOUT, CLEAR_MESSAGES,
} from './actionsTypes';

type StateType = {
  userName: null | string,
  lastName: null | string,
  password: null | string,
  eMail: null | string,
  photoUrl: null | string,
  isLogIn: boolean,
  isErrorLogIn: string,
  isErrorSignIn: string,
  isSuccessSignIn: string
}

const initState:StateType = {
  userName: null,
  lastName: null,
  password: null,
  eMail: null,
  photoUrl: null,
  isLogIn: false,
  isErrorLogIn: '',
  isErrorSignIn: '',
  isSuccessSignIn: '',
}

const AuthReducer = (state = initState, action) => {
  switch (action.type){
    case FETCH_SIGN_IN_SUCCESS:{
      return { ...initState, isSuccessSignIn: action.message };
    }
    case REMOVE_LOG_IN_ERROR: {
      return {...state, isErrorLogIn: ''}
    }
    case REMOVE_SIGN_IN_ERROR: {
      return {...state, isErrorSignIn: ''}
    }
    case SET_SIGN_IN_ERROR:{
      return {...state, isErrorSignIn: action.error}
    }
    case REMOVE_SIGN_IN_SUCCESS: {
      return {...state, isSuccessSignIn: ''}
    }
    case FETCH_SIGN_IN_ERROR: {
      return { state, isErrorSignIn: `error: ${action.err.message}` };
    }
    case FETCH_LOG_IN_ERROR: {
      return { initState, isErrorLogIn: `error: ${action.err.message}` };
    }
    case LOGOUT: {
      return {...initState}
    }
    case CLEAR_MESSAGES:{
      return {...state, isErrorLogIn: '', isErrorSignIn: '', isSuccessSignIn: ''}
    }
    case FETCH_LOG_IN_SUCCESS:{
      const { username,
        lastname,
        email,
        photoUrl,
        token,} = action;
      return { ...state, userName: username, lastName: lastname, eMail: email, photoUrl, isLogIn: token };
    }
    default:
      return state;
  }
}

export default AuthReducer;
