import { connect } from 'react-redux';
import CardsAll from './CardsAll';
import {
  fetchCountriesPending,
  fetchCountriesSuccess,
  fetchCountriesError,
} from '../../Redux/GetApi/actions';
import {
  getCountries,
  getCountriesPending,
  getCountriesError,
} from '../../Redux/GetApi/reducer';

const MAIN_URL = 'https://api-travel-app.herokuapp.com/countries';

const mapStateToProps = (state: any) => ({
  error: getCountriesError(state.getCountries),
  countries: getCountries(state.getCountries),
  pending: getCountriesPending(state.getCountries),
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchCountries: () => {
    dispatch(fetchCountriesPending());
    fetch(MAIN_URL)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
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
