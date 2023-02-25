import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { getproducts } from "../api/auth";
import { fetchproduct } from "../../redux/eastern-light/reducer/reducer";
import { getcategories } from "../api/auth";
import { fetchcatagory } from "../../redux/eastern-light/reducer/reducer";
import AdminProduct from "./AdminProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { getsearchbycat } from "../api/auth";
import Adminnav from "../Navigations/Adminnav";
import { Helmet } from "react-helmet-async";

const AdminProducts = () => {
  const { categories } = useSelector((state) => state.catagory);
  const { products } = useSelector((state) => state.product);
  const sortopt = [
    { id: "1", name: "Unordered (None)" },
    { id: "2", name: "Ascending order ↑" },
    { id: "3", name: "Descending order ↓ " },
  ];
  const categoryOpt = [
    { id: "", name: "All" },
    ...categories.map((category) => ({
      id: category.id,
      name: category.name,
    })),
  ];
  const productOpt = [
    { id: "", name: "All" },
    ...products.map((product) => ({
      id: product.id,
      name: product.name,
    })),
  ];
  const [categorySearch, setcategorySearch] = useState(categoryOpt[0]);
  const [searchmessage, setsearchmessage] = useState("");
  const [productSearch, setproductSearch] = useState(productOpt[0]);
  const [sort, setsort] = useState(sortopt[0]);
  const [searchResult, setsearchResult] = useState([]);
  const dispatch = useDispatch();
 
 
  useEffect(() => {
    const pulldata = async () => {
      getproducts().then((response) => {
        dispatch(fetchproduct(response.data.products));
      });
    };
    pulldata();
    const pullcatagorydata = async () => {
      getcategories().then((response) => {
        dispatch(fetchcatagory(response.data.category));
      });
    };
    pullcatagorydata();
  }, []);
  const handleSelectChange = (selectedOption) => {
    //search based on category
    setsearchmessage("");
    if (selectedOption) {
      if (selectedOption.id === "0") {
        setcategorySearch(selectedOption);
      }
      const value = selectedOption;
      const key = "key";
      setcategorySearch(selectedOption);
      setsearchResult(
        products.filter((product) => product.category_id == value.id)
      );
      setsearchmessage("Search results for  " + value.name);
    }
  };
  const handleSelectChange2 = (selectedOption) => {
    //search based on product name
    if (selectedOption) {
      setsearchmessage("");
      if (!selectedOption.id) {
        setproductSearch(selectedOption);
      }
      const value = selectedOption;
      setproductSearch(selectedOption);
      setsearchResult(
        products.filter((product) => product.name.includes(value.name))
      );
      setsearchmessage("Search results for  " + value.name);
    }
  };

//sort based on views descending
 
 
  const handlesortChange = (selectedOption) => {
    //ascending and descending order
    if (selectedOption) {
      setsearchmessage("");
      if (!selectedOption.id) {
        setsort(selectedOption);
      }
      const value = selectedOption;
      setsort(selectedOption);
      if (value.id == "2") {
        const sortedProducts = [...products].sort(
          (a, b) => a.view - b.view
        );
        setsearchResult(sortedProducts);
        setsearchmessage("Sort results for  " + value.name);
      } else if (value.id == "3") {
        //sort based on views descending
        const sortedProducts = [...products].sort(
          (a, b) => b.view - a.view
        );
        setsearchResult(sortedProducts);
        setsearchmessage("Sort results for  " + value.name);
      }
      else if (value.id == "1"){
        //when opt is all
        setsearchResult({});
      }
    }
  };
  const reversedProducts = [...products].reverse();
  return (
    <>
      <Adminnav />
      <section
        className="flex md:flex-row sm:flex-col text-center mt-20 bg-[#F0F1F3]"
        name="products"
        id="products"
      >
        <Helmet>
          <title>Admin Products | Eastern Light</title>
        </Helmet>
        <div className="flex flex-col gap-5 md:w-[35%] bg-white sm:w-[95%] md:max-w-[400px] md:h-screen m-5 border-3 p-4  shadow-lg rounded-lg text-left">
          <label >
            <FontAwesomeIcon icon={faFolderOpen} /> &nbsp;&nbsp; 
            Search by category</label>
          <Select
            options={categoryOpt}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            name="category"
            value={categorySearch}
            onChange={handleSelectChange}
            placeholder="Search by category"
          />
          <label>
            <FontAwesomeIcon icon={faBox} /> &nbsp;&nbsp;
            Search by product name</label>
          <Select
            options={productOpt}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            name="key"
            value={productSearch}
            onChange={handleSelectChange2}
            placeholder="Search by product name"
          />
          <label>
            <FontAwesomeIcon icon={faEye} /> &nbsp;&nbsp;
            Sort by views</label>
          <Select
            options={sortopt}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            name="key"
            value={sort}
            onChange={handlesortChange}
            placeholder="Sort by views"
          />
        </div>
        <div className="flex flex-col mb-7 md:mb-20 shadow-lg md:mt-6 border-3 pb-7 rounded-lg bg-white">
          <h2 className="text-2xl font-bold pt-7 " data-aos="fade-up">
            PRODUCTS ({" "}
            {searchResult.length > 0 ? searchResult.length : products.length})
          </h2>
          <h2 className="text-white bg-[#006394] text-center sm:mx-5 md:mx-0">
            {searchmessage}
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-3  items-center w-full px-[1%] md:px-[6%] ">
            {searchResult.length > 0
              ? searchResult.map((product) => (
                  <AdminProduct product={product} />
                ))
              : products.length > 0
              ? reversedProducts.map((product) => (
                  <AdminProduct product={product} />
                ))
              : ""}
          </div>
          {products.length === 0 ? (
            <div className="bg-[#006394] text-white w-[300px] m-auto">
              <h2>No Products found</h2>
            </div>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
};

export default AdminProducts;
