import { connect } from 'react-redux';
import Gallery from './Gallery';
import { changeCurrentImageAC } from '../../Redux/CountryPage/actions';

const mapStateToProps = ({ countryPage, language }: any) => ( {
    imageData: countryPage.imageObj.places.map(({ photoUrl, localizations }) => ({
        original: photoUrl,
        thumbnail: photoUrl,
        description: localizations.find(({lang})=>lang===language.selectedLanguage.lan).description,
      })),
});

const mapDispatchToProps = (dispatch) => ({
  onSlideImage: (idImage) => {
    dispatch(changeCurrentImageAC(idImage))
  },
});


const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;
