import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Footer = () => {
  return (
    <footer className='w-[45%] m-auto pt-10 text-center'>
        <div className='flex sm:flex-col md:flex-row gap-[10%] items-center'>
            <div >
                <h4 className='font-bold'>Company</h4>
                <div className='flex gap-3 items-center' > 
                    <FontAwesomeIcon icon={faLocationDot}/> 
                    <h4>
                    Around paster area</h4> </div>
                </div>
            <div >
                <h4 className='font-bold'>Contact</h4>
                <div className='flex gap-3 items-center'>
                    <FontAwesomeIcon icon={faPhone}/>
                   <h4> +251 00 000 0000</h4></div>
                <div className='flex gap-3 items-center'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <h4> esternlightphrma@gmail.com </h4></div>
            </div>
            <div>
                <h2 className='font-bold'>Location on Google map</h2>
            </div>
        </div>
        <div className='pt-10'>
            <h3>Copyright © 2023 Eastern Pharma PLC All rights reserved.</h3>
        </div>
    </footer>
  )
}
export default Footer;
