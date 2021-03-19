import { FETCH_UPDATE_ERROR, FETCH_UPDATE_PASSWORD_SUCCESS } from './actionTypes';

export const fetchUpdatePasswordSuccess = (message: string ) => ({
  type: FETCH_UPDATE_PASSWORD_SUCCESS,
  payload: message,
});

export const fetchUpdateError = (err: any) => ({
  type: FETCH_UPDATE_ERROR,
  payload: err,
});
