import React, {useEffect} from 'react';
import './ExchangeWidget.scss';

const titlesExchange = {
  ru: "Курсы",
  en: "Currencies",
  uk: "Курси",
}

const ExchangeWidget: React.FC = ({fetchExchange, dataExchange, currencyCurrent, lan}:any) => {

    useEffect(()=>{
    fetchExchange();
 
  },[currencyCurrent, fetchExchange, lan]);

  return (
  <div className="exchangeBox" aria-hidden = "true" onClick={fetchExchange}>
  <div className="exchangeBoxTitle">{titlesExchange[lan.lan]} ({currencyCurrent})</div>
  <div className="boxExchangeContent">
  <div className="exchangeContent">EUR {dataExchange.EUR}</div>
  <div className="exchangeContent">USD {dataExchange.USD}</div>
  <div className="exchangeContent">RUB {dataExchange.RUB}</div>
  </div>
  </div>)
}
export default ExchangeWidget;