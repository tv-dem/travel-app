import { connect } from 'react-redux';
import ExchangeWidget from './ExchangeWidget';
import store from '../../Redux/store';
import {
    fetchExchangePending,
    fetchExchangeSuccess,
    fetchExchangeError,
  } from '../../Redux/CountryPage/actions';

  import {
    getDataExchange,
    getExchangePending,
    getExchangeError,
  } from '../../Redux/CountryPage/reducer';


const mapStateToProps = (state: any) => ({
  errorExchange: getExchangeError(state.countryPage),
  dataExchange: getDataExchange(state.countryPage),
  pendingExchange: getExchangePending(state.countryPage),
  currencyCurrent: state.getCountries.currentCountry.currency,
});


const mapDispatchToProps = (dispatch: any) => ({
  fetchExchange: () => {
const API_KEY = "bcfebf330b8f2e505ebe8138";
const stateApp = store.getState();
const {currency} = stateApp.getCountries.currentCountry;


const URL_EXCHANGE = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`;
 // const URL_EXCHANGE = `https://v6.exchangerate-api.com/v6/bcfebf330b8f2e505ebe8138/latest/USD`;
    dispatch(fetchExchangePending());
    fetch(URL_EXCHANGE)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchExchangeSuccess(res.conversion_rates));

        return res.conversion_rates;
      })
      .catch(error => {
        dispatch(fetchExchangeError(error.message));
      });
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(ExchangeWidget);
