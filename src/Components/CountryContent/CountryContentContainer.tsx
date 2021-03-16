import { connect } from 'react-redux';
import CountryContent from './CountryContent';
import { getCurrentCountry } from '../../Redux/GetApi/reducer';
import { fetchPlacesErrorAC, fetchPlacesPendingAC, fetchPlacesSuccessAC } from '../../Redux/CountryPage/actions';

const mapStateToProps = (state: any) => ({
  currentCountry: getCurrentCountry(state.getCountries),
  currentLan: state.language.selectedLanguage.lan,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPlaces: (id, lan) => {
    dispatch(fetchPlacesPendingAC());
    fetch('https://api-travel-app.herokuapp.com/places')
      .then(res => res.json())
      .then(data => {
        console.log('data', data);
        const countryPlaces = data.find(({ countryId }) => countryId.id === id);
        dispatch(fetchPlacesSuccessAC(countryPlaces, lan));
      })
      .catch(() => {
        dispatch(fetchPlacesErrorAC());
      });
  },
});

const CountryContentContainer = connect(mapStateToProps, mapDispatchToProps)(CountryContent);

export default CountryContentContainer;
