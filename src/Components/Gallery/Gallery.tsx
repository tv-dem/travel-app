import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const ImagesGallery = () => {
  const [images, setImages] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await fetch(
        "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
      )
      const data = await response.json();
      if (!shouldCancel && data && data.length > 0) {
        setImages(
          data.map((url: any) => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);
  return images ? <ImageGallery items={images} /> : null;
};
export default ImagesGallery;
