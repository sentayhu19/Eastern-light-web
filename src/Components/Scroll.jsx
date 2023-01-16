import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Scroll = () => {
    const slideImages = [
        {
          url: './assets/spinetta.jpg',
          caption: 'Easter Light Phrma'
        },
        {
          url: 'images/slide_3.jpg',
          caption: 'Slide 2'
        },
        {
          url: 'images/slide_4.jpg',
          caption: 'Slide 3'
        },
      ];
  return (
    <div className="h-screen">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div className="h-screen  each-slide" key={index}>
          <div style={{'backgroundImage': `url(${slideImage.url})`}}>
            <span className=''>{slideImage.caption}</span>
          </div>
        </div>
      ))} 
    </Slide>
  </div>
  )
}
export default Scroll;
