import React from 'react'
import heartbeat from "../assets/heartbeat.jpg";
const Contactus = () => {
  return (
    <section className='pt-7'>
    <div style={{'backgroundImage': `url(${heartbeat})`}}>
    <h2 className='text-center font-bold text-2xl  p-7 text-white'>CONTACT US</h2>
    <form className='w-60% m-auto bg-white' >
        <label for="name">
            <input type="text" id="name" required placeholder="Name"/>
            <span>Name</span>
        </label>
        <label for="email">
            <input type="email" id="email" required placeholder="Email"/>
            <span>Email</span>
        </label>
        <label for="phone">
            <input type="text" id="phone" required placeholder="Phone"/>
            <span>Phone</span>
        </label>
        <div class="form-float scheme-des">
  <textarea name="" class="inputText" id="" cols="30" rows="10" placeholder=" "></textarea>
  <label class="floating-label">Message</label>
</div>
        <button type="submit">Submit</button>
    </form>
    </div>
    </section>
  )
}
export default Contactus;