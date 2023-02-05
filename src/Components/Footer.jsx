import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Map from "./Map/Map";

const Footer = () => {
  const location = {
    address: 'Paster square 2PVJ+RR2, አዲስ አበባ',
    lat: 9.044522731394467,
    lng: 38.73201648573837,
  }
  return (
    <footer className="w-[45%] md:w-[70%] m-auto pt-10 md:max-w-[900px] ">
      <div className="flex sm:flex-col md:flex-row md:gap-[10%] sm:gap-10   ">
        <div className="flex flex-col w-full   gap-4">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold border-b">Company</h4>
            <h4>Eastern light pharma PLC</h4>
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faLocationDot} />
              <h4 className="w-full">Around paster area</h4>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <h4 className="font-bold border-b">Contact</h4>
          <div>
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faPhone} />
              <h4> +251 00 000 0000</h4>
            </div>
            <div className="flex gap-3 items-center sm:w-[5%]">
              <FontAwesomeIcon icon={faEnvelope} />
              <h4 className="sm:text-[13px] md:text-[15px]"> esternlightphrma@gmail.com </h4>
            </div>
            <div className="flex flex-col  gap-4 mt-4">
              <h4 className="font-bold border-b">Community</h4>
              <div className="flex md:gap-5 sm:gap-10">
                <a
                  className="flex items-center justify-center hover:border md:w-10 h-10 text-2xl rounded-full text-[#0077b5]  hover:text-white hover:bg-[#0077b5]"
                  href="https://www.linkedin.com/company/eastern-pharma-plc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  className="flex items-center justify-center hover:border w-10 h-10 rounded-full text-2xl  text-[#3b5999]  hover:text-white hover:bg-[#3b5999]"
                  href="https://www.facebook.com/Eastern-Pharma-PLC-100000000000000"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  className="flex items-center justify-center hover:border w-10 h-10 rounded-full text-2xl  text-[#55acee]  hover:text-white hover:bg-[#55acee]"
                  href="https://twitter.com/EasternPharma"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-bold border-b w-full">Location on Google map</h2>
          <Map location={location} zoomLevel={17} /> {/* include it here */}
        </div>
      </div>
      <div className="pt-10">
        <h3 className="text-center">
          Copyright © 2023 Eastern Pharma PLC All rights reserved.
        </h3>
      </div>
    </footer>
  );
};
export default Footer;
