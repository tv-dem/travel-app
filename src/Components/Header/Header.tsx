import React from 'react';
import Language from './Language/Language';
import FormPropsTextFields from './Search/Search';
import Login from './Login/Login.module';
import HeaderComp from './HeaderComponents'

const Header: React.FC = () => (
    <HeaderComp>
      <Language />
      <FormPropsTextFields />
      <Login />
    </HeaderComp>);
export default Header;
