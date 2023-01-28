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
    <div className='grid md:grid-cols-4 sm:grid-cols-3  items-center w-full px-[1%] md:px-[6%] '>
    { products.map((product) => (
      <div className='flex items-center  flex-col md:flex-row md:gap-4 sm:gap-1 m-auto sm:w-[90%] md:w-[96%] md:h-[500px] sm:h-[300px] shadow-lg mt-10 md:p-7 sm:p3 hover:border-2 border-[#76A900] rounded-lg' data-aos="fade-up" key={product._id}>
      <div className='flex flex-col md:gap-4 sm:gap-1'>
      <img src={product.image} alt="" className='md:w-[200px] md:h-[200px] sm:w-[250px] sm:h-[100px]  object-cover'/>
      <div className='border-b'>
      <h3 className='text-lg font-bold w-full sm:text-[15px]'>{product.name}</h3>
      <p className='text-lg font-bold w-full sm:text-[13px]'>${product.price}</p>
      </div>
      <p className='sm:text-[13px] md:hidden'>{product.description.slice(0, 20) + "..."}</p>
      <p className='sm:text-[13px] sm:hidden md:flex'>{product.description}</p>
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