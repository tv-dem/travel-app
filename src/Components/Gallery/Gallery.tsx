// ts-nocheck
import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import './Gallery.scss';

const Gallery = ({ imageData }) => (
  <>
    {imageData ? <ImageGallery items={imageData} /> : null}
  </>
);
export default Gallery;
