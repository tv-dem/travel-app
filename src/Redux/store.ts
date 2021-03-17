import { combineReducers, createStore } from 'redux';
import mainPageReducer from './MainPage/reducer';
import languageReducer from './Language/reducer';
import {CountryPageReducer} from './CountryPage/reducer';
import { countriesReducer } from './GetApi/reducer';
import AuthReducer from './Auth/reducer';

const reducers = combineReducers({
  mainPage: mainPageReducer,
  language: languageReducer,
  countryPage: CountryPageReducer,
  getCountries: countriesReducer,
  auth: AuthReducer,
});

const persistedState = ()=>{
 const reduxStateCountry =localStorage.getItem('reduxStateCountries')
 const reduxStateLanguage =localStorage.getItem('reduxStateLanguage')

  if (typeof reduxStateCountry === 'string' && typeof reduxStateLanguage === 'string') {
    return ({
      getCountries:JSON.parse(reduxStateCountry),
      language:JSON.parse(reduxStateLanguage)
    })
  }
   return ({})
}

 const store = createStore(
    reducers,
  persistedState()
)

store.subscribe(() => {
  localStorage.setItem('reduxStateCountries', JSON.stringify(store.getState().getCountries));
  localStorage.setItem('reduxStateLanguage', JSON.stringify(store.getState().language));
})

export default store;
