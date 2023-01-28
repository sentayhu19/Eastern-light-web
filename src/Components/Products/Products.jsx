import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getproducts } from '../api/auth';
import { fetchproduct } from '../../redux/eastern-light/reducer/reducer';
import Product from './Product';


const Productshow = () => {
const dispatch = useDispatch();
  useEffect(() => {
    const pulldata = async () => {
      getproducts().then(response => {
        dispatch(fetchproduct(response.data.products));
      });
    }
    pulldata();
  }, []);
const { products } = useSelector((state) => state.product);

  return (
    <section className="text-center mt-36 bg-[#F0F1F3]">
    <div className="flex flex-col mb-7 md:mb-20">
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