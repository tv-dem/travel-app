import { connect } from 'react-redux';
import CountryContent from './CountryContent';
import { getCurrentCountry } from '../../Redux/GetApi/reducer';

const mapStateToProps = (state: any) => ({
  currentCountry: getCurrentCountry(state.getCountries),
});

const CountryContentContainer = connect(mapStateToProps)(CountryContent);

export default CountryContentContainer;
