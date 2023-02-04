import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { getproduct } from "../api/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Productshow from "./Show/ProductsShow";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
    const location = useLocation();
  const { id } = useParams();
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const pulldata = async () => {
      await getproduct(id).then((response) => {
        setproduct(response.data.product);
      });
    };
    pulldata();
  }, []);
  return (
    <>
      <div className="md:mt-36 sm:mt-24 w-full border-b-2">
        {product.length > 0 ? (
          <div className="flex md:items-center md:justify-center md:flex-row  flex-col px-10 md:px-36 md:py-14 md:gap-20">
            <div>
              <img
                className="md:max-w-[700px] md:min-w-[350px] sm:w-[99%] sm:max-w-[550px] m-auto   md:h-[500px] sm:h-[300px] rounded-lg shadow-2xl hover:scale-105 "
                src={product[0].image}
                alt={product.name}
              />
            </div>
            <div className="flex flex-col gap-14 border rounded-lg md:p-6 sm:pt-5 sm:mt-7 sm:px-6 ">
              <h1 className="md:text-3xl sm:text-2xl font-bold border-b pb-4">
                {product[0].name}
              </h1>
              <div className="md:w-[600px] sm:w-[90%] md:text-xl text-[#76A900] flex flex-col gap-3">
                <label className="border-none text-black">
                  About this item
                </label>
                {product[0].description}
              </div>
              <p className="md:w-[600px] sm:w-[90%] text-[#76A900] text-xl">
                <label className="border-none text-black">Brand</label>:{" "}
                {product[0].brand}
              </p>
              <p className="md:w-[600px] sm:w-[90%] text-[#76A900] text-xl">
                <label className="border-none text-black">Price: </label>
                {product[0].price} Birr
              </p>
              <div className="flex flex-col gap-3 border-t-2 pt-3 w-full sm:pb-4">
                <p className="md:w-[600px] sm:w-[90%] text-[#76A900] md:text-xl">
                  <label className="border-none text-black">
                    For more info Call:{" "}
                  </label>
                  <label className="border-none text-white bg-[#76A900] rounded-lg">+251942157611</label> 
                </p>
                <div className="flex md:gap-5 sm:gap-10 md:items-center ">
                <p className="text-black">
                    Share on
                <FontAwesomeIcon className="ml-2 text-xl" icon={faShareNodes} />
                </p>
                  <a
                    className="flex items-center justify-center hover:border md:w-10 h-10 text-2xl rounded-full text-[#0077b5]  hover:text-white hover:bg-[#0077b5]"
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${location.pathname}&title=Check%20out%20this%20page!&summary=&source=`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    className="flex items-center justify-center hover:border w-10 h-10 rounded-full text-2xl  text-[#3b5999]  hover:text-white hover:bg-[#3b5999]"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${location.pathname}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    className="flex items-center justify-center hover:border w-10 h-10 rounded-full text-2xl  text-[#55acee]  hover:text-white hover:bg-[#55acee]"
                    href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20product%20from%20eastern%20light!&url=${location.pathname}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <h2 className="text-center text-xl md:text-2xl w-full font-bold pt-7 bg-[#F0F1F3] ">
        RELATED
      </h2>
      <Productshow />
    </>
  );
};

export default ProductDetails;