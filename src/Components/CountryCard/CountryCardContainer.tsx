import { connect } from 'react-redux';
import CountryCard from './CountryCard';

import {getCountries} from '../../Redux/GetApi/reducer';


const mapStateToProps = (state:any) => ({
    countries: getCountries(state.getCountries),
  })
  
const CountryCardContainer = connect(mapStateToProps)(CountryCard);

export default CountryCardContainer;
