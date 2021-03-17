import { connect } from 'react-redux';
import SimpleRating from './Raiting';
import { addRatingAC } from '../../../Redux/CountryPage/actions';

const mapStateToProps = ({countryPage}) => {
  const { rate } = countryPage.currentImage;
  const currentRating = rate.length ? rate.reduce((acc, n) => acc + n)/rate.length : 5;
  return {
    currentRating: Math.floor(currentRating),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSetRating: (rate) => {
    dispatch(addRatingAC(rate))
  },
});


const RaitingContainer = connect(mapStateToProps, mapDispatchToProps)(SimpleRating);

export default RaitingContainer;
