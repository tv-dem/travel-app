import { connect } from 'react-redux';
import CardsAll from './CardsAll';
import {
  fetchCountriesPending,
  fetchCountriesSuccess,
  fetchCountriesError,
  filterCountries,
  setCurrentCountry,
} from '../../Redux/GetApi/actions';
import {
  getCountries,
  getCountriesPending,
  getCountriesError,
  getCountriesFilter,
} from '../../Redux/GetApi/reducer';
import { CountryType } from './CountryType';


const MAIN_URL = 'https://api-travel-app.herokuapp.com/countries';

const mapStateToProps = (state: any) => ({
  language: state.language.selectedLanguage.lan,
  input: state.mainPage.input,
  error: getCountriesError(state.getCountries),
  countries: getCountries(state.getCountries),
  countriesSearch: getCountriesFilter(state.getCountries),
  pending: getCountriesPending(state.getCountries),
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentCountry: (country: CountryType) =>
    dispatch(setCurrentCountry(country)),
  filterCountries: (input: string,lang:string) => dispatch(filterCountries(input,lang)),
  fetchCountries: () => {
    dispatch(fetchCountriesPending());
    fetch(MAIN_URL)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCountriesError(null))
        dispatch(fetchCountriesSuccess(res));
        return res.countries;
      })
      .catch(error => {
        dispatch(fetchCountriesError(error.message));
      });
  },
});

const CardsAllContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsAll);

export default CardsAllContainer;
