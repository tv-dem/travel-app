import React from 'react';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header'
import CountryContentContainer from '../../Components/CountryContent/CountryContentContainer';


const CountryPage: React.FC<Element> = () => (<>
     <Header/>
    <CountryContentContainer />
    <Footer />
  </>
);

export default CountryPage;
