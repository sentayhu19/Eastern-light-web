import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getproducts } from '../api/auth';


const Productshow = () => {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproducts());
  }, []);

  // const products = useSelector((state) => state.products);
  // console.log("Product respose: ",products);

  return (
    <section className="text-center m-2">
    <div className="flex flex-col mb-7 md:mb-20">
    <h2 className='text-2xl font-bold pt-7 'data-aos="fade-up">PRODUCTS</h2>
    <div className='overflow-x w-full'>

    </div>
    </div>
    </section>
  )
}

export default Productshow;