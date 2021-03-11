import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './CountryCard.scss';
import { CountryType } from '../../Data/CountryType';

const useStyles = makeStyles({
  root: {
    width: '250px',
  },
});

const CountryCard: React.FC<CountryType> = ({
  country,
  capital,
  descriptions,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={country}
          height="140"
          image="country"
          title={descriptions}
        />
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="h2">
             {country}
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
