import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section className='text-center'>
        <p className='text-2xl font-bold pt-7 'data-aos="fade-up">OUR SERVICES</p>
        <p className='pt-2'  >Distribute phrma and biomedical equipments </p>
        <div className='p-7'>
            <div className='flex sm:flex-col items-center justify-center text-[#006394]' data-aos="flip-left">
                <div className='flex sm:flex-row'>
        <FontAwesomeIcon className='text-7xl' icon={faSyringe} />
        <FontAwesomeIcon className='text-7xl' icon={faMicroscope} />
        </div>
        <p className='pt-5'>Distribute biomedical equipments </p>
        </div>
        <div className='flex sm:flex-col items-center justify-center text-[#006394] pt-16' data-aos="flip-left">
                <div className='flex sm:flex-row'>
        <FontAwesomeIcon className='text-7xl' icon={faSyringe} />
        <FontAwesomeIcon className='text-7xl' icon={faMicroscope} />
        </div>
        <p className='pt-5'>Distribute biomedical equipments </p>
        </div>
        <div className='flex sm:flex-col items-center justify-center text-[#006394] pt-16' data-aos="flip-left">
                <div className='flex sm:flex-row'>
        <FontAwesomeIcon className='text-7xl' icon={faSyringe} />
        <FontAwesomeIcon className='text-7xl' icon={faMicroscope} />
        </div>
        <p className='pt-5'>Distribute biomedical equipments </p>
        </div>
        </div>
    <button className='bg-[#76A900] text-white w-[50%] rounded-md'>Contact Us</button>
    </section>

  )
}
export default Services;
