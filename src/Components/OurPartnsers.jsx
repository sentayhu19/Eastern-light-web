import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "../assets/logo.png";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Partner 1",
      image: logo,
    },
    {
      id: 2,
      name: "Partner 2",
      image: logo,
    },
    {
      id: 3,
      name: "Partner 3",
      image: logo,
    },
  ];
  return (
    <div>
      <div className=" items-center justify-center text-black py-10">
        <h1
          className="text-center text-3xl font-bold mb-10 "
          data-aos="fade-up"
        >
          OUR PARTNERS
        </h1>
        <div
          className="grid grid-cols-3  md:w-[60%] sm:w-[90%] m-auto"
          data-aos="fade-up"
        >
          {partners.map((partner) => (
            <div className="flex flex-col items-center justify-center text-black py-10">
              <img
                className="md:w-40 md:h-40 filter-gray-scale filter-hover-gray-scale "
                src={partner.image}
                alt={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Partners;
