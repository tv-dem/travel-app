import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CountryTabs from './CountryTabs/CountryTabs';

import Map from '../Map/Map'
import DateWidgetContainer from '../DateWidget/DateWidgetContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
      width: 500,
      display: 'flex',
      alignItems: 'center',
    },
    about_country: {
      width: '90%',
    },
    name_country: {
      margin: '15px',
    },
    name_capital: {},
    country_description: {},
    widgets: {
      margin: '10px'
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

// type TParams = { id: string };

const CountryContent = ({currentCountry}) => {



  const classes = useStyles();

  // const id: TParams = useParams();

  // if (countries === undefined) return <></>;

  // const index = countries.findIndex((item: CountryType) => item.id === id.id);

  // if (index === -1) return <Redirect to="/" />;

  // const country: CountryType = countries[Number(index)];

  return (
    <div className={classes.root}>
      <div className={classes.country_box}>
        <Paper className={classes.paper_country}>
          <div className={classes.main_content}>
            <div className={classes.map}>
              <Map />
            </div>
            <div className={classes.about_country}>
              <div className={classes.name_country}>
                <h1>{currentCountry.localizations[0].name}, {currentCountry.localizations[0].capital}</h1>
              </div>
              <div className={classes.text_field}>
                <TextField
                  id="standard-read-only-input"
                  label="Descriptions"
                  multiline
                  defaultValue={currentCountry.localizations[0].description}
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
        <div className={classes.widgets}><DateWidgetContainer/></div>
        <div className={classes.widgets}><DateWidgetContainer/></div>
        <div className={classes.widgets}><DateWidgetContainer/></div>
      </Paper>
    </div>
  );
};

export default CountryContent;
