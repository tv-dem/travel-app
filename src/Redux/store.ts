import { combineReducers, createStore } from 'redux';
import mainPageReducer from './MainPage/reducer';
import languageReducer from './Language/reducer';
import {CountryPageReducer} from './CountryPage/reducer';
import { countriesReducer } from './GetApi/reducer';
import AuthReducer from './Auth/reducer';
import UpdateReducer from './UpdateAuth/reducer';

const reducers = combineReducers({
  mainPage: mainPageReducer,
  language: languageReducer,
  countryPage: CountryPageReducer,
  getCountries: countriesReducer,
  auth: AuthReducer,
  update: UpdateReducer,
});

const persistedState = ()=>{
 const reduxState =localStorage.getItem('reduxState')

  if (typeof reduxState === 'string') {
    return JSON.parse(reduxState);
  }
   return ({})
}

 const store = createStore(
    reducers,
  persistedState()
)

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
})

export default store;
