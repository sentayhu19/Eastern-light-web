import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import Select from "react-select";

import Adminnav from "../Navigations/Adminnav";
import { fetchcatagory } from "../../redux/eastern-light/reducer/reducer";
import SaveNot from "../Alert/SaveAlert";
import ErrorAlert from "../Alert/ErrorAlert";
import { setError } from "../../redux/eastern-light/reducer/reducer";
import { setLoading } from "../../redux/eastern-light/reducer/reducer";
import {
  getcategories,
  getproducts,
  addnewcategory,
  addnewproduct,
} from "../api/auth";

const AddProducts = () => {
  const { Error } = useSelector((state) => state.auth);
  const [Products, setProducts] = useState({
    name: "",
    description: "",
    brand: "",
    image: "",
    price: "",
    category_id: "",
    priority: "",
    box: "",
    unit: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const pulldata = async () => {
      getcategories().then((response) => {
        dispatch(fetchcatagory(response.data.category));
      });
    };
    pulldata();
  }, []);
  const { isloading } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.catagory);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setProducts({
      ...Products,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Products.priority > 8 || Products.priority <= 0) {
      dispatch(setError("Products Priority can only be between 1 and 8 "));
      setTimeout(() => {
        dispatch(setError(""));
      }, 4300);
      return 0;
    }
    if (Products.category == "") {
      dispatch(setError("Please select the product category"));
      setTimeout(() => {
        dispatch(setError(""));
      }, 4300);
      return 0;
    }
    try {
      await addnewproduct(Products);
      //show suchess message
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
      //clear the form
      setProducts({
        name: "",
        description: "",
        brand: "",
        image: "",
        price: "",
        category_id: "",
        priority: "",
        box: "",
        unit: "",
      });
    } catch (err) {
      dispatch(setError(err.message));
      setTimeout(() => {
        dispatch(setError(""));
      }, 4300);
    }
  };
  const handleSelectChange = (selectedOption) => {
    if (selectedOption) {
      const value = selectedOption;
      const category = "category_id";
      setProducts((currentProducts) => ({
        ...currentProducts,
        [category]: value.id,
      }));
    }
  };

  const {
    name,
    description,
    brand,
    image,
    price,
    category_id,
    priority,
    unit,
    box,
  } = Products;
  return (
    <>
      {isloading ? (
        <HashLoader color="#76A900" size={70} />
      ) : (
        <div className="mt-36">
          <Adminnav />
          <h1 className="text-center font-bold md:text-2xl pb-5">
            Add New Products
          </h1>
          <form method="POST"
            onSubmit={handleSubmit}
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
              <span className="span-slider">Name *</span>
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
              <span className="span-slider">Price (Birr) *</span>
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
              <span className="span-slider">Brand *</span>
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
              <span className="span-slider">Image *</span>
            </label>
            <label for="priority (1-8)" data-aos="fade-up">
              <input
                type="number"
                id="priority"
                name="priority"
                onChange={handleChange}
                value={priority}
                placeholder="priority"
              />

              <span className="span-slider"> priority (1-8)</span>
            </label>
            <label for="Box" data-aos="fade-up">
              <input
                type="number"
                id="box"
                name="box"
                onChange={handleChange}
                value={box}
                placeholder="Box"
              />

              <span className="span-slider"> Box</span>
            </label>
            
            <label for="Unit" data-aos="fade-up">
              <input
                type="number"
                id="unit"
                name="unit"
                onChange={handleChange}
                value={unit}
                placeholder="Unit"
              />
              <span className="span-slider"> Unit</span>
            </label>
            <Select
              options={categories}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              name="category"
              value={category_id}
              onChange={handleSelectChange}
              placeholder="Category"
            />
            <div></div>
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
                maxLength={700}
              ></textarea>
              <label class="floating-label">Product description (700)</label>
            </div>
            <button
              type="submit"
              className="bg-[#76A900] text-white rounded-lg md:w-36 md:h-12"
            >
              Submit
            </button>

            {Error === "" ? "" : <ErrorAlert message={Error} />}
          </form>
          {isOpen ? <SaveNot /> : ""}
        </div>
      )}
    </>
  );
};

export default AddProducts;
