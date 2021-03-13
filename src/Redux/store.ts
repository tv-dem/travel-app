import { combineReducers, createStore } from 'redux';
import mainPageReducer from './MainPage/reducer';
import languageReducer from './Language/reducer';
import CountryPageReducer from './CountryPage/reducer';
import { countriesReducer } from './GetApi/reducer';

const reducers = combineReducers({
  mainPage: mainPageReducer,
  language: languageReducer,
  countryPage: CountryPageReducer,
  getCountries: countriesReducer,
});

const store = createStore(reducers);

export default store;
