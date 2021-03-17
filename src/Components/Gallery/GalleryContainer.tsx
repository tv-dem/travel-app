import { connect } from 'react-redux';
import Gallery from './Gallery';
import { changeCurrentImageAC } from '../../Redux/CountryPage/actions';

const mapStateToProps = ({ countryPage, getCountries }: any) => ({
    currentImage: countryPage.currentImage,
    idCountry: getCountries.currentCountry.id,
    imageData: countryPage.images.URL.map(({ url, description }) => ({
      original: url,
      thumbnail: url,
      description,
    })),
});

const mapDispatchToProps = (dispatch) => ({
  onSlideImage: (idImage, idCountry) => {
    dispatch(changeCurrentImageAC(idImage, idCountry))
  },
});


const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;
