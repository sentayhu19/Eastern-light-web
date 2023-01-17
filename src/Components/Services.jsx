import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <section>
        <p className='text-2xl font-bold pt-7'>Our Services</p>
        <p className='pt-2'>Distribute phrma and biomedical equipments </p>
        <div className='p-7'>
            <div className='flex sm:flex-col items-center justify-center text-blue-500'>
                <div className='flex sm:flex-row'>
        <FontAwesomeIcon className='text-7xl' icon={faSyringe} />
        <FontAwesomeIcon className='text-7xl' icon={faMicroscope} />
        </div>
        <p className='pt-5'>Distribute biomedical equipments </p>
        </div>
        </div>
    
    </section>

  )
}
export default Services;
