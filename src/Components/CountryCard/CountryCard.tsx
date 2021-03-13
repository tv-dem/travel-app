import React from 'react';
import {  useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import './CountryCard.scss';
import CountryType from '../CardsAll/CountryType'

const useStyles = makeStyles({
  root: {
    width: '250px',
  },
  media: {
    height: "140px",
    width:"100%",
    paddingTop: '56.25%', 
  },
});

type TParams = { id: string };

const CountryCard: React.FC = ( {countries}:any) => {
  
  const classes = useStyles();

 

  const id: TParams = useParams();
console.log(id.id)
//   const index = countries.findIndex((country:CountryType) => country.id === id.id);

//   if (index === -1) return <Redirect to="/" />;

  const country:CountryType = countries[2];



  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img
          className={classes.media}        
          alt=""  
          src={country.imageUrl}         
          title={country.localizations[0].name}
        />
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="h2">
          {country.localizations[0].name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Capital: {country.localizations[0].capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};



export default CountryCard;
