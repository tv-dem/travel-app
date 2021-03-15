import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss'

const Logo: React.FC = () =>  (
    <Link to="/">
    <div className="header__logo"/>                    
        </Link>             
  );


export default Logo;
