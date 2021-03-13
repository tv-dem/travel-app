import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CountryTabs from './CountryTabs/CountryTabs';
// import DateWidget from '../DateWidget/DateWidget';
import COUNTRIES from '../../Data/CountriesData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '90%',
      flexGrow: 2,
      flexDirection: 'row',
      display: 'flex',
    },
    text_field: {
      '& > *': {
        margin: theme.spacing(2),
        width: '100%',
      },
    },
    country_box: {
      width: '80%',
      margin: '10px ',
    },
    paper_country: {
      width: '100%',
      padding: theme.spacing(2),
      marginBottom: '10px',
    },
    paper_widgets: {
      width: '20%',
      padding: theme.spacing(2),
      margin: '10px 0',
    },
    main_content: {
      display: 'flex',
      flexDirection: 'row',
      padding: '10px',
    },
    tabs: {
      width: '100%',
    },
    map: {
      width: 300,
    },
    about_country: {
      width: '90%',
    },
    name_country: {},
    name_capital: {},
    country_description: {},
    widgets: {
      width: '20%',
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

type TParams = { id: string };

const CountryContent = (): JSX.Element => {
  const classes = useStyles();

  const id: TParams = useParams();

  const index = COUNTRIES.findIndex(country => country.id === id.id);

  if (index === -1) return <Redirect to="/" />;
  const country = COUNTRIES[Number(index)];

  return (
    <div className={classes.root}>
      <div className={classes.country_box}>
        <Paper className={classes.paper_country}>
          <div className={classes.main_content}>
            <div className={classes.map}>map</div>
            <div className={classes.about_country}>
              <div className={classes.name_country}>{country.country}</div>
              <div className={classes.name_capital}>{country.capital}</div>
              <div className={classes.text_field}>
                <TextField
                  id="standard-read-only-input"
                  label="Descriptions"
                  defaultValue={country.descriptions}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </div>
          </div>
        </Paper>

        <Paper className={classes.tabs}>
          <CountryTabs />
        </Paper>
      </div>
      <Paper className={classes.paper_widgets}>
        <div className={classes.widgets}>{/* <DateWidget /> */}</div>
      </Paper>
    </div>
  );
};

export default CountryContent;
