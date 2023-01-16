import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Scroll from './Scroll';
const Hero = () => {
  return (
    <div>
        <div className='m-6'> 
        <div className='flex justify-between'>
        <h1 className=''>ESTERN LIGHT PHRMA</h1>
        <button className='sm:hidden'>CONTACT US</button>
        <FontAwesomeIcon icon={faBars} className='md:hidden' />
        </div>
        </div>
        <Scroll/>
        </div>
  )
}
export default Hero;
