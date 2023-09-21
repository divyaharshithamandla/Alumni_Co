<<<<<<< HEAD
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
=======
// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-slideshow-image/dist/styles.css';
// import './slider';
// const spanStyle = {
//   padding: '20px',

// }

// const Slider= {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundSize: 'contain', /* Use 'contain' to fit the image within the div */
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center center', /* Center the image horizontally and vertically */
//     height: '100vh', 
// /* Use 100vh to make the div take up the full viewport height */
//     maxwidth: '100px',
//   };
  
// const slideImages = [
//   {
//     url: 'al1.jpg',
//     // caption: 'Slide 1'
//   },
//   {
//     url: 'al2.jpg',
//     // caption: 'Slide 2'
//   },
//   {
//     url: 'al3.jpg',
//     // caption: 'Slide 3'
//   },
// ];

// export const Slideshow = () => {
//     return (
        
//       <div>
//         <div className='slider'>
//         <Slide>
//          {slideImages.map((slideImage, index)=> (
//             <div key={index}>
//               <div style={{ ...Slider, 'backgroundImage': `url(${slideImage.url})` }}>
//                 <span style={spanStyle}>{slideImage.caption}</span>
//               </div>
//             </div>
//           ))} 
//         </Slide>
//         </div>
//       </div>
//     )
// }
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slider.css';


>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84

const slideImages = [
  {
    url: 'hack1.jpg',
<<<<<<< HEAD
    // caption: 'Slide 1',
  },
  {
    url: 'hack2.jpg',
    // caption: 'Slide 2',
  },
  {
    url: 'hack3.jpg',
    // caption: 'Slide 3',
=======
    // caption: 'Slide 1'
  },
  {
    url: 'hack2.jpg',
    // caption: 'Slide 2'
  },
  {
    url: 'hack3.jpg',
    // caption: 'Slide 3'
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
  },
];

export const Slideshows= () => {
  return (
<<<<<<< HEAD
    <div className="slide-container">
      <div className='slide'>
        <Slide images={slideImages.map((slideImage) => slideImage.url)}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
=======
    <div>
      <div className='body'>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div className="slide-container" style={{ backgroundImage: `url(${slideImage.url})` }}>
                {/* <span className="slide-caption">{slideImage.caption}</span> */}
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
              </div>
            </div>
          ))}
        </Slide>
      </div>
<<<<<<< HEAD
    </div>
  );
};
=======
     <Slideshows/>
    </div>
    
  )
  }
>>>>>>> 46481bbf2b60f8f1917d59c9bed851809dd5cc84
