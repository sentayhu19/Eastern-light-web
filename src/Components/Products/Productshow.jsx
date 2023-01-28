import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getproducts } from '../api/auth';
import { fetchproduct } from '../../redux/eastern-light/reducer/reducer';


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
    <section className="text-center mt-36">
    <div className="flex flex-col mb-7 md:mb-20">
    <h2 className='text-2xl font-bold pt-7 'data-aos="fade-up">PRODUCTS</h2>
    <div className='overflow-x w-full'>

    </div>
    </div>
    </section>
  )
}

export default Productshow;