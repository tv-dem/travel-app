import { connect } from 'react-redux';
import DateWidget from './DateWidget';
import { onDateChangeAC } from '../../Redux/CountryPage/actions';

const dayTranslate = {
  ru:{
    weekName: [
      'понедельник',
      'вторник',
      'среда',
      'четверг',
      'пятница',
      'суббота',
      'воскресенье',
    ],
    monthName: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
  },
  en: {
    weekName: [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
    ],
    monthName: [
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
      'December',
    ],
  },
  ukr:{
    weekName: [
      'Понеділок',
      'Вівторок',
      'Среда',
      'Честверг',
      'П\'ятницю',
      'Суботу',
      'Неділя',
    ],
    monthName: [
      'Січні',
      'Лютий',
      'Березень',
      'Квітень',
      'Травень',
      'Червня',
      'Липень',
      'Серпень',
      'Вересня',
      'Жовтень',
      'Листопад',
      'Грудень',
    ],
  },
};


const mapStateToProps = ({ countryPage, getCountries, language}: any) => {
  const { date } = countryPage;
  let { lan } = language.selectedLanguage;
  if(!lan){
    lan = 'en';
  }
  const day = date.getDate();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hours = date.getHours();
  return {
    day: `${day < 10 ? 0 : ''}${day}`,
    hours: `${hours < 10 ? 0 : ''}${hours}`,
    minutes: `${minutes < 10 ? 0 : ''}${minutes}`,
    seconds: `${seconds < 10 ? 0 : ''}${seconds}`,
    month: dayTranslate[lan].monthName[date.getMonth()],
    week: dayTranslate[lan].weekName[date.getDay()],
    utf: Number(getCountries.currentCountry.utc),
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onChangeDate: (utf: number) => dispatch(onDateChangeAC(utf)),
});

const DateWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(DateWidget);

export default DateWidgetContainer;
