import React from "react";
const Who = () => {
    return (
        <section className="text-center">
            <div className="flex flex-col mb-7">
            <p className='text-2xl font-bold pt-7 'data-aos="fade-up">WHO WE ARE</p>
            <p className="sm:p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore culpa inventore qui quas numquam, 
                distinctio veritatis, enim debitis accusantium beatae nulla cumque dolores placeat, deleniti consectetur adipisci? Quaerat, pariatur?</p>
                <div className="flex sm:flex-col sm:m-auto gap-8">
                        <div className=" flex flex-col rounded-full bg-[#006394] w-24 h-24 items-center justify-center text-white font-bold text-[1.6rem]" data-aos="ease-in-cubic">
                            <p>4 +</p> &nbsp;&nbsp;&nbsp;&nbsp; Year
                            </div>
                            <div className=" flex flex-col rounded-full bg-[#006394] w-24 h-24 items-center justify-center text-white font-bold text-[1.6rem]">
                            <p>1000+</p> 
                            </div>
                            <div className=" flex flex-col rounded-full bg-[#006394] w-24 h-24 items-center justify-center text-white font-bold text-[1.6rem]" >
                            <p>In 5 Cities</p> 
                            </div>
                            
                </div>
            </div>
            <button className='bg-[#76A900] text-white w-[50%] rounded-md'>Contact Us</button>
        </section>
    )
}
export default Who;