import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons';
import Scroll from './Scroll';
const Hero = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
        <header className='m-6'> 
        <nav className='flex w-full justify-between'>
          <div className='flex gap-2 items-center border-b'  >
        <div className='text-[11px] text-[#006394]'>
          <span>EASTERN  <FontAwesomeIcon className='text-[#76A900] top-2 pt-1 text-2xl' icon={faMortarPestle}/></span>
          <span className=' text-[#76A900]'> LIGHT</span> 
        </div>
          </div>
        <button className='sm:hidden'>CONTACT US</button>
        <FontAwesomeIcon icon={faBars} onClick={toggle} className='md:hidden text-xl' id={isOpen ? 'button-hidden': ''} />
        <FontAwesomeIcon icon={faXmark} onClick={toggle} className='md:hidden text-xl' id={isOpen ? '': 'button-hidden'} />
        <ul className='flex sm:hidden md:block  text-[#76A900]'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        </ul>
        </nav>
        </header>
        <Scroll/>
        {/* make this nav slide from the top to exit and back to come back smoth */}
        {isOpen ? 
        <nav className='fixed blob-nav overflow-hidden md:hidden   top-0 h-screen w-[50%] bg-[#76A900] z-50 rounded-r-xl' id="slide" data-aos="flip-left">
        <div className='flex justify-between m-6 text-white'>
        <div className='text-[11px] text-white'>
          <span>EASTERN  <FontAwesomeIcon className='top-2 pt-1 text-2xl' icon={faMortarPestle}/></span>
          <span> LIGHT</span> </div>
        
        </div>
        <ul className='flex flex-col m-20 gap-4 text-white ' data-aos="fade-up">
        <li className=''>Home</li>
        <li className='' >About</li>
        <li className=''>Services</li>
        <li className=''>Contact</li>
        </ul>
        </nav>: ''}
      </>
  )
}
export default Hero;
