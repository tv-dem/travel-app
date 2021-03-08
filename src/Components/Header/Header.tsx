import React from 'react';
import Login from './Login/Login.module';
import HeaderComp from './HeaderComponents'
import SearchContainer from './Search/SearchContainer';
import LanguageContainer from './Language/LanguageContainer';

const Header: React.FC = () => (
    <HeaderComp>
      <LanguageContainer />
      <SearchContainer />
      <Login />
    </HeaderComp>);
export default Header;
