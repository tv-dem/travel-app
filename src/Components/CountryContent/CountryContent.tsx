import React from 'react';
import {
  RouteComponentProps
} from "react-router-dom";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '90%',
      flexGrow: 2,
      flexDirection: 'row',
      display: 'flex',
    },
    paper_country: {
      width: '80%',
      padding: theme.spacing(2),
      margin: '10px 0',
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
      height: 300,
    },
    about_country: {},
    name_country: {},
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


type TParams = { country: string,
 
};

const CountryContent = ({ match }: RouteComponentProps<TParams>) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper_country}>
        <div className={classes.main_content}>
          <div className={classes.map}>map</div>
          <div className={classes.about_country}>
            <div className={classes.name_country}>{match.params.country}</div>
            <div className={classes.country_description}>descriptions</div>
          </div>
        </div>
        <div className={classes.tabs}>Tabs</div>
      </Paper>
      <Paper className={classes.paper_widgets}>
        <div className={classes.widgets}>widgets</div>
      </Paper>
    </div>
  );
};

export default CountryContent;
