import {
  FETCH_LOG_IN_SUCCESS,
  FETCH_SIGN_IN_SUCCESS,
  FETCH_LOG_IN_ERROR,
  REMOVE_LOG_IN_ERROR,
  FETCH_SIGN_IN_ERROR, REMOVE_SIGN_IN_ERROR,
  SET_SIGN_IN_ERROR,
  SET_SIGN_IN_SUCCESS,
  REMOVE_SIGN_IN_SUCCESS,
  LOGOUT,
  CLEAR_MESSAGES,
  FETCH_UPDATE_SUCCESS,
} from './actionsTypes';

export const logout = () => ({
  type: LOGOUT,
})

export const fetchLogInSuccess = (username, lastname, email, photoUrl, token) => ({
    type: FETCH_LOG_IN_SUCCESS,
    username,
    lastname,
    email,
    photoUrl,
    token,
});

export const clearMessages = () => ({
  type: CLEAR_MESSAGES,
})

export const fetchLogInError = (err) => ({
  type: FETCH_LOG_IN_ERROR,
  err,
});

export const removeLogInError = () => ({
  type: REMOVE_LOG_IN_ERROR,
})

export const removeSignInError = () => ({
  type: REMOVE_SIGN_IN_ERROR,
})

export const setSignInError = (error) => ({
  type: SET_SIGN_IN_ERROR,
  error,
})

export const removeSignInSuccess = () => ({
  type: REMOVE_SIGN_IN_SUCCESS,
})

export const setSignInSuccess = (success) => ({
  type: SET_SIGN_IN_SUCCESS,
  success,
})

export const fetchSignInSuccess = (message) => ({
  type: FETCH_SIGN_IN_SUCCESS,
  message
});

export const fetchSignInError = (err) => ({
  type: FETCH_SIGN_IN_ERROR,
  err
})

export const fetchUpdateSuccess = (username: string, lastname: string, email: string, photoUrl: string ) => ({
  type: FETCH_UPDATE_SUCCESS,
  payload: {
    username,
    lastname,
    email,
    photoUrl,
  },
});
