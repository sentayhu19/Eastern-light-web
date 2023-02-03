import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { getproductshow } from "../../api/auth";
import { fetchproduct } from "../../../redux/eastern-light/reducer/reducer";
import Product from "../Product";


const Productshow = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const pulldata = async () => {
      getproductshow().then((response) => {
        dispatch(fetchproduct(response.data.products));
      });
    };
    pulldata();
  }, []);

  const { products } = useSelector((state) => state.product);
  return (
    <section className="text-center w-full min-h-[200px] h-auto bg-[#F0F1F3]">
      <div className="flex flex-col mb-7 md:mb-20">
        <h2 className="text-xl md:text-2xl  font-bold pt-7 " data-aos="fade-up">
          PRODUCTS
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-3  items-center w-full px-[1%] md:px-[6%] ">
          {products.slice(0, 8).map((product) => (
            <Product product={product} />
          ))}
        </div>
        <button className='bg-[#76A900] text-white w-[50%] m-auto rounded-md md:w-[10%] h-12 my-5 cursor-pointer' onClick={() => {navigate("/products")}} >Show more products</button>
      </div>
      {products.length > 0 ? (
        " "
      ) : (
        <div className="flex w-full mt-24 items-center justify-center ">
          <HashLoader className="m-auto" color="#76A900" size={70} />
        </div>
      )}
    </section>
  );
};

export default Productshow;
