import React from "react";
import notfoundmesaage from "../assets/notfound404.jpg";
const NotFound = () => {
  return (
    <div
      className="flex w-[80%] md:h-screen sm:h-[40vh] m-auto mt-10  mb-36"
      title="Page Not found 404"
    >
      <img src={notfoundmesaage} alt="notfound w-full h-screen" />
    </div>
  );
};
export default NotFound;
