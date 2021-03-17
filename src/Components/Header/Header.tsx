import React from 'react';
import HeaderComp from './HeaderComponents'
import SearchContainer from './Search/SearchContainer';
import LanguageContainer from './Language/LanguageContainer';
import Logo from './Logo/Logo'
import UserViewContainer from './UserView/UserViewContainer';
import LoginContainer from './Login/Login.container';

const Header: React.FC = () => (
    <HeaderComp>
      <Logo/>
      <LanguageContainer />
      <SearchContainer />
      <UserViewContainer />
      <LoginContainer/>
    </HeaderComp>);
export default Header;
