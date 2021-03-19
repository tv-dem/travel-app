import { connect } from 'react-redux';
import DateWidget from './DateWidget';
import { onDateChangeAC } from '../../Redux/CountryPage/actions';

const mapStateToProps = ({ getCountries, language}: any) => {
  let { lan } = language.selectedLanguage;
  if(!lan){
    lan = 'en';
  }
  return{
    lan,
    utf: Number(getCountries.currentCountry.utc),
  }
};

const mapDispatchToProps = (dispatch: any) => ({
  onChangeDate: (utf: number) => dispatch(onDateChangeAC(utf)),
});

const DateWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(DateWidget);

export default DateWidgetContainer;
