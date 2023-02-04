import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
   <section className="text-center m-2" name="services"   id="services">
<div className="flex flex-col mb-7 md:mb-20">
<h2 className='text-2xl font-bold pt-7 'data-aos="fade-up">OUR SERVICES</h2>
<p className="sm:p-4">Distribute phrma and biomedical equipments</p>
    <div className="flex sm:flex-col md:flex-row md:gap-20  sm:m-auto sm:gap-8"  data-aos="flip-left">
    <div className='flex sm:flex-col items-center justify-center text-[#006394]'>
                <div className='flex sm:flex-row'>
              <FontAwesomeIcon className='text-7xl' icon={faSyringe} />
              <FontAwesomeIcon className='text-7xl' icon={faMicroscope} />
        </div>
        <p className='pt-5'>Distribute biomedical equipments </p>
        </div>
        <div className='flex sm:flex-col items-center justify-center text-[#006394] sm:pt-16 md:pt-1' >
                <div className='flex sm:flex-row'>
        <FontAwesomeIcon className='text-7xl' icon={faSyringe} />
        <FontAwesomeIcon className='text-7xl' icon={faMicroscope} />
        </div>
        <p className='pt-5'>Pharmaceutical Distribution </p>
        </div>      
        <div className='flex sm:flex-col items-center justify-center text-[#006394] sm:pt-16 md:pt-1' >
                <div className='flex sm:flex-row'>
        <FontAwesomeIcon className='text-7xl' icon={faSyringe} />
        <FontAwesomeIcon className='text-7xl' icon={faMicroscope} />
        </div>
        <p className='pt-5'>Distribute biomedical equipments </p>
        </div>    
    </div>
</div>
<button className='bg-[#76A900] text-white w-[50%] h-10 rounded-md md:w-[10%]'>Contact Us</button>
</section>

  )
}
export default Services;
