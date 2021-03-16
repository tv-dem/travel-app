// ts-nocheck
import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import './Gallery.scss';

const Gallery = ({ imageData }) => {
  console.log('imageData', imageData)
  return <>
    {imageData ? <ImageGallery items={imageData} /> : null}
  </>;
};
export default Gallery;
