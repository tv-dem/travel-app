import React, { useEffect } from 'react';
import './DateWidget.scss'

const DateWidget: React.FC = ({ onChangeDate, day, minutes, seconds, hours,month,week,utf }:any) => {
  useEffect(()=>{
    const i = setInterval(()=>{
      onChangeDate(utf)
    }, 1000)
    return () => clearInterval(i)
  })
  return <div className="date-widget">
    <h3>{day},{month}</h3>
    <h3>{week}</h3>
    <h4>{hours}:{minutes}:{seconds}</h4>
  </div>
}

export default DateWidget;
