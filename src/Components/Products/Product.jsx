import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Product = ({product}) => {
 const navigate = useNavigate();
    const [emulatorName, setEmulatorName] = useState('')
    const [emulatorImage, setEmulatorImage] = useState('')
    const [emulatorDescription, setEmulatorDescription] = useState('')
    const [emulatorPrice, setEmulatorPrice] = useState('')
    const [emulatorCategory, setEmulatorCategory] = useState('')
    const [emulatordescDesk, setEmulatordescDesk] = useState('')

useEffect(() => {
    setTimeout(()=>{
        setEmulatorName(product.name)
        setEmulatorImage(product.image)
        setEmulatorDescription(product.description.slice(0, 20)+"...")
        setEmulatordescDesk(product.description)
        setEmulatorPrice(product.price)
        setEmulatorCategory(product.category)
    },3* 1500)
   
}, [product])

const handleproduct = () => {
  navigate(`/products/${product.name}/${product.id}`)
}


  return (
    <div onClick={handleproduct} className=' relative flex items-center md:justify-center flex-col md:flex-row md:gap-4 sm:gap-1 m-auto sm:w-[90%] md:w-[96%] md:h-[500px] sm:h-[300px] shadow-lg mt-10 md:p-7 sm:p3 hover:border-2 border-[#76A900] rounded-lg' data-aos="fade-up" key={product._id}>

      <div className='flex items-center flex-col md:gap-4 sm:gap-1'>

      {emulatorImage && (  
    <img src={emulatorImage} alt={emulatorImage} className='md:w-[200px] md:h-[200px] sm:w-[250px] sm:h-[100px] hover:scale-110'/>)
    }
    {
        !emulatorImage && (
            <Skeleton count={1} baseColor='red' className="" width={250}  height="200px" alt={emulatorImage} />
        )
    }
      <div className='border-b'>
      <h3 className='font-bold w-full sm:text-[15px]'>
      {emulatorName || (
            <Skeleton className='font-bold w-full sm:text-[15px] sm:w-14' count={1} width={250} baseColor='blue' height="80px" />)} 
      </h3>
      <p className='font-bold w-full sm:text-[13px]'>{
      emulatorPrice || (
        <Skeleton className='font-bold w-full sm:text-[13px]' count={1} width={250} baseColor='green' height="50px" />)}</p>
      </div>
      <p className='sm:text-[13px] md:hidden'>{
      emulatorDescription || (
        <Skeleton className='sm:text-[13px] md:hidden' count={1} width={250} baseColor='purple' height="30px"  />)}</p>
      <p className='sm:text-[13px] sm:hidden md:flex'>{ 
      emulatordescDesk || (
        <Skeleton className='sm:text-[13px] sm:hidden md:flex' count={1} width={250} baseColor='black' height="20px" />)}</p>
      </div>
      </div>
  )
}

export default Product