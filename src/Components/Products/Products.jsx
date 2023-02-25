import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { getproducts } from "../api/auth";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { fetchproduct } from "../../redux/eastern-light/reducer/reducer";
import { getcategories } from "../api/auth";
import { fetchcatagory } from "../../redux/eastern-light/reducer/reducer";
import { Helmet } from "react-helmet-async";
import Product from "./Product";

const Products = () => {
  const location = useLocation();
  const { category, category_name } = location?.state || {};
  const [searchResult, setsearchResult] = useState([]);
  const [searchmessage, setsearchmessage] = useState("");
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.catagory);
  const { products } = useSelector((state) => state.product);
  const categoryOpt = [
    { id: 0, name: "All" },
    ...categories.map((category) => ({
      id: category.id,
      name: category.name,
    })),
  ];

  const productOpt = [
    { id: 0, name: "All" },
    ...products.map((product) => ({
      id: product.id,
      name: product.name,
    })),
  ];
  const [productCatagorySearch, setProductCategory] = useState(categoryOpt[0]);
  const [productSearch, setproductSearch] = useState(productOpt[0]);

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
    const folderpass = () => {
      if (category) {
        //set the category name as the search result based on category
        setsearchResult(
          products.filter((product) => product.category_id == category)
        );
        setsearchmessage("Products under the category " + category_name);
      }
    };
    folderpass();
    pullcatagorydata();
  }, []);
  const handleSelectChange = (selectedOption) => {
    //search based on category
    setsearchmessage("");
    if (selectedOption) {
      if (selectedOption.id === "0") {
        setProductCategory(selectedOption);
      }
      const value = selectedOption;
      const key = "key";
      setProductCategory(selectedOption);
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

  const reversedProducts = [...products].reverse();
  return (
    <section
      className="flex md:flex-row sm:flex-col text-center mt-20 bg-[#F0F1F3]"
      name="products"
      id="products-list"
    >
      <Helmet>
        <title>Products</title>
        <meta
          name="description"
          content="Get high quality products now from Eastern light phrma "
        />
        <link rel="canonical" href="https://easternlightpharma.com/products" />
        {/* OG */}
        <meta property="og:image" content="./og.png" />
        <meta
          property="og:title"
          content={`Buy products from Easter light phrma `}
        />
        <meta
          property="og:description"
          content="Get high quality products now from Eastern light phrma"
        />
        <meta
          property="og:url"
          content="https://easternlightpharma.com/products"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="md:fixed flex flex-col gap-5 md:w-[20%] sm:w-[91%] bg-white md:max-w-[400px] md:h-screen m-5 border-3 p-4 shadow-lg text-left rounded-lg">
        <label>
          <FontAwesomeIcon icon={faFolderOpen} className="text-xl" /> &nbsp; &nbsp;
          Search by category</label>
        <div className="flex w-fll justify-center items-center">
          <div className="flex border-b border-t border-l rounded-sm h-[38px] items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" text-xl px-1 "
            />
          </div>
          <Select
            options={categoryOpt}
            //add one more static option for all
            className="w-full"
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            name="category"
            value={productCatagorySearch}
            onChange={handleSelectChange}
            placeholder="Search by category"
          />
        </div>
        <label>
          <FontAwesomeIcon icon={faBox} className="text-xl" /> &nbsp; &nbsp;
          Search by product name</label> 
        <div className="flex w-fll justify-center items-center">
          <div className="flex border-b border-t border-l rounded-sm h-[38px] items-center">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className=" text-xl px-1  "
            />
          </div>
          <Select
            options={productOpt}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            className="w-full"
            name="key"
            value={productSearch}
            onChange={handleSelectChange2}
            placeholder="Search by product name"
          />
        </div>
      </div>
      <div className="flex md:ml-[23%] flex-col mb-7 md:w-[76.6%] md:mb-20  md:mt-6   pb-7 ">
        <h1 className="text-2xl font-bold pt-7 mb-4 " data-aos="fade-up">
          PRODUCTS{" "}
          {searchResult.length > 0 ? "(" + searchResult.length + ")" : ""}
        </h1>
        <h2 className="text-white bg-[#006394] py-2 text-center">
          {searchmessage}
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-3  items-center w-full px-[1%] md:px-[6%] ">
          {searchResult.length > 0
            ? searchResult.map((product) => <Product product={product} />)
            : reversedProducts.map((product) => <Product product={product} />)}
        </div>
      </div>
    </section>
  );
};

export default Products;
