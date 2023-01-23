import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import Scroll from './Scroll';
const Hero = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
        <header className='sm:m-6 md:mx-16'> 
        <nav className='flex w-full justify-between'>
          <div className='flex gap-2 items-center border-b'  >
        <div className='flex items-center relative font-bold  sm:text-[11px] md:text-[20px] text-[#006394]'>
          <p className='font-logo estyle relative '>
            EASTERN  </p>
            <div className='relative'>
            <FontAwesomeIcon className='absolute text-[8px] top-4 left-2 text-white' icon={faStethoscope}/>
            <FontAwesomeIcon className='text-[#76A900] top-2 pt-1 text-2xl' icon={faMortarPestle}/>
            </div>
          <p className=' text-[#76A900]'> LIGHT</p> 
        </div>
          </div>
        <button className='sm:hidden'>CONTACT US</button>
        <FontAwesomeIcon icon={faBars} onClick={toggle} className='md:hidden text-xl' id={isOpen ? 'button-hidden': ''} />
        <FontAwesomeIcon icon={faXmark} onClick={toggle} className='md:hidden text-xl' id={isOpen ? '': 'button-hidden'} />
        <ul className='flex sm:hidden md:flex gap-14  text-[#76A900]'>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Contact</a></li>
        </ul>
        </nav>
        </header>
        <Scroll/>
        {/*  nav slide */}
        {isOpen ? 
        <nav className='fixed blob-nav overflow-hidden md:hidden   top-0 h-screen w-[50%] bg-[#76A900] z-50 rounded-r-xl' id="slide" data-aos="flip-left">
        <div className='flex justify-between m-6 text-white'>
        <div className='flex items-center text-[11px] text-white'>
          <p>EASTERN  </p>
            <FontAwesomeIcon className='top-2 pt-1 text-2xl' icon={faMortarPestle}/>
          <p> LIGHT</p> </div>
        
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
