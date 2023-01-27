import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import deskslider1 from "../assets/desk-slider1.jpg";
import deskslider2 from "../assets/centrifuge.jpg";
import deskslider3 from "../assets/ECG.jpg";

const Scroll = () => {
    const slideImages = [
        {
          url: slide1,
          urldesk: deskslider1,
          caption: 'Easter Light Pharma',
          description: 'Easter Light Pharma is a leading supplier of high-quality pharmaceuticals and biomedical equipment.',
          btn: <button className="bg-green-400 text-white rounded-full px-4 py-2">Get In Touch</button>,
        },
        {
          url: slide4,
          urldesk: deskslider2,
          caption: 'Advancing medicine, improving lives',
          description: 'We are dedicated to advancing medicine and improving lives through our wide range of pharmaceuticals and biomedical equipment. We strive to provide the latest and most effective solutions to healthcare professionals.',
          btn:'',
        },
        {
          url: slide3,
          urldesk: deskslider3,
          caption: 'Leading the way in biomedical innovation',
          description: 'Easter Light Pharma is a leader in biomedical innovation, supplying cutting-edge pharmaceuticals and medical equipment to the healthcare industry. We are committed to driving progress and improving patient outcomes through their products.',
          btn:'',
        },
      ];
  return (
    <section className="slide-container mt-20" name="hero">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div className="h-screen  each-slide" key={index}>
          <div className='md:hidden relative h-screen w-full bg-cover bg-center  backdrop-blur-lg' style={{'backgroundImage': `url(${slideImage.url})`}}>
            <div className='relative w-80 m-auto'>
          <div className='absolute top-36 left-[4%] rounded-full bg-green-400 w-24 h-24 opacity-20 animate-blob'></div>
          <div className='absolute top-36 left-[30%] rounded-full bg-green-400 w-24 h-24 opacity-20 animate-blob'></div>
          <div className='absolute top-36 left-[55%] rounded-full bg-green-400 w-24 h-24  opacity-20 animate-blob'></div>
          </div>
            <div className='absolute h-screen w-full opacity-90 backdrop-blur-sm'>
          <div className='absolute pt-40 text-gray-700    h-auto w-full text-center px-8'>
            <div className='flex flex-col gap-8'>
              <h1>
            <span className=' sm:text-4xl  font-bold'>{slideImage.caption}</span>
            </h1>
            <p className='text-center text-md text-gray-600'>{slideImage.description}</p>
            <div className='p-24'>{slideImage.btn}</div>
            </div>
           </div>
           </div>
          </div>
          {/* Desktop */}
          <div className='sm:hidden md:block  relative h-screen w-full bg-cover bg-center  backdrop-blur-lg' style={{'backgroundImage': `url(${slideImage.urldesk})`}}>
            <div className='absolute h-screen w-full opacity-90 backdrop-blur-sm desktop-bg'>
          <div className='absolute left-[10%] top-52 w-[80%]  pt-40 text-white h-auto px-8'>
            <div className='flex flex-col gap-0'>
              <h1>
            <span className=' text-4xl font-bold md:text-6xl' data-aos="fade-up">{slideImage.caption}</span>
            </h1>
            <div className='flex flex-col gap-8'>
            <p className='text-md w-[60%] md:text-xl' data-aos="fade-up">{slideImage.description}</p>
            <div className='pl-6' data-aos="fade-up">{slideImage.btn}</div>
            </div>
            </div>
           </div>
           </div>
          </div>
          </div>
      ))} 
    </Slide>
  </section>
  )
}
export default Scroll;
