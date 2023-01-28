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
    <section className="text-center mt-36 bg-[#F0F1F3]">
    <div className="flex flex-col mb-7 md:mb-20">
    <h2 className='text-2xl font-bold pt-7 'data-aos="fade-up">PRODUCTS</h2>
    <div className='grid md:grid-cols-4  items-center w-full px-[5%] md:px-[6%] '>
    { products.map((product) => (
      <div className='flex items-center justify-center flex-col md:flex-row gap-4 m-auto w-[90%] md:w-[96%] h-[500px] shadow-lg mt-10 p-7 hover:border-2 border-[#76A900] rounded-lg' data-aos="fade-up" key={product._id}>
      <div className='flex flex-col gap-4'>
      <img src={product.image} alt="" className='w-[200px] h-[200px] object-cover'/>
      <div className='border-b'>
      <h3 className='text-lg font-bold w-full'>{product.name}</h3>
      <p className='text-lg font-bold w-full'>${product.price}</p>
      </div>
      <p>{product.description}</p>
      </div>
      </div>
       ))
    }
    </div>
    </div>
    </section>
  )
}

export default Productshow;