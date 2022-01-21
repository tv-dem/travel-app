import React, { useEffect, useState } from 'react';
import './DateWidget.scss'

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


const DateWidget = ({ lan,utf }:any) => {
  const [dateObj, setDateObj] = useState({
    date: new Date(),
    d: '',
    hrs: '',
    min: '',
    sec: '',
  })
  useEffect(()=>{
    const i = setInterval(()=>{
      const date = new Date();
      const utcTime = date.getTime() + (date.getTimezoneOffset() * 60000);
      const NewTime = new Date(utcTime + (3600000 * utf));
      const day = NewTime.getDate();
      const minutes = NewTime.getMinutes();
      const seconds = NewTime.getSeconds();
      const hours = NewTime.getHours();

      const d = `${day < 10 ? 0 : ''}${day}`;
      const hrs = `${hours < 10 ? 0 : ''}${hours}`;
      const min = `${minutes < 10 ? 0 : ''}${minutes}`;
      const sec = `${seconds < 10 ? 0 : ''}${seconds}`;
      setDateObj({
        date: NewTime,
        d,
        hrs,
        min,
        sec
      });
    }, 1000)
    return () => clearInterval(i)
  })
  return <div className="date-widget">
    <h3>{dateObj.d},{dayTranslate[lan].monthName[dateObj.date.getMonth()]}</h3>
    <h3>{dayTranslate[lan].weekName[dateObj.date.getDay()]}</h3>
    <h4>{dateObj.hrs}:{dateObj.min}:{dateObj.sec}</h4>
  </div>
}

export default DateWidget;
