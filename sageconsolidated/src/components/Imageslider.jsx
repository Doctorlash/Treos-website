import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

import './imageslider.css';

const images = [
  { url: '/images/slide1.jpg' },
  { url: '/images/slide2.jpg' },
  { url: '/images/slide3.jpg' },
  // Add more images as needed
];

const ImageSlider = () => {
  return (
    <div className="image-slider">
      <SimpleImageSlider
        width={window.innerWidth}
        height={500}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={3.0}
      />
    </div>
  );
};

export default ImageSlider;
