import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Who from "./Who";
import About from "./About";
import Contactus from "./Contactus";
import Productshow from "./Products/Show/ProductsShow";

const Home = () => {
  return (
    <>
      <Hero />
      <Productshow/>
      <Services />
      <Who />
      <About />
      <Contactus />
    </>
  );
};

export default Home;
