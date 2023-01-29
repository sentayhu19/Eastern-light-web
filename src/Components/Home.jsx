import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Who from "./Who";
import About from "./About";
import Contactus from "./Contactus";
import Productshow from "./Products/Show/ProductsShow";
import { Element } from 'react-scroll';


const Home = () => {
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
    </>
  );
};

export default Home;
