import {useState, useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HashLoader } from 'react-spinners';
import Services from './Components/Services';
import Hero from './Components/Hero';
import Who from './Components/Who';
import About from './Components/About';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
function App() {
  const [loading, setloading] =  useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
    Aos.init({ duration: 1400, delay: 150 });
  }, []);
  return (
    <div className="App">
      {loading ? 
      <div className='flex items-center h-screen justify-center'>      
      <HashLoader
      color="#76A900"
      size={70}
    /></div>
      :
      (
      <>  
      <Hero/>
      <Services/>
      <Who/>
      <About/>
      <Contactus/>
      <Footer/>
      </>
      )}
    
    </div>
  );
}

export default App;
