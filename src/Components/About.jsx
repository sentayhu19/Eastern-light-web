import React from 'react'
import logo from "../assets/eastern-logo.png"

const About = props => {
  return (
    <section className=' pt-7 sm:w-96 m-auto'>
        <h2 className='font-bold text-xl text-center pb-4'>Eastern light</h2>
        <div className='flex sm:flex-col md:flex-row'>
        <div className='py-8' data-aos="fade-up">
            <img src={logo} alt='eastern-logo'/>
        </div>
        <div className='w-[90%] m-auto'>
            <div className='flex border-b gap-4 pb-4'>
                <h3 className='font-bold w-[65%]' data-aos="fade-up">The Company Established in</h3>
                <p className='w-[35%]' data-aos="fade-up">2010</p>
            </div>
            <div className='flex border-b gap-4 pb-4'>
                <h3 className='font-bold w-[65%]' data-aos="fade-up" >Managin Director</h3>
                <p className='w-[35%]' data-aos="fade-up">Samuel Mitiku</p>
            </div>
            <div className='flex border-b  gap-4 pb-4'>
                <h3 className='font-bold w-[65%]' data-aos="fade-up">Workes</h3>
                <p className='w-[35%]' data-aos="fade-up">20+</p>
            </div>
            <div className='flex border-b gap-4 pb-4'>
                <h3 className='font-bold w-[65%]' data-aos="fade-up">Adress</h3>
                <p className='w-[35%]' data-aos="fade-up">Addis Ababa, Ethiopia</p>
            </div>
            
        </div>
        </div>

    </section>
  )
}



export default About;