import { connect } from 'react-redux';
import WeatherWidget from './WeatherWidget';
import store from '../../Redux/store';
import {
    fetchWeatherPending,
    fetchWeatherSuccess,
    fetchWeatherError,
  } from '../../Redux/CountryPage/actions';

  import {
    getData,
    getWeatherPending,
    getWeatherError,
  } from '../../Redux/CountryPage/reducer';


const mapStateToProps = (state: any) => ({
  error: getWeatherError(state.countryPage),
  data: getData(state.countryPage),
  pending: getWeatherPending(state.countryPage),
  lan: state.language.selectedLanguage
});


const mapDispatchToProps = (dispatch: any) => ({
  fetchWeather: () => {
  const API_KEY = "08f2a575dda978b9c539199e54df03b0";
  const stateApp = store.getState();
  const currentLan = stateApp.language.selectedLanguage.lan;
  const arrCountries = stateApp.getCountries.currentCountry.localizations;
  // const currency = stateApp.getCountries.currentCountry.currency;
  // https://v6.exchangerate-api.com/v6/abde171e7a47ca682606c780/latest/USD
  // Your API Key: abde171e7a47ca682606c780
  const currentCapital = arrCountries.find((item: any) => item.lang === currentLan).capital;
  const URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=${currentCapital}&lang=${currentLan}&appid=${API_KEY}&units=metric`;

    dispatch(fetchWeatherPending());
    fetch(URL_WEATHER)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchWeatherSuccess(res));
        console.log(res);
        return res;
      })
      .catch(error => {
        dispatch(fetchWeatherError(error.message));
      });
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(WeatherWidget);