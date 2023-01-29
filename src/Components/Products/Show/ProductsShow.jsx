import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { HashLoader } from "react-spinners";
import { getproductshow} from '../../api/auth';
import { fetchproduct } from '../../../redux/eastern-light/reducer/reducer';
import ProductShow from './ProductShow';


const Productshow = () => {
const dispatch = useDispatch();
  useEffect(() => {
    const pulldata = async () => {
      getproductshow().then(response => {
        dispatch(fetchproduct(response.data.products));
      });
    }
    pulldata();
  }, []);

  

const { products } = useSelector((state) => state.product);
  return (
    <section className="text-center w-full min-h-[200px] bg-[#F0F1F3]">
    <div className="flex flex-col mb-7 md:mb-20">
    <h2 className='text-2xl font-bold pt-7 'data-aos="fade-up">PRODUCTS</h2>
    <div className='grid md:grid-cols-4 sm:grid-cols-3  items-center w-full px-[1%] md:px-[6%] '>
    {products.slice(0, 8).map((product) => (
     <ProductShow product={product} />
       ))
    }
    </div>
    </div>
    {products.length > 0 ? ' ': <div className="flex w-full mt-24 items-center justify-center ">
       <HashLoader className='m-auto' color="#76A900" size={70} />
       </div>}
    </section>
  )
}

export default Productshow;