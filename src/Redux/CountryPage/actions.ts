import {
  ON_TIME_CHANGE, FETCH_WEATHER_PENDING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, FETCH_PLACES_ERROR,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_PENDING,
} from './actionTypes';

const onDateChangeAC = (utf: number) => {
  const date = new Date();
  const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
  const NewZealandTime = new Date(utcTime + (3600000 * utf));
  return {
    type: ON_TIME_CHANGE,
    date: NewZealandTime,
  };
};

export const fetchPlacesErrorAC = () => ({
  type: FETCH_PLACES_ERROR,
});

export const fetchPlacesPendingAC = () => ({
  type: FETCH_PLACES_PENDING
});

export const fetchPlacesSuccessAC = (data, lan) => ({
  type: FETCH_PLACES_SUCCESS,
  data, lan
});

const fetchWeatherPending = () => ({
  type: FETCH_WEATHER_PENDING,
});

const fetchWeatherSuccess = (data: any) => ({
  type: FETCH_WEATHER_SUCCESS,
  CurrentData: data,
});

const fetchWeatherError = (Error: string) => ({
  type: FETCH_WEATHER_ERROR,
  error: Error,
});

export { onDateChangeAC, fetchWeatherPending, fetchWeatherSuccess, fetchWeatherError };
