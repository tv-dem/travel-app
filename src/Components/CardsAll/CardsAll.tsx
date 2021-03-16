import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardsAllComponent from './CardsAllComponent';
import CountryCard from '../CountryCard/CountryCard';

import './CardsAll.scss';
import {  CountryType } from './CountryType';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    bottom: {
      color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    top: {
      color: '#1a90ff',
      animationDuration: '550ms',
      position: 'absolute',
      left: 0,
    },
    circle: {
      strokeLinecap: 'round',
    },
  }),
);

const CardsAll: React.FC = (props: any) => {
  const {
    language,
    error,
    pending,
    fetchCountries,
    input,
    filterCountries,
    countriesSearch,
    setCurrentCountry,
  } = props;

  const classes = useStyles();

  useEffect(() => {
    fetchCountries();
    setCurrentCountry(null);
  }, [fetchCountries, setCurrentCountry]);

  useEffect(() => filterCountries(input,language), [input,language, filterCountries]);

  return (
    <CardsAllComponent>
      {pending ? (
        <div className={classes.root}>
          <CircularProgress
            variant="determinate"
            className={classes.bottom}
            size={100}
            thickness={4}
            value={100}
          />
          <CircularProgress
            variant="indeterminate"
            disableShrink
            className={classes.top}
            classes={{
              circle: classes.circle,
            }}
            size={100}
            thickness={4}
          />
        </div>
      ) : (
        <>
          {error ? 
            <span className="list-error">{error}</span>
           : 
            countriesSearch.map((e: CountryType) => (
              <Link
                className="card-item"
                key={e.id}
                to={`/country/${e.localizations[0].name}`}
                onClick={() => setCurrentCountry(e)}
              >
                <CountryCard country={e} language={language} />
              </Link>
            )
          )}
        </>
      )}
    </CardsAllComponent>
  );
};

export default CardsAll;
