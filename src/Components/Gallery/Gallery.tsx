// ts-nocheck
import React  from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import './Gallery.scss';
import RaitingContainer from './Raiting/RaitingContainer';

const Gallery = ({ imageData, onSlideImage, idCountry }) => (
    <>
      {imageData ? <ImageGallery onSlide={(id) => {
        onSlideImage(id + 1, idCountry);
      }} items={imageData} /> : null}
      <RaitingContainer />
    </>
  );
export default Gallery;
