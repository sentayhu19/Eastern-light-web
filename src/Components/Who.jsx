import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import world from "../assets/world.png";
const Who = () => {
  return (
    <section className="relative text-center m-2 bgfix " name="who" style={{ backgroundImage: `url(${world})` }} >
        <div className=" bg-black absolute w-full h-[100%] opacity-30 "></div>
      <div className="flex flex-col mb-7 md:mb-20 text-white ">
        <h2 className="text-2xl font-bold pt-7  " data-aos="fade-up">
          WHO WE ARE
        </h2>
        <p className="relative sm:p-4 md:w-[50%] m-auto">
          We are a leading pharmaceutical and bio-medical equipment wholesaler,
          providing top-quality products and exceptional service to healthcare
          professionals. With a vast network of suppliers and a commitment to
          meeting the needs of our customers, we strive to improve patient
          outcomes and support the delivery of high-quality care.
        </p>
        <div
          className="flex sm:flex-col md:flex-row md:gap-20  sm:m-auto sm:gap-8"
          data-aos="flip-left"
        >
          <div className="relative flex flex-col rounded-full bg-[#006394] w-24 h-24 md:w-32 md:h-32 items-center justify-center text-white font-bold text-[1.6rem]">
            <FontAwesomeIcon
              icon={faClock}
              className="absolute flex items-center justify-center md:text-[112px] sm:text-[80px] "
            />
            <p className="absolute md:left-8 sm:left-5 top-3 md:text-5xl text-[#76A900] z-10">
              4
            </p>{" "}
            &nbsp;
            <p className="absolute top-10 md:top-16 left-4 text-[#76A900]  z-10">
              Years+
            </p>
          </div>
          <div className=" flex flex-col rounded-full bg-[#006394] w-24 h-24 md:w-32 md:h-32 items-center justify-center text-white font-bold text-[1.6rem]">
            <p className="sm:text-[20px]">
              1000+ <br />
              Products{" "}
            </p>
          </div>
          <div className=" flex flex-col rounded-full bg-[#006394] w-24 h-24 md:w-32 md:h-32 items-center justify-center text-white font-bold text-[1.6rem]">
            <p>In 5 Cities</p>
          </div>
        </div>
      </div>
      <button className="bg-[#76A900] relative text-white w-[50%] rounded-md md:w-[10%] mb-1 h-10">
        <Link to="contact ">Contact Us</Link>
      </button>
    </section>
  );
};
export default Who;
