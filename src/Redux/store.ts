import {combineReducers, createStore} from 'redux';
import mainPageReducer from './MainPage/reducer';
import languageReducer from './Language/reducer';
import CountryPageReducer from './CountryPage/reducer';

const reducers = combineReducers({
  mainPage: mainPageReducer,
  language: languageReducer,
  countryPage: CountryPageReducer,
});

const store = createStore(reducers);

export default store;
