import React, { useEffect, useRef } from 'react';
import {Redirect} from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CountryTabs from './CountryTabs/CountryTabs';
import WeatherWidgetContainer from '../WeatherWidget/WeatherWidgetContainer';
import ExchangeWidgetContainer from '../ExchangeWidget/ExchangeWidgetContainer';
import Map from '../Map/Map';
import DateWidgetContainer from '../DateWidget/DateWidgetContainer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 10,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
      },
    },
    text_field: {
      '& > *': {
        margin: theme.spacing(1),
        [theme.breakpoints.up('lg')]: {
          margin: theme.spacing(2),
        },
        width: '100%',
      },
    },
    country_box: {
      width: '100%',
    },
    paper_country: {
      width: '100%',
      padding: theme.spacing(2),
      marginBottom: '10px',
    },
    paper_widgets: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      boxSizing: 'border-box',
      flexWrap: 'wrap',
      [theme.breakpoints.up('lg')]: {
        justifyContent: 'end',
        flexDirection: 'column',
        margin: '0 0 0 10px',
        width: '20%',
      },
      margin: '10px 0 0',
      alignItems: 'center',
      width: '100%',
    },
    main_content: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
      },
      padding: '10px',
    },
    tabs: {
      width: '100%',
    },
    map: {
      width: '100%',
      height: '50vw',
      maxHeight: '500px',
      [theme.breakpoints.up('lg')]: {
        width: '50%',
        minWidth: '500px',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
      },
    },
    about_country: {
      width: '90%',
    },
    name_country: {
      margin: '15px',
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      flexWrap:"wrap",
      textAlign:"center",
    },
    name_capital: {},
    country_description: {},
    country_img:{
      margin: theme.spacing(1),
      padding:"3px",
    },
    widgets: {
      margin: '10px',
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

const CountryContent = ({ currentCountry,language }) => {

  const [{name,capital,description}]= currentCountry.localizations.filter(lan=>lan.lang===language)

  const classes = useStyles();

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo(0, ref.current!.offsetTop);
    console.log(currentCountry)
  },[currentCountry]);

  if(currentCountry===null) return <Redirect to="/"/>

  return (
    <div ref={ref} className={classes.root}>
      <div className={classes.country_box}>
        <Paper className={classes.paper_country}>
          <div className={classes.main_content}>
            <div className={classes.map}>
              <Map coordinates={currentCountry.capitalLocation.coordinates} iso={currentCountry.ISOCode}/>
            </div>
            <div className={classes.about_country}>
              <div className={classes.name_country}>
                <h1>
                  {name},{' '}
                  {capital}
                </h1>
                <Card className={classes.country_img}>
                 <CardActionArea>
                 <CardMedia
                   component="img"
                   alt= {name}
                   height="140"
                   image={currentCountry.imageUrl}
                   title={name}
                 />        
               </CardActionArea>     
                </Card>              
              </div>
              <div className={classes.text_field}>
                <TextField
                  id="standard-read-only-input"
                  label="Descriptions"
                  multiline
                  value={description}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </div>
          </div>
        </Paper>

        <Paper className={classes.tabs}>
          <CountryTabs videoUrl={currentCountry.videoUrl}/>
        </Paper>
      </div>
      <Paper className={classes.paper_widgets}>
        <div className={classes.widgets}>
          <DateWidgetContainer />
        </div>
        <div className={classes.widgets}>
          <WeatherWidgetContainer />
        </div>
        <div className={classes.widgets}>
          <ExchangeWidgetContainer />
        </div>
      </Paper>
    </div>
  );
};

export default CountryContent;
