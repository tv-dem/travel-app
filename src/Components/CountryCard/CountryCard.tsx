import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './CountryCard.scss';
import {CountryCardProps} from '../CardsAll/CountryType'

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


const CountryCard: React.FC<CountryCardProps> = ( {country} ) => {
  
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>       
         <CardMedia
          className={classes.media}
          image={country.imageUrl}
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
