import React from 'react';
import Login from './Login/Login.container';
import HeaderComp from './HeaderComponents'
import SearchContainer from './Search/SearchContainer';
import LanguageContainer from './Language/LanguageContainer';
import Logo from './Logo/Logo'

const Header: React.FC = () => (
    <HeaderComp>
      <Logo/>
      <LanguageContainer />
      <SearchContainer />
      <Login />
    </HeaderComp>);
export default Header;
