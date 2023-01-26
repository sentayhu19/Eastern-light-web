import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMortarPestle } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [scroll, setScroll] = React.useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className='sm:m-0'> 
        <div className='fixed top-0 z-10 w-full bg-white'>
        <div className={scroll ? ' w-full border-b-2 border-gray-200 shadow-md ' : ''}  >
        <nav className='flex w-full items-center md:mx-10 justify-between md:px-20 sm:px-8 sm:mt-6  z-10  h-auto  '>
          
        <div className='flex items-center relative font-bold  sm:text-[11px] md:text-[20px] text-[#006394]'>
          <p className='font-logo estyle relative '>
            Eastern  
          </p>
            <div className='relative'>
            <FontAwesomeIcon className='absolute text-[8px] top-4 left-2 text-white' icon={faStethoscope}/>
            <FontAwesomeIcon className='text-[#76A900] top-2 pt-1 text-2xl' icon={faMortarPestle}/>
            </div>
          <p className='text-[#76A900] font-logo'> light</p> 
        </div>
         
        <button className='sm:hidden'>CONTACT US</button>
        <FontAwesomeIcon icon={faBars} onClick={toggle} className='md:hidden text-xl' id={isOpen ? 'button-hidden': ''} />
        <FontAwesomeIcon icon={faXmark} onClick={toggle} className='md:hidden text-xl' id={isOpen ? '': 'button-hidden'} />
        <ul className='flex items-center sm:hidden md:flex gap-14 '>
        <li><a className='hover:hover:text-[#76A900] cursor-pointer'>Home</a></li>
        <li><a className='hover:hover:text-[#76A900] cursor-pointer'>Products</a></li>
        <li><a className='hover:hover:text-[#76A900] cursor-pointer'>Services</a></li>
        <li><a className='hover:hover:text-[#76A900] cursor-pointer'>About</a></li>
        <li><a className='hover:hover:text-[#76A900] cursor-pointer'>Contact us</a></li>
        <li>
          <button className='bg-[#76A900] rounded-md text-white p-2'>
          <NavLink to="/login">Log in</NavLink>
          </button>
          </li>
        </ul>
        </nav>
        </div>
        </div>
        
{/*  nav slide */}
{isOpen ? 
        <nav className='fixed blob-nav overflow-hidden md:hidden top-0 h-screen w-[50%] bg-[#76A900] z-50 rounded-r-xl' id="slide" data-aos="flip-left">
        <div className='flex justify-between m-6 text-white'>
        <div className='flex items-center text-[11px] text-white'>
          <p className='font-logo estyle'>Eastern  </p>
          <div className='relative'>
            <FontAwesomeIcon className='absolute text-[8px] top-4 left-2 text-[#76A900]' icon={faStethoscope}/>
            <FontAwesomeIcon className='text-white top-2 pt-1 text-2xl' icon={faMortarPestle}/>
            </div>
          <p className='font-logo estyle'> light</p> </div>
        
        </div>
        <ul className='flex flex-col m-20 gap-4 text-white ' data-aos="fade-up">
        <li className=''>Home</li>
        <li className='' >About</li>
        <li className=''>Services</li>
        <li className=''>Contact</li>
        <li><NavLink to="/login">Log in</NavLink></li>
        </ul>
        </nav>: ''
        }
</header>  
    </>
  )
}

export default Nav