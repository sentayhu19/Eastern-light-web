import React from 'react'


const About = props => {
  return (
    <section className=' pt-7 sm:w-96 m-auto'>
        <h2 className='font-bold text-xl text-center pb-4'>Eastern light</h2>
        <div className='flex sm:flex-col md:flex-row'>
        <div></div>
        <div className='w-[90%] m-auto'>
            <div className='flex border-b gap-4 pb-4'>
                <h3 className='font-bold w-[65%]'>The Company Established in</h3>
                <p className='w-[35%]'>2010</p>
            </div>
            <div className='flex border-b gap-4 pb-4'>
                <h3 className='font-bold w-[65%]' >Managin Director</h3>
                <p className='w-[35%]'>Samuel Mitiku</p>
            </div>
            <div className='flex border-b  gap-4 pb-4'>
                <h3 className='font-bold w-[65%]'>Workes</h3>
                <p className='w-[35%]'>20+</p>
            </div>
            <div className='flex border-b gap-4 pb-4'>
                <h3 className='font-bold w-[65%]'>Adress</h3>
                <p className='w-[35%]'>Addis Ababa, Ethiopia</p>
            </div>
            
        </div>
        </div>

    </section>
  )
}



export default About;