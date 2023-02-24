import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import SkeletonCard from "../Skeleton/SkeletonCard";
import { setLoading } from "../../redux/eastern-light/reducer/reducer";
import { useDispatch } from "react-redux";
const Product = ({ product }) => {
  
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isloading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3300);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  function Convert(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  const handleproduct = () => {
    navigate(`/products/${product.category_id}/${product.name}/${product.id}`);
    console.log(location.pathname);
    if(location.pathname !== `/products`)
    window.location.reload();
  };
  return (
    <>
      <div
        onClick={handleproduct}
        className="relative flex items-center md:justify-center flex-col 
            md:flex-row md:gap-4 sm:gap-1 m-auto sm:w-[90%] md:w-[96%] md:h-[500px] bg-white
            sm:h-[300px] shadow-lg mt-10 md:p-7 sm:p-3 hover:border-2 border-[#76A900] rounded-3xl cursor-pointer"
        key={product._id} data-aos="fade-up"
      >
        {isloading ? (
          <SkeletonCard />
        ) : (
          <div className="flex items-center flex-col md:gap-4 sm:gap-1">
            <img
              src={product.image}
              alt={product.name}
              className="md:w-[300px] md:h-[200px] sm:w-[80%] sm:h-[100px] hover:scale-110"
            />
            <div className="border-b ">
              <h3 className="font-bold w-full sm:text-[15px] md:hidden">
                {product.name.slice(0, 18) + "..."}
              </h3>
              <h3 className="font-bold md:w-full sm:w-[80%]  sm:text-[15px]  sm:hidden md:block ">
                {product.name}
              </h3>
              <p className="font-bold md:w-36 sm:w-[80%] m-auto p-2 sm:text-[13px] bg-[#76A900] text-white rounded-lg mt-3 ">
                {Convert(product.price)} ETB
              </p>
            </div>
            <p className="sm:text-[13px] md:hidden">
              {product.description.slice(0, 20) + "..."}
            </p>
            <p className="sm:text-[13px] sm:hidden md:flex">
              {" "}
              {product.description.slice(0, 80) + "..."}{" "}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;