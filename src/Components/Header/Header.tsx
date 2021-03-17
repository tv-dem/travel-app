import React from 'react';
import HeaderComp from './HeaderComponents'
import SearchContainer from './Search/SearchContainer';
import LanguageContainer from './Language/LanguageContainer';
import Logo from './Logo/Logo'
import UserView from './UserView/UserView';
import LoginContainer from './Login/Login.container';

const Header: React.FC = () => (
    <HeaderComp>
      <Logo/>
      <LanguageContainer />
      <SearchContainer />
      <UserView />
      <LoginContainer/>
    </HeaderComp>);
export default Header;
