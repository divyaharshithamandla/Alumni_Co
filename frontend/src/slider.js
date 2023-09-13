










import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // Proper import for the CSS file
import './slider.css'; // Make sure to specify the correct CSS file path

const spanStyle = {
  padding: '20px',
  color: '#000000',
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  height: '100vh',
  maxwidth: '600px', // Set the width to 600px
};

const slideImages = [
  {
    url: 'al1.jpg',
    caption: 'Slide 1',
  },
  {
    url: 'al2.jpg',
    caption: 'Slide 2',
  },
  {
    url: 'al3.jpg',
    caption: 'Slide 3',
  },
];

export const Slideshow = () => {
  return (
    <div className="slide-container">
      <div className='slide'>
        <Slide images={slideImages.map((slideImage) => slideImage.url)}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};
