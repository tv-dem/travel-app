import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import CardsAllComponent from './CardsAllComponent';
import CountryCardContainer from '../CountryCard/CountryCardContainer';
import CountryType from './CountryType'
import './CardsAll.scss';

const CardsAll: React.FC<CountryType> = (props: any) => {
  const { countries, error, pending, fetchCountries } = props;

  console.log(countries);


  useEffect(() => fetchCountries(), [fetchCountries]);

  return (
    <CardsAllComponent>
      {pending ? (
        <div>Loading...</div>
      ) : (
        <>
          {error && <span className="product-list-error">{error}</span>}
          {countries.map(
            (e: any) => (
              <Link className="card-item" key={e.id} to={`/country/${e.id}`}>
                <CountryCardContainer />
              </Link>
            ),
          )}
        </>
      )}
    </CardsAllComponent>
  );
};

export default CardsAll;
