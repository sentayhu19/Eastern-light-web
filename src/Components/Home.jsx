import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Who from "./Who";
import About from "./About";
import Contactus from "./Contactus";
import Footer from "./Footer";
import Productshow from "./Products/Products";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Productshow/> */}
      <Services />
      <Who />
      <About />
      <Contactus />
      <Footer />
    </>
  );
};

export default Home;
