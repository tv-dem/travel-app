import { connect } from 'react-redux';
import Gallery from './Gallery';

const mapStateToProps = ({countryPage}:any) => {
  console.log('')
  return{
    imageData: countryPage.images.URL.map(({url, description })=>({
      original: url,
      thumbnail: url,
      description,
    })),
  }
}

// const mapDispatchToProps = (dispatch:any) => ({
//   onChangeDate: (utf:number) => dispatch(onDateChangeAC(utf))
// })

const GalleryContainer =  connect(mapStateToProps,)(Gallery);

export default GalleryContainer
