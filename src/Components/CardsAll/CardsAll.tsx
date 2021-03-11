import React from 'react';
import { Link } from 'react-router-dom';

import CardsAllComponent from './CardsAllComponent';
import CountryCard from '../CountryCard/CountryCard';
import COUNTRIES from '../../Data/CountriesData'
import {CountryType} from '../../Data/CountryType'
import './CardsAll.scss'


const CardsAll: React.FC<CountryType> = () => (

  <CardsAllComponent>
    {COUNTRIES.map(
      (e): JSX.Element => (        
        <Link className="card-item" key={e.id} to={`/${e.country}`}>          
          <CountryCard  id={e.id} country={e.country} capital={e.capital} descriptions={e.descriptions} />
        </Link>    
      ),
    )}
  </CardsAllComponent>
);

export default CardsAll;
