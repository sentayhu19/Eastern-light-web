import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { HashLoader } from 'react-spinners';
import Select from 'react-select';
import check from "../../assets/check.gif";
import Adminnav from "../Navigations/Adminnav";
import { fetchcatagory } from "../../redux/eastern-light/reducer/reducer";


import {
  getcategories,
  getproducts,
  addnewcategory,
  addnewproduct,
} from "../api/auth";



const AddProducts = () => {
  const [error, setError] = useState("");
  const [Products, setroducts] = useState({
    name: "",
    description: "",
    brand: "",
    image: "",
    price: "",
    category: "",
    priority: "",
  });

  

const dispatch = useDispatch();
useEffect(() => {
  const pulldata = async () => {
    getcategories().then(response => {
      dispatch( fetchcatagory(response.data.category));
    });
  }
  pulldata();
  }, []);
const { isloading } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.catagory);


  const [isOpen , setIsOpen] = useState(false)
  const handleChange = (e) => {
    console.log("target val: ",e)
    setroducts({
      ...Products,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addnewproduct(Products);
      //show suchess message
      setIsOpen(true)
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);

    } catch (err) {
      setError(err.message);
    }
  };

  const { name, description, brand, image, price, category, priority } =
    Products;
  //Only authorized usser i.e admin can add products
  return (
    <>   
    {isloading ?  
    <HashLoader
      color="#76A900"
      size={70}
    />: 
    <div className="mt-36 relative">
    <Adminnav/>
    <h1 className="text-center font-bold md:text-2xl pb-5">
      Add New Products
    </h1>
    <form onSubmit={handleSubmit}
      className="sm:flex md:grid md:grid-cols-3 sm:w-60% md:w-[90%] md:items-center md:gap-7 m-auto bg-white"
      data-aos="fade-up"
    >
      <label for="name" data-aos="fade-up">
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={name}
          required
          placeholder="Name"
        />
        <span>Name</span>
      </label>
      <label for="price" data-aos="fade-up">
        <input
          type="number"
          id="price"
          name="price"
          onChange={handleChange}
          value={price}
          required
          placeholder="description"
        />
        <span>Price</span>
      </label>
      <label for="brand" data-aos="fade-up">
        <input
          type="text"
          id="brand"
          name="brand"
          onChange={handleChange}
          value={brand}
          required
          placeholder="brand"
        />
        <span>Brand</span>
      </label>
      <label for="image" data-aos="fade-up">
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleChange}
          value={image}
          required
          placeholder="image"
        />
        <span>Image</span>
      </label>
      <label for="priority" data-aos="fade-up">
        <input
          type="number"
          id="priority"
          name="priority"
          onChange={handleChange}
          value={priority}
          required
          placeholder="image"
        />
        <span>Priority</span>
      </label>
      <Select
          options={categories}
          getOptionLabel={option => option.name}
          getOptionValue={option => option.id}
          name="category"
          value={category}
          onChange={handleChange}
        />
      <div class="form-float scheme-des" data-aos="fade-up">
        <textarea
          name="description"
          class="inputText"
          onChange={handleChange}
          id="description"
          value={description}
          cols="30"
          rows="10"
          placeholder=" "
        ></textarea>
        <label class="floating-label">Product description</label>
      </div>
      <button
        type="submit"
        className="bg-[#76A900] text-white rounded-lg md:w-36 md:h-12"
      >
        Submit
      </button>
      <p className="text-red-500 ">{error}</p>
    </form>
    {isOpen ? 
    <div className="absolute flex flex-col items-center justify-center bg-[#000] top-36 z-10 w-full h-52">
    <img className="w-44" src={check}/>
      <h1 className="text-white">SAVED</h1>
  </div>
    : "" }
  </div>

    }
         </>

  );
};

export default AddProducts;
