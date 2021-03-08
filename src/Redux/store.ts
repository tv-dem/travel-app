import {combineReducers, createStore} from 'redux';
import mainPageReducer from './MainPage/reducer';
import languageReducer from './Language/reducer';

const reducers = combineReducers({
  mainPage: mainPageReducer,
  language: languageReducer,
});

const store = createStore(reducers);

export default store;
