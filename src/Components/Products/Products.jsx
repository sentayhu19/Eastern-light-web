import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getproducts } from '../api/auth';
import { fetchproduct } from '../../redux/eastern-light/reducer/reducer';
import { getcategories } from '../api/auth';
import { fetchcatagory } from '../../redux/eastern-light/reducer/reducer';
import Product from './Product';
import { getsearchbycat } from '../api/auth';


const Productshow = () => {
  const [categorySearch, setcategorySearch] = useState({category_id: ""});
  const [productSearch, setproductSearch ] = useState("");
const dispatch = useDispatch();
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
const handleSelectChange =  (selectedOption) => {
  if (selectedOption) {
    const value = selectedOption;
    const category = 'category_id';
    setcategorySearch({[category]: value.id});

    getsearchbycat(categorySearch).then(response => {
      dispatch( fetchproduct(response.data.products));
    });
  }
}
const handleChange = () =>{

}

  const { categories } = useSelector((state) => state.catagory);
  
const { products } = useSelector((state) => state.product);
console.log("Caegory Seleced ID", categorySearch);
  return (
    <section className="flex md:flex-row sm:flex-col text-center mt-20 bg-[#F0F1F3]" name="products"  id='products'>
      <div className='flex flex-col gap-5 md:w-[30%] md:h-screen m-5 border-3 p-4 shadow-lg rounded-lg'>
    <Select
          options={categories}
          getOptionLabel={option => option.name}
          getOptionValue={option => option.id}
          name="category"
          value={categorySearch}
          onChange={handleSelectChange}
          placeholder="Category"
        />
        <form className='md:w-[274px] border-none p-0 sm:w-full'>
        <label for="key" data-aos="fade-up">
        <input
          type="text"
          id="key"
          name="key"
          onChange={handleChange}
          value={productSearch}
          required
          placeholder="Search by product name"
        />
        <span>Search product </span>
      </label>
      <button
        type="submit"
        className="bg-[#76A900] text-white rounded-lg md:w-36 md:h-12"
      >
        Search
      </button>
        </form>
      </div>
    <div className="flex flex-col mb-7 md:mb-20 shadow-lg md:mt-6 border-3 pb-7 rounded-lg">
    <h2 className='text-2xl font-bold pt-7 'data-aos="fade-up">PRODUCTS</h2>
    <div className='grid md:grid-cols-4 sm:grid-cols-3  items-center w-full px-[1%] md:px-[6%] '>
    { products.map((product) => (
      
     <Product product={product} />
       ))
    }
    </div>
    </div>
    </section>
  )
}

export default Productshow;