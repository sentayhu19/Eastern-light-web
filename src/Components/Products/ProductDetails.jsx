import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { getproduct } from "../api/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import stack from "../../assets/stackdollar.png";
import Productshow from "./Show/ProductsShow";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const location = useLocation();
  const { id } = useParams();
  const siteURL = `easternlightpharma.com/%23${location.pathname}`;
  const metasiteURL = `easternlightpharma.com/#${location.pathname}`;
  const [product, setproduct] = useState([]);
  let headData = "product ";
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
      <Helmet>
        <title>{product[0]?.name}</title>
        <meta
          name="description"
          content={`Buy ${product[0]?.description.slice(0, 100)+'...'} more from Easter light phrma `}
        />
        <link rel="canonical" href={siteURL} />
        <meta property="og:image" content={product[0]?.image} />
        <meta
          property="og:title"
          content={`Buy ${product[0]?.name} from Easter light phrma `}
        />
        <meta
          property="og:description"
          content={`${product[0]?.description.slice(0, 100)+'... '} Find it now at Eastern light pharma`}
        />
        <meta property="og:url" content={metasiteURL} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="md:mt-20 sm:mt-24 w-full border-b-2 bg-[#F0F1F3] ">
        {product.length > 0 ? (
          <div className="flex md:items-center md:justify-center md:flex-row  flex-col px-10 md:px-36 md:py-14 md:gap-20 border">
            <div>
              <img
                className="md:max-w-[700px] md:min-w-[350px] sm:w-[99%] sm:max-w-[550px] m-auto   md:h-[500px] sm:h-[300px] rounded-lg sm:mt-5 shadow-2xl hover:scale-105 "
                src={product[0].image}
                alt={product.name}
                title={product.name}
              />
            </div>
            <div className="flex flex-col gap-14 border rounded-lg md:p-6 sm:pt-5 sm:mt-7 sm:px-6 bg-white shadow-lg ">
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
                <FontAwesomeIcon
                  className="text-xl text-black"
                  icon={faShield}
                />
                &nbsp;
                <label className="border-none text-black">Brand</label>:{" "}
                {product[0].brand}
              </p>
              {product[0].unit ? (
                <p className="md:w-[600px] sm:w-[90%] text-[#76A900] text-xl">
                  <FontAwesomeIcon
                    className="text-xl text-black"
                    icon={faRuler}
                  />
                  &nbsp;
                  <label className="border-none text-black">Unit: </label>
                  {product[0].unit}
                </p>
              ) : (
                ""
              )}

              {product[0].box ? (
                <p className="md:w-[600px] sm:w-[90%] text-[#76A900] text-xl">
                  <FontAwesomeIcon
                    className="text-xl text-black"
                    icon={faBox}
                  />
                  &nbsp;
                  <label className="border-none text-black">Box: </label>
                  {product[0].box}
                </p>
              ) : (
                ""
              )}

              <p className="flex md:w-[600px] sm:w-[90%] text-[#76A900] text-xl">
                <img
                  src={stack}
                  title="Stack"
                  alt="stack"
                  className="w-6 h-6"
                />
                &nbsp;
                <label className="border-none text-black">Price:</label>&nbsp;
                {product[0].price} ETB
              </p>
              <div className="flex flex-col gap-3 border-t-2 pt-3 w-full sm:pb-4">
                <p className="md:w-[600px] sm:w-[90%] text-[#76A900] md:text-xl">
                  <label className="border-none text-black">
                    For more info Call:{" "}
                  </label>
                  <label className="border-none text-white bg-[#76A900] rounded-lg">
                    +251942157611
                  </label>
                </p>
                <div className="flex md:gap-5 sm:gap-10 md:items-center ">
                  <p className="text-black">
                    Share on
                    <FontAwesomeIcon
                      className="ml-2 text-xl"
                      icon={faShareNodes}
                    />
                  </p>
                  <a
                    className="flex items-center justify-center hover:border md:w-10 h-10 text-2xl rounded-full text-[#0077b5]  hover:text-white hover:bg-[#0077b5]"
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${siteURL}&title=Check%20out%20this%20page!&summary=&source=`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a
                    className="flex items-center justify-center hover:border w-10 h-10 rounded-full text-2xl  text-[#3b5999]  hover:text-white hover:bg-[#3b5999]"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${siteURL}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a
                    className="flex items-center justify-center hover:border w-10 h-10 rounded-full text-2xl  text-[#55acee]  hover:text-white hover:bg-[#55acee]"
                    href={`https://twitter.com/intent/tweet?text=Check%20out%20${product[0].name}%20from%20eastern%20light!&url=${siteURL}`}
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
        MORE
      </h2>
      <Productshow />
    </>
  );
};

export default ProductDetails;
