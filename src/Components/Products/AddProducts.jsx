import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import Select from "react-select";
import { Helmet } from "react-helmet-async";
import Adminnav from "../Navigations/Adminnav";
import { fetchcatagory } from "../../redux/eastern-light/reducer/reducer";
import { fetchunit } from "../../redux/eastern-light/reducer/reducer";
import SaveNot from "../Alert/SaveAlert";
import ErrorAlert from "../Alert/ErrorAlert";
import { setError } from "../../redux/eastern-light/reducer/reducer";
import { setLoading } from "../../redux/eastern-light/reducer/reducer";
import {
  getcategories,
  getproducts,
  getunit,
  addnewcategory,
  addnewproduct,
} from "../api/auth";

const AddProducts = () => {
  const { Error } = useSelector((state) => state.auth);
  const [category, setcategory] = useState("");
  const [unitSelector, setunitSelector] = useState("");
  const [priorityset, setPriority] = useState([]);
  const [prioritySelector, setprioritySelector] = useState([]);
  const [Products, setProducts] = useState({
    name: "",
    description: "",
    brand: "",
    image: "",
    price: "",
    category_id: category,
    priority: "",
    box: "",
    unit_id: "",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    const pulldata = async () => {
      getcategories().then((response) => {
        dispatch(fetchcatagory(response.data.category));
      });
      getunit().then((res)=> {
        dispatch(fetchunit(res.data.units))
      })

    };
    const fillPriorityData = () => {
      let priority = [];
      for (let i = 1; i <= 9; i++) {
        
        if(i==9){
          priority.push({ id: i, name: i+ " set to none" });
          break;
        }
        priority.push({ id: i, name: i });
      }
      setPriority(priority);
    };
    fillPriorityData();
    pulldata();
  }, []);
  const { isloading } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.catagory);
  const { units } = useSelector((state) => state.unit);
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (e) => {
    setProducts({
      ...Products,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category === null || category === "") {
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
        unit_id: "",
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
      setcategory(selectedOption);
      setProducts({
        ...Products,
        category_id: selectedOption.id,
      });
    }
  };

  const handleUnitSelectChange = (selectedOption) => {
    if (selectedOption) {
      setunitSelector(selectedOption);
      setProducts({
        ...Products,
        unit_id: selectedOption.id,
      });
    }
  };
  const handlePriSelectChange = (selectedOption) => {
    if (selectedOption) {
      setprioritySelector(selectedOption);
      setProducts({
        ...Products,
        priority: selectedOption.id,
      }); 
    }
  };

  const {
    name,
    description,
    brand,
    image,
    price,
    priority,
    unit_id,
    box,
  } = Products;
  return (
    <>
      {isloading ? (
        <HashLoader color="#76A900" size={70} />
      ) : (
        <div className="mt-36">
          <Helmet>
            <title>Add New Products</title>
          </Helmet>
          <Adminnav />
          <h1 className="text-center font-bold md:text-2xl pb-5">
            Add New Products
          </h1>
          <form method="POST"
            onSubmit={handleSubmit}
            className="sm:flex md:grid md:grid-cols-3 sm:w-60% md:w-[100%] md:items-center md:gap-6 m-auto bg-white"
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
              <span className="span-slider">Price (ETB) *</span>
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
              {Products.image ?
              <img src={Products.image} className="w-[200px] h-[200px] border" alt="Please add correct image URL"/>
              : ''
                }
  
            </label>
            <Select
              options={priorityset}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              name="priority"
              value={prioritySelector}
              required
              onChange={handlePriSelectChange}
              placeholder="Priority (1-8)"
            />
            <label for="Box" data-aos="fade-up">
              <input
                type="number"
                id="box"
                name="box"
                required
                onChange={handleChange}
                value={box}
                placeholder="Box"
              />

              <span className="span-slider"> Box *</span>
            </label>
            
            <Select
              options={units}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              name="unit"
              value={unitSelector}
              required
              onChange={handleUnitSelectChange}
              placeholder="Select Unit"
            />
            <Select
              options={categories}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              name="category"
              value={category}
              required
              onChange={handleSelectChange}
              placeholder="Select category"
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
                required
                rows="10"
                placeholder=" "
                maxLength={700}
              ></textarea>
              <label class="floating-label">Product description (700) *</label>
            </div>
            <button
              type="submit"
              className="bg-[#76A900] text-white rounded-lg md:w-36 md:h-12"
              disabled={!Products.name || !Products.price || !Products.brand || !Products.image || !Products.category_id || !Products.priority || !Products.box || !Products.unit_id || !Products.description   }
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
