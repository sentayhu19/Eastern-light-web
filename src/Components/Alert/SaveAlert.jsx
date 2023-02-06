import React from "react";
import check from "../../assets/check.gif";

const SaveAlert = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center bg-[#000] top-36 z-10 w-full h-52">
      <img className="w-44" src={check} />
      <h1 className="text-white">SAVED</h1>
    </div>
  );
};

export default SaveAlert;
