import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getproducts } from "../api/auth";
import { fetchproduct } from "../../redux/eastern-light/reducer/reducer";
import { getcategories } from "../api/auth";
import { fetchcatagory } from "../../redux/eastern-light/reducer/reducer";
import Product from "./Product";
import { getsearchbycat } from "../api/auth";

const Products = () => {
  const [productSearch, setproductSearch] = useState({ key: "" });
  const [searchResult, setsearchResult] = useState([]);
  const [searchmessage, setsearchmessage] = useState("");
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.catagory);
  const { products } = useSelector((state) => state.product);
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
  const glass = `<FontAwesomeIcon icon={faMagnifyingGlass} />`;
  const handleSelectChange = (selectedOption) => {
    //search based on category
    setsearchmessage("");
    if (selectedOption) {
      if (selectedOption.id === "0") {
        setproductSearch({ key: "" });
      }
      const value = selectedOption;
      const key = "key";
      setproductSearch({ [key]: value.id });
      setsearchResult(
        products.filter((product) => product.category_id == value.id)
      );
      if (searchResult.length == 0) {
        setsearchmessage("No Product Found under " + value.name);
      } else {
        let message =
          "Found " +
          searchResult.length +
          " results for " +
          value.name +
          " category";
        setsearchmessage(message);
      }
    }
  };
  const handleSelectChange2 = async (selectedOption) => {
    //search based on product name
    if (selectedOption) {
      setsearchmessage("");
      if (selectedOption.id === "0") {
        setproductSearch({ key: "" });
      }
      const value = selectedOption;
      const key = "key";
      setproductSearch({ [key]: value.id });
      setsearchResult(
        await products.filter((product) => product.name.includes(value.name))
      );
      if (searchResult.length == 0) {
        setsearchmessage("No Product Found for the search " + value.name);
      } else {
        let message =
          glass +
          "  Found " +
          searchResult.length +
          " results for " +
          value.name;
        setsearchmessage(message);
      }
    }
  };
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
  return (
    <section
      className="flex md:flex-row sm:flex-col text-center mt-20 bg-[#F0F1F3]"
      name="products"
      id="products"
    >
      <div className="md:fixed flex flex-col gap-5 md:w-[20%] sm:w-[95%] bg-white md:max-w-[400px] md:h-screen m-5 border-3 p-4 shadow-lg rounded-lg">
        <label>Search by category</label>
        <Select
          options={categoryOpt}
          //add one more static option for all

          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          name="category"
          value={productSearch}
          onChange={handleSelectChange}
          placeholder="Search by category"
        />
        <label>Search by product name</label>
        <Select
          options={productOpt}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          name="key"
          value={productSearch}
          onChange={handleSelectChange2}
          placeholder="Search by product name"
        />
      </div>
      <div className="flex md:ml-[23%] flex-col mb-7 md:w-[76.6%] md:mb-20 shadow-lg md:mt-6 border-3 bg-white pb-7 rounded-lg">
        <h2 className="text-2xl font-bold pt-7 " data-aos="fade-up">
          PRODUCTS
        </h2>
        <h2 className="text-white bg-[#006394] text-center">{searchmessage}</h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-3  items-center w-full px-[1%] md:px-[6%] ">
          {searchResult.length > 0
            ? searchResult.map((product) => <Product product={product} />)
            : products.map((product) => <Product product={product} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
