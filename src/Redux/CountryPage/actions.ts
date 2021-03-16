<<<<<<< HEAD
import {
  ON_TIME_CHANGE, FETCH_WEATHER_PENDING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, FETCH_PLACES_ERROR,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_PENDING,
} from './actionTypes';
=======
import {ON_TIME_CHANGE, FETCH_WEATHER_PENDING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, FETCH_EXCHANGE_PENDING, FETCH_EXCHANGE_SUCCESS,FETCH_EXCHANGE_ERROR } from './actionTypes';
>>>>>>> 4e561d6c93bf0838e00b0bc941f4ac35d3ae9a6f

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

<<<<<<< HEAD
export { onDateChangeAC, fetchWeatherPending, fetchWeatherSuccess, fetchWeatherError };
=======
const fetchExchangePending = () => ({
  type: FETCH_EXCHANGE_PENDING
});

const fetchExchangeSuccess = (dataExchange: any) =>({
  type: FETCH_EXCHANGE_SUCCESS,
  currentExchange: dataExchange,
})

const fetchExchangeError = (Error: string) => ({
  type: FETCH_EXCHANGE_ERROR,
  error: Error,
});

export {onDateChangeAC, fetchWeatherPending, fetchWeatherSuccess, fetchWeatherError, fetchExchangePending, fetchExchangeSuccess, fetchExchangeError};
>>>>>>> 4e561d6c93bf0838e00b0bc941f4ac35d3ae9a6f
