import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Login from '../Login/Login.module';
import HeaderComp from '../HeaderComponents'
import LanguageContainer from '../Language/LanguageContainer';
import Logo from '../Logo/Logo'

const HeaderCountryContent: React.FC = () => (
    <HeaderComp>
      <Logo/>
      <LanguageContainer />     
      <Link to="/"><Button variant="contained">Go to HOME</Button></Link>
      <Login />
    </HeaderComp>);
export default HeaderCountryContent;
