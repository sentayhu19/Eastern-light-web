import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../assets/spinetta.jpg';
import slide2 from '../assets/karolina.jpg';
import slide3 from '../assets/grabowska.jpg';
import slide5 from '../assets/slide5.jpg';

const Scroll = () => {
    const slideImages = [
        {
          url: slide1,
          caption: 'Easter Light Phrma'
        },
        {
          url: '../assets/karolina.jpg',
          caption: slide5,
        },
        {
          url: '../assets/karolina.jpg',
          caption: slide3,
        },
      ];
  return (
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div className="h-screen  each-slide" key={index}>
          <div style={{'backgroundImage': `url(${slideImage.url})`}}>
            {/* <img src={slideImage.url} alt={slideImage.caption} className='h-screen w-full object-cover' /> */}
            <span className='text-red-500 bg-slate-50'>{slideImage.caption}</span>
          </div>
        </div>
      ))} 
    </Slide>
  </div>
  )
}
export default Scroll;
