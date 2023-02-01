import React from "react";
const Who = () => {
    return (
        <section className="text-center m-2" name="who">
            <div className="flex flex-col mb-7 md:mb-20">
            <h2 className='text-2xl font-bold pt-7 'data-aos="fade-up">WHO WE ARE</h2>
            <p className="sm:p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore culpa inventore qui quas numquam, 
                distinctio veritatis, enim debitis accusantium beatae nulla cumque dolores placeat, deleniti consectetur adipisci? Quaerat, pariatur?</p>
                <div className="flex sm:flex-col md:flex-row md:gap-20  sm:m-auto sm:gap-8"  data-aos="flip-left">
                        <div className=" flex flex-col rounded-full bg-[#006394] w-24 h-24 md:w-32 md:h-32 items-center justify-center text-white font-bold text-[1.6rem]">
                            <p>4 +</p> &nbsp; Years
                            </div>
                            <div className=" flex flex-col rounded-full bg-[#006394] w-24 h-24 md:w-32 md:h-32 items-center justify-center text-white font-bold text-[1.6rem]" >
                            <p>1000+</p> 
                            </div>
                            <div className=" flex flex-col rounded-full bg-[#006394] w-24 h-24 md:w-32 md:h-32 items-center justify-center text-white font-bold text-[1.6rem]"  >
                            <p>In 5 Cities</p> 
                     </div>    
                </div>
            </div>
            <button className='bg-[#76A900] text-white w-[50%] rounded-md md:w-[10%] h-10'>Contact Us</button>
        </section>
    )
}
export default Who;