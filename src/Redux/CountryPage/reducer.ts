import {
  ON_TIME_CHANGE,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR,
  FETCH_PLACES_ERROR,
  FETCH_PLACES_SUCCESS,
  CHANGE_CURRENT_IMAGE,
  FETCH_PLACES_PENDING, FETCH_EXCHANGE_ERROR, FETCH_EXCHANGE_SUCCESS, FETCH_EXCHANGE_PENDING, ADD_RATING,
} from './actionTypes';
// import { stateType } from './types';

const initialState = {
  currentImage: {
    countryId: '',
    id: 0,
    url: '',
    description: '',
    rate: [],
  },
  images: {
    URL: [
      {
        id: 0,
        url: 'https://fl-1.cdn.flockler.com/embed/not-found.png',
        description: 'no information',
        rate: [],
        countryId: '',
      },
    ],
    pending: false,
  },
  pendingExchange: false,
  dataExchange: {
    EUR: 0,
    USD: 0,
    RUB: 0,
  },
  errorExchange: null,
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

export function CountryPageReducer(state = initialState, action: any): any {
  switch (action.type) {
    case ON_TIME_CHANGE: {
      return {
        ...state,
        date: action.date,
      };
    }
    case CHANGE_CURRENT_IMAGE:{
      const {countryId, imageId} = action;
      const currentImage = state.images.URL.find((el) => el.id === imageId);
      return { ...state, currentImage: {...currentImage, countryId}};
    }
    case FETCH_PLACES_PENDING: {
      return { ...state, images: initialState.images };
    }
    case FETCH_PLACES_SUCCESS: {
      const r = action.data.places.map(({ localizations, photoUrl, rate, id }) => {
        const local = localizations.find(({ lang }) => lang === action.lan);
        return {
          url: photoUrl,
          description: local ? local.description : '',
          rate,
          id,
        };
      });
      return { ...state, images: { URL: r, pending: false }, currentImage: r[0] };

    }
    case ADD_RATING:{
      const currentImage = { ...state.currentImage };
      // @ts-ignore
      currentImage.rate = [...currentImage.rate, action.rate || 5];
      const URL = [...state.images.URL];
      URL[currentImage.id - 1] = currentImage;
      return { ...state, currentImage, images: {...state.images, URL} };
    }
    case FETCH_PLACES_ERROR: {
      return { ...state, images: initialState.images };
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
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_EXCHANGE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_EXCHANGE_SUCCESS:
      return {
        ...state,
        pendingExchange: false,
        dataExchange: action.currentExchange,
      };
    case FETCH_EXCHANGE_ERROR:
      return {
        ...state,
        pendingExchange: false,
        errorExchange: action.error,
      };
    default:
      return state;
  }
}

export const getData = (state: any) => state.data;
export const getWeatherPending = (state: any) => state.pending;
export const getWeatherError = (state: any) => state.error;

export const getDataExchange = (state: any) => state.dataExchange;
export const getExchangePending = (state: any) => state.pendingExchange;
export const getExchangeError = (state: any) => state.errorExchange;
