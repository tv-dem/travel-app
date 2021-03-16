import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './CountryCard.scss';

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

const CountryCard = ( props:any ) => {
  
  const {country, language} = props
  const [{name,capital}]= country.localizations.filter(lan=>lan.lang===language)

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>       
         <CardMedia
          className={classes.media}
          image={country.imageUrl}
          title={name}
        />
        <CardContent>        
          <Typography gutterBottom variant="h5" component="h2">
          {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Capital: {capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};



export default CountryCard;
