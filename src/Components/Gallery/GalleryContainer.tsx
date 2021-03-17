import { connect } from 'react-redux';
import Gallery from './Gallery';

const mapStateToProps = ({ countryPage }: any) => ({
  imageData: countryPage.images.URL.map(({ url, description }) => ({
    original: url,
    thumbnail: url,
    description,
  })),
});


const GalleryContainer = connect(mapStateToProps)(Gallery);

export default GalleryContainer;
