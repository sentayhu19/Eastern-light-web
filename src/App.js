import {useState, useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { HashLoader } from 'react-spinners';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Auth/Login';

function App() {
  const [loading, setloading] =  useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
    Aos.init({ duration: 1400, delay: 150 });
  }, []);

  const RestrictedRoute = ()=> {
const isAuth = false;
return <>{!isAuth? '' : ''}</>
  }
  
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
      <Router>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
      </Router>
      )}
    
    </div>
  );
}

export default App;
