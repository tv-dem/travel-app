import { connect } from 'react-redux';
import CountryContent from './CountryContent';

import {getCountries} from '../../Redux/GetApi/reducer';


const mapStateToProps = (state:any) => {
console.log(state.getCountries)
return ({
    countries: getCountries(state.getCountries),
  })}
  
const CountryContentContainer = connect(mapStateToProps)(CountryContent);

export default CountryContentContainer;