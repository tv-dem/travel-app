import React from 'react';
import Footer from '../../Components/Footer/Footer';
import HeaderCountryContent from '../../Components/Header/HeaderCountryContent/HeaderCountryContent'
import CountryContentContainer from '../../Components/CountryContent/CountryContentContainer';


const CountryPage: React.FC<Element> = () => (<>
     <HeaderCountryContent/>
    <CountryContentContainer />
    <Footer />
  </>
);

export default CountryPage;
