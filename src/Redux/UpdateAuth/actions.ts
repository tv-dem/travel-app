import { FETCH_UPDATE_ERROR } from './actionTypes';

export const fetchUpdateSuccess = (username: string, lastname: string, email: string, photoUrl: string ) => ({
  type: 'UPDATE_SUCCESS',
  payload: {
    username,
    lastname,
    email,
    photoUrl,
  },
});

export const fetchUpdateError = (err: any) => ({
  type: FETCH_UPDATE_ERROR,
  payload: err,
});
