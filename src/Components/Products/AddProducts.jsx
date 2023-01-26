import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getcategories,
  getproducts,
  addnewcategory,
  addnewproduct,
} from "../api/auth";

const AddProducts = () => {
  const [Products, setroducts] = useState({
    name: "",
    description: "",
    brand: "",
    image: "",
    price: "",
    category: "",
    priority: "",
  });
  const handleChange = (e) => {
    setroducts({
      ...Products,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addnewproduct(Products);
      console.log(Products);
    } catch (err) {
      console.log(err);
    }
  };

  const { name, description, brand, image, price, category, priority } =
    Products;
  //Only authorized usser i.e admin can add products
  return (
    <div className="mt-36">
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
        <label for="category" data-aos="fade-up">
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleChange}
            value={category}
            required
            placeholder="category"
          />
          <span>Category</span>
        </label>
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
      </form>
    </div>
  );
};

export default AddProducts;
