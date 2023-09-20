<<<<<<< HEAD
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
=======
>>>>>>> 76697754af5e530fba8b2b977878e224510f96df
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './slider.css';

const slideImages = [
  {
    url: 'al1.jpg',
    // caption: 'Slide 1'
  },
  {
    url: 'al2.jpg',
    // caption: 'Slide 2'
  },
  {
    url: 'al3.jpg',
    // caption: 'Slide 3'
  },
];

export const Slideshow = () => {
  return (
    <div>
      <div className='body'>
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div className="slide-container" style={{ backgroundImage: `url(${slideImage.url})` }}>
                <span className="slide-caption">{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      
      </div>
    </div>
  )
  }