import React from "react";
import { useSelector } from "react-redux";
import Hero from "./Hero";
import Services from "./Services";
import Who from "./Who";
import About from "./About";
import Contactus from "./Contactus";
import Productshow from "./Products/Show/ProductsShow";
import { Element } from 'react-scroll';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <>
      <Hero />
      <Productshow/>
      <Element name="services">
      <Services />
      </Element>
      <Who />
      <About />
      <Contactus />
      {isAuth ? <div className="fixed z-50 top-72 l-0">
         <button className="bg-[#006394] text-white rounded-lg p-2" onClick={() => navigate("/dashboard")}>Dashboard</button>
      </div>:"" }
    </>
  );
};

export default Home;
