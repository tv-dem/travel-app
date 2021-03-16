<<<<<<< HEAD
import {
  ON_TIME_CHANGE,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_PLACES_ERROR,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_PENDING,
} from './actionTypes';
import { stateType } from './types';

const initialState = {
  images: {
    URL: [
      {
        url: 'https://fl-1.cdn.flockler.com/embed/not-found.png',
        description: 'no information',
      },
    ],
    pending: false,
  },
=======
import {ON_TIME_CHANGE, FETCH_WEATHER_PENDING, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR, FETCH_EXCHANGE_PENDING, FETCH_EXCHANGE_SUCCESS,FETCH_EXCHANGE_ERROR } from './actionTypes';
import {stateType} from './types'

const initialState = {
  pendingExchange: false,
  dataExchange: {
EUR:0,
USD:0,
RUB:0
  },
  errorExchange: null,
>>>>>>> 4e561d6c93bf0838e00b0bc941f4ac35d3ae9a6f
  date: new Date(),
  data: {
    name: 'loading',
    main: {
      temp: 0,
    },
    weather: [
      {
        id: 0,
        description: '0',
        icon: '0',
      }],
  },
  pending: false,
  error: null,

};

export function CountryPageReducer(state = initialState, action: any): stateType {
  switch (action.type) {
    case ON_TIME_CHANGE: {
      return {
        ...state,
        date: action.date,
      };
    }
    case FETCH_PLACES_PENDING: {
      return {...state, images: initialState.images};
    }
    case FETCH_PLACES_SUCCESS: {
      const r = action.data.places.map(({localizations, photoUrl}) => {
        const local = localizations.find(({lang}) => lang === action.lan);
        return {
          url: photoUrl,
          description:local ? local.description : '',
        }
      })
      return { ...state, images: {URL: r, pending: false} };

    }
    case FETCH_PLACES_ERROR: {
      return {...state, images: initialState.images};
    }
    case FETCH_WEATHER_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.CurrentData,
      };
    case FETCH_WEATHER_ERROR:
      return {
<<<<<<< HEAD
        ...state,
        pending: false,
        error: action.error,
      };
    default:
=======
          ...state,
          pending: false,
          error: action.error
      }      
      case FETCH_EXCHANGE_PENDING: 
      return {
          ...state,
          pending: true
      }
  case FETCH_EXCHANGE_SUCCESS:
      return {
          ...state,
          pendingExchange: false,
          dataExchange: action.currentExchange
      }
  case FETCH_EXCHANGE_ERROR:
      return {
          ...state,
          pendingExchange: false,
          errorExchange: action.error
      }
  default: 
>>>>>>> 4e561d6c93bf0838e00b0bc941f4ac35d3ae9a6f
      return state;
  }
}

<<<<<<< HEAD
export const getData = (state: any) => state.data;
export const getWeatherPending = (state: any) => state.pending;
export const getWeatherError = (state: any) => state.error;
=======
export const getData = (state:any) => state.data;
export const getWeatherPending = (state:any) => state.pending;
export const getWeatherError = (state:any) => state.error;

export const getDataExchange = (state:any) => state.dataExchange;
export const getExchangePending = (state:any) => state.pendingExchange;
export const getExchangeError = (state:any) => state.errorExchange;
>>>>>>> 4e561d6c93bf0838e00b0bc941f4ac35d3ae9a6f
