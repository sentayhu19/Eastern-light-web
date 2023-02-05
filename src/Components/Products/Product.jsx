import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SkeletonCard from "../Skeleton/SkeletonCard";
import { setLoading } from "../../redux/eastern-light/reducer/reducer";
import { useDispatch } from "react-redux";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isloading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, []);

  const handleproduct = () => {
    navigate(`/products/${product.category_id}/${product.name}/${product.id}`);
    window.location.reload();
  };
  return (
    <>
      <div
        onClick={handleproduct}
        className="relative flex items-center md:justify-center flex-col 
  md:flex-row md:gap-4 sm:gap-1 m-auto sm:w-[90%] md:w-[96%] md:h-[500px]
   sm:h-[300px] shadow-lg mt-10 md:p-7 sm:p-3 hover:border-2 border-[#76A900] rounded-lg"
        key={product._id} data-aos="fade-up"
      >
        {isloading ? (
          <SkeletonCard />
        ) : (
          <div className="flex items-center flex-col md:gap-4 sm:gap-1">
            <img
              src={product.image}
              alt={product.name}
              className="md:w-[200px] md:h-[200px] sm:w-[250px] sm:h-[100px] hover:scale-110"
            />
            <div className="border-b">
              <h3 className="font-bold w-full sm:text-[15px]">
                {product.name}
              </h3>
              <p className="font-bold w-full sm:text-[13px] bg-[#76A900] text-white rounded-lg mt-3">
                {product.price} Birr
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