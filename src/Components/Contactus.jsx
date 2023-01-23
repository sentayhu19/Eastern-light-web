import React, {useState} from 'react'
import heartbeat from "../assets/heartbeat.jpg";

const Contactus = () => {
  const [message, setMessage] = useState({
    name:"",
    email:"",
    phone:"",
    sendmessage:"",
});
const handleChange = (e) => {
  setMessage({
        ...message,
        [e.target.name]: e.target.value,
    });
};
    const {name, email, phone, sendmessage} = message;
  return (
    <section className='pt-7'>
    <div className='contact-bg h-auto'>
    <h2 className='text-center font-bold text-2xl p-7 text-white'   >CONTACT US</h2>
    <form className='w-60% m-auto bg-white ' data-aos="fade-up">
        <label for="name" data-aos="fade-up">
            <input type="text" id="name" name='name' onChange={handleChange} value={name} required placeholder="Name"/>
            <span>Name</span>
        </label>
        <label for="email" data-aos="fade-up">
            <input type="email" id="email" name="email" onChange={handleChange} value={email} required placeholder="Email"/>
            <span>Email</span>
        </label>
        <label for="phone" data-aos="fade-up">
            <input type="text" id="phone" name='phone' onChange={handleChange} value={phone} required placeholder="Phone"/>
            <span>Phone</span>
        </label>
        <div class="form-float scheme-des">
  <textarea name="sendmessage" class="inputText" onChange={handleChange}  id="" value={sendmessage} cols="30" rows="10" placeholder=" "></textarea>
  <label class="floating-label">Message</label>
</div>
        <button disabled={name === "" || phone === "" || sendmessage === "" ? ' ' : ''} type="submit" className='bg-[#76A900] text-white rounded-lg'>Submit</button>
    </form>
    </div>
    </section>
  )
}
export default Contactus;