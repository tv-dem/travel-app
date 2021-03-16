import React, {useEffect} from 'react';
import './ExchangeWidget.scss';
// import store from '../../Redux/store';

// const stateApp = store.getState();

const ExchangeWidget: React.FC = ({fetchExchange, dataExchange, currencyCurrent}:any) => {

    useEffect(()=>{
    fetchExchange();

  },[currencyCurrent, fetchExchange]);

  return (
  <div className="exchangeBox" aria-hidden = "true" onClick={fetchExchange}>
  <div className="exchangeBoxTitle">Exchange ({currencyCurrent})</div>
  <div className="boxExchangeContent">
  <div className="exchangeContent">EUR {dataExchange.EUR}</div>
  <div className="exchangeContent">USD {dataExchange.USD}</div>
  <div className="exchangeContent">RUB {dataExchange.RUB}</div>
  </div>
  </div>)
}
export default ExchangeWidget;
