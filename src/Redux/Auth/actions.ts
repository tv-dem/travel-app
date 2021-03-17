import { FETCH_LOG_IN, FETCH_SIGN_IN } from './actionsTypes';

export const fetchLogIn = (eMail:string, password:string) => ({
  type: FETCH_LOG_IN,
  eMail,
  password,
})

export const fetchSignIn = (eMail:string, password:string, name:string, lastName:string) => ({
  type: FETCH_SIGN_IN,
  eMail,
  password,
  name,
  lastName
})

