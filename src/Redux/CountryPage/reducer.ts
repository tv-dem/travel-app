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
  currentPlace: {
    id: 0,
    localizations: [
      {lang: "ru", description: "изобраежения не найдены", name: ""},
      {lang: "en", description: "nothing", name: ""},
      {lang: "ukr", description: "няма", name: ""},
    ],
    photoUrl: "https://fl-1.cdn.flockler.com/embed/not-found.png",
    rate: [],
  },

  imageObj: {
    countryId: { id: '' } ,
    _id: '',
    places: [
      {
        id: 0,
        localizations: [
          {lang: "ru", description: "изобраежения не найдены", name: ""},
          {lang: "en", description: "nothing", name: ""},
          {lang: "ukr", description: "няма", name: ""},
        ],
        photoUrl: "https://fl-1.cdn.flockler.com/embed/not-found.png",
        rate: [],
      }
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
      const {imageId} = action;
      const currentPlace = state.imageObj.places.find((el) => el.id === imageId);
      return { ...state, currentPlace,};
    }
    case FETCH_PLACES_PENDING: {
      return state;
    }
    case FETCH_PLACES_SUCCESS: {
      const r = action.data;
      return { ...state, imageObj: r, currentPlace: r.places[0] };
    }
    case ADD_RATING:{
      const currentPlace = { ...state.currentPlace };
      // @ts-ignore
      currentPlace.rate = [...currentPlace.rate, action.rate || 5];
      const imageObj = {...state.imageObj};
      imageObj.places[currentPlace.id - 1] = currentPlace;
      console.log(imageObj)
      fetch(`https://api-travel-app.herokuapp.com/places/${imageObj.countryId.id}`, {
        method: 'PUT',
        body: JSON.stringify(imageObj),
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      }).then((res) => console.log(res));
      return { ...state, currentPlace, imageObj };
    }
    case FETCH_PLACES_ERROR: {
      return { ...state, imageObj: initialState.imageObj };
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
