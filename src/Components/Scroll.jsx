import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';


const Scroll = () => {
    const slideImages = [
        {
          url: slide1,
          caption: 'Easter Light Phrma',
          description: 'Easter Light Pharma is a leading supplier of high-quality pharmaceuticals and biomedical equipment.',
        },
        {
          url: slide4,
          caption: 'Advancing medicine, improving lives',
          description: 'We are dedicated to advancing medicine and improving lives through our wide range of pharmaceuticals and biomedical equipment. We strive to provide the latest and most effective solutions to healthcare professionals.',
        },
        {
          url: slide5,
          caption: 'Leading the way in biomedical innovation',
          description: 'Easter Light Pharma is a leader in biomedical innovation, supplying cutting-edge pharmaceuticals and medical equipment to the healthcare industry. They are committed to driving progress and improving patient outcomes through their products.',
        },
      ];
  return (
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div className="h-screen  each-slide" key={index}>
          <div className='h-screen w-full bg-cover bg-center  backdrop-blur-lg' style={{'backgroundImage': `url(${slideImage.url})`}}>
            <div className='absolute h-screen w-full opacity-90 backdrop-blur-sm'>
          <div className='absolute mt-36  mx-4 h-auto w-80  bg-black opacity-40 backdrop-blur-sm  '>
            <div className='flex flex-col gap-6'>
            <span className=' text-white text-center text-3xl'>{slideImage.caption}</span>
            <p className='text-center text-sm text-white'>{slideImage.description}</p>
            </div>
           </div>
           </div>
          </div>
        </div>
      ))} 
    </Slide>
  </div>
  )
}
export default Scroll;
