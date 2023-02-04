import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { getproducts } from '../api/auth';
import { fetchproduct } from '../../redux/eastern-light/reducer/reducer';
import { getcategories } from '../api/auth';
import { fetchcatagory } from '../../redux/eastern-light/reducer/reducer';
import AdminProduct from './AdminProduct';
import { getsearchbycat } from '../api/auth';
import Adminnav from '../Navigations/Adminnav';


const AdminProducts = () => {
  const [categorySearch, setcategorySearch] = useState({category_id: ""});
  const [searchmessage, setsearchmessage] = useState("");
  const [productSearch, setproductSearch ] = useState({key: ""});
  const [searchResult, setsearchResult] = useState([]);
const dispatch = useDispatch();
const { categories } = useSelector((state) => state.catagory);
const { products } = useSelector((state) => state.product);
  useEffect(() => {
    const pulldata = async () => {
      getproducts().then(response => {
        dispatch(fetchproduct(response.data.products));
      });
    }
    pulldata();
    const pullcatagorydata = async () => {
      getcategories().then(response => {
        dispatch( fetchcatagory(response.data.category));
      });
      
    }
    pullcatagorydata()
    
  }, []);
const handleSelectChange = async  (selectedOption) => {
  
  if (selectedOption) {
    if(selectedOption.id === "0"){
      setproductSearch({key: ""});
    }
    const value = selectedOption;
    const key = 'key';
    setproductSearch({[key]: value.id});

    const productFiltered = await products.filter(product => product.category_id == value.id)
    setsearchResult(productFiltered)
    if (searchResult.length == 0) {
      setsearchmessage("No Product Found under " +value.name)
  }
  else{
    let message = "Found "+searchResult.length+" results for "+ value.name+ " category";
    setsearchmessage(message)
  }
 
  }
}
const handleSelectChange2 =  (selectedOption) => {
  if (selectedOption) {
    const value = selectedOption;
    const key = 'key';
    setproductSearch({[key]: value.id});
    setsearchResult(products.filter( product => product.name.includes(value.name )))
    if (searchResult.length == 0) {
      setsearchmessage("No Product Found for the search "+value.name)
      
  }else{
  let message = "  Found "+searchResult.length+" results for "+ value.name;
  setsearchmessage(message)
  }
  }
  
}

const categoryOpt = [
  { id: "", name: "All" },
  ...categories.map((category) => ({
    id: category.id,
    name: category.name,
  })),
]
const productOpt = [
  { id: "", name: "All" },
  ...products.map((product) => ({
    id: product.id,
    name: product.name,
  })),
]
  return (
    <>
    <Adminnav/>
    <section className="flex md:flex-row sm:flex-col text-center mt-20 bg-[#F0F1F3]" name="products"  id='products'>
      <div className='flex flex-col gap-5 md:w-[35%] bg-white sm:w-[95%] md:max-w-[400px] md:h-screen m-5 border-3 p-4 shadow-lg rounded-lg'>
        <label>Search by category</label>
        <Select
          options={categoryOpt}
          getOptionLabel={option => option.name}
          getOptionValue={option => option.id}
          name="category"
          value={categorySearch}
          onChange={handleSelectChange}
          placeholder="Search by category"
        />
         <label>Search by product name</label>
        <Select
          options={productOpt}
          getOptionLabel={option => option.name}
          getOptionValue={option => option.id}
          name="key"
          value={productSearch}
          onChange={handleSelectChange2}
          placeholder="Search by product name"
        />
      </div>
    <div className="flex flex-col mb-7 md:mb-20 shadow-lg md:mt-6 border-3 pb-7 rounded-lg bg-white">
    <h2 className='text-2xl font-bold pt-7 'data-aos="fade-up">PRODUCTS</h2>
    <h2 className='text-white bg-[#006394] text-center sm:mx-5 md:mx-0'>{searchmessage}</h2>
    <div className='grid md:grid-cols-4 sm:grid-cols-3  items-center w-full px-[1%] md:px-[6%] '>
     
    {searchResult.length > 0 ? searchResult.map((product) => (
      
      <AdminProduct product={product} />
        ))
        :
       products.length > 0 ?  products.map((product) => (
     <AdminProduct product={product} />
       )) : ""
    }
    </div>
    {products.length === 0  ? <div className='bg-[#006394] text-white w-[300px] m-auto' ><h2>No Products found</h2></div>:''}
    </div>
    </section>
    </>
  )
}

export default AdminProducts;