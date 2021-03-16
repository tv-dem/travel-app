import React from 'react';
import Login from '../Login/Login.module';
import HeaderComp from '../HeaderComponents'
import LanguageContainer from '../Language/LanguageContainer';
import Logo from '../Logo/Logo'

const HeaderCountryContent: React.FC = () => (
    <HeaderComp>
      <Logo/>
      <LanguageContainer />       
      <Login />
    </HeaderComp>);
export default HeaderCountryContent;
