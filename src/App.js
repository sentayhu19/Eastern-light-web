import { useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Services from './Components/Services';
import Hero from './Components/Hero';
import Who from './Components/Who';
import About from './Components/About';
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 150 });
  }, []);
  return (
    <div className="App">
     <Hero/>
      <Services/>
      <Who/>
      <About/>
    </div>
  );
}

export default App;
