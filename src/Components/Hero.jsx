import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Scroll from './Scroll';
const Hero = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
        <header className='m-6'> 
        <nav className='flex justify-between'>
        <h1 className=''>ESTERN LIGHT PHRMA</h1>
        <button className='sm:hidden'>CONTACT US</button>
        <FontAwesomeIcon icon={faBars} onClick={toggle} className='md:hidden text-xl' />
        </nav>
        </header>
        <Scroll/>
        {/* make this nav slide from the top to exit and back to come back smoth */}
        {isOpen ? 
        <nav className='fixed blob-nav overflow-hidden   top-0 h-screen w-full bg-green-500 z-50'>
        <div className='flex justify-between m-6 text-white'>
        <h1 className=''>ESTERN LIGHT PHRMA</h1>
        <FontAwesomeIcon icon={faXmark} onClick={toggle} className='md:hidden text-xl' />
        </div>
        <ul className='flex flex-col m-20 gap-4'>
        <li className='text-blue-500'>Home</li>
        <li className='text-blue-500'>About</li>
        <li className='text-blue-500'>Services</li>
        <li className='text-blue-500'>Contact</li>
        </ul>
        </nav>: ''}
      </>
  )
}
export default Hero;
