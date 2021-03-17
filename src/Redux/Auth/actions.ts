import { FETCH_LOG_IN_SUCCESS, FETCH_SIGN_IN_SUCCESS, FETCH_LOG_IN_ERROR, REMOVE_LOG_IN_ERROR } from './actionsTypes';

export const fetchLogInSuccess = (username, lastname, email, photoUrl, token) => ({
    type: FETCH_LOG_IN_SUCCESS,
    username,
    lastname,
    email,
    photoUrl,
    token,
});

export const fetchLogInError = (err) => ({
  type: FETCH_LOG_IN_ERROR,
  err,
});

export const removeLogInError = () => ({
  type: REMOVE_LOG_IN_ERROR,
})

export const fetchSignIn = (eMail: string, password: string, name: string, lastName: string) => ({
  type: FETCH_SIGN_IN_SUCCESS,
  eMail,
  password,
  name,
  lastName,
});

