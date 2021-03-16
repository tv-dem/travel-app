import React, {useEffect} from 'react';
import './WeatherWidget.scss';
import './owfont-regular.scss';

const WeatherWidget: React.FC = ({fetchWeather, data, lan}:any) => {

    useEffect(()=>{
    fetchWeather();
  },[lan, fetchWeather]);

  return (
  <div className="weatherBox" aria-hidden = "true" onClick={fetchWeather}>

  <div className="weatherBoxTitle">
    Weather
  <i className={`weather-icon owf owf-${data.weather[0].id}`} />
  </div>
  <div className="boxWeatherContent">
  <div className="weatherContent weatherContentCapital">{data.name}</div>
  <div className="weatherContent">{data.weather[0].description}</div>
  <div className="weatherContent">{data.main.temp}°C</div>
  </div>
  </div>)
}
export default WeatherWidget;
