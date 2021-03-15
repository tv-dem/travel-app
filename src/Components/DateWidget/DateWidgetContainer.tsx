import { connect } from 'react-redux';
import DateWidget from './DateWidget';
import {onDateChangeAC} from '../../Redux/CountryPage/actions';

const weekName = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

const monthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]


const mapStateToProps = ({countryPage}:any) => {
  const {date} = countryPage;
  const day = date.getDate();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hours = date.getHours()
  return{
    day:`${day < 10 ? 0 : ''}${day}`,
    hours:`${hours < 10 ? 0 : ''}${hours}`,
    minutes:`${minutes < 10 ? 0 : ''}${minutes}`,
    seconds:`${seconds < 10 ? 0 : ''}${seconds}`,
    month: monthName[date.getMonth()],
    week: weekName[date.getDay()],
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  onChangeDate: (utf:number) => dispatch(onDateChangeAC(utf))
})

const DateWidgetContainer =  connect(mapStateToProps, mapDispatchToProps)(DateWidget);

export default DateWidgetContainer
