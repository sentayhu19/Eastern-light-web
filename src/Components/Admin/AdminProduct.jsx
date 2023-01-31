import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import 'react-loading-skeleton/dist/skeleton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteproduct } from '../api/auth'
import Select from 'react-select';

const AdminProduct = ({product}) => {
    const [emulatorName, setEmulatorName] = useState('')
    const [emulatorImage, setEmulatorImage] = useState('')
    const [emulatorDescription, setEmulatorDescription] = useState('')
    const [emulatorPrice, setEmulatorPrice] = useState('')
    const [emulatorCategory, setEmulatorCategory] = useState('')
    const [emulatordescDesk, setEmulatordescDesk] = useState('')
    const [deletedproduct, setdeletedproduct] = useState({id: ""});

    const [deleteToggle, setdeleteToggle] =  useState(false);
    const [editToggle, seteditToggle] =  useState(false);
    const [editproduct, seteditproduct] = useState({id: "", name: "", description: "", price: "", category: "", image: ""});

    const { protectedData } = useSelector((state) => state.auth);
    const { categories } = useSelector((state) => state.catagory);
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

const handledeletetoggle= () => { 
  setdeletedproduct({["id"]: product.id})
  setdeleteToggle(!deleteToggle)
};

const handleeditToggle = () => {
  seteditproduct({["id"]: product.id, ["name"]: product.name, ["description"]: product.description, ["price"]: product.price, ["category"]: product.category, ["image"]: product.image})
  seteditToggle(!editToggle)
}

const handledelete = async () => {
 await deleteproduct(deletedproduct)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
}
const handleedit = async () => {
  
}


  return (
    <>
    <div className='relative flex items-center md:justify-center flex-col md:gap-4 sm:gap-1 m-auto sm:w-[90%] md:w-[96%] md:h-[500px] sm:h-[300px] shadow-lg mt-10 md:p-7 sm:p3 hover:border-2 border-[#76A900] rounded-lg' data-aos="fade-up" key={product._id}>
      <div className='flex items-center flex-col md:gap-4 sm:gap-1'>
      {emulatorImage && (  
    <img src={emulatorImage} alt={emulatorImage} className='md:w-[200px] md:h-[200px] sm:w-[250px] sm:h-[100px]  object-cover'/>)
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
      
      <div className='flex flex-col gap-2'>
      <button className='bg-[#76A900] text-white rounded-lg p-1' onClick={handleeditToggle} >Edit</button>
      <button onClick={handledeletetoggle} className='bg-red-500 text-white rounded-lg p-1' >Delete</button>
      </div>
      {deleteToggle ? 
      <div className='absolute z-20 flex flex-col gap-10 top-7 w-full h-[450px] bg-white'>
        
        <div className='flex flex-col pt-7 rounded-lg gap-7 bg-[#F0F1F3]'>
          <p className='border-b pb-5'>Are you sure you want to delete {product.name} ?</p>
          <button className='bg-red-500 text-white rounded-lg p-1 hover:bg-white hover:text-red-500' onClick={handledelete} id={product.id}>Delete</button>
          <button className='bg-[#76A900] text-white rounded-lg p-1 hover:bg-white hover:text-[#76A900]' onClick={handledeletetoggle}>Cancel</button>
        </div>
      </div> : ""}
      
      </div>
      {editToggle ?
      <div className='fixed top-0 left-0 z-40 w-full h-full overflow-x-hidden overflow-y-hidden bg-[#7e7e81] opacity-90 '>
        <div className='fixed flex flex-col p-4 sm:left-3 sm:w-[95%] rounded-lg gap-7 md:w-[70%] md:left-[30%] max-w-[650px]  items-center justify-center bg-white'>
          <h2 className='border-b pb-5 text-xl'>Edit {product.name} ?</h2>
          <form className='relative flex flex-col gap-3 overflow-y-auto h-auto overflow-x-hidden md:w-[600px] m-auto'>
            <label className='border-none text-left'>Name</label>
            <input type="text" className='border-2 border-[#76A900] rounded-lg p-2' placeholder='Name' value={editproduct.name} onChange={(e) => seteditproduct({...editproduct, name: e.target.value})}/>
            <label className='border-none text-left'>Description</label>
            <input type="text" className='border-2 border-[#76A900] rounded-lg p-2' placeholder='Description' value={editproduct.description} onChange={(e) => seteditproduct({...editproduct, description: e.target.value})}/>
            <label className='border-none text-left'>Price</label>
            <input type="text" className='border-2 border-[#76A900] rounded-lg p-2' placeholder='Price' value={editproduct.price} onChange={(e) => seteditproduct({...editproduct, price: e.target.value})}/>
            <label className='border-none text-left'>Category</label>
            <input type="text" className='border-2 border-[#76A900] rounded-lg p-2' placeholder='Category' value={editproduct.category} onChange={(e) => seteditproduct({...editproduct, category: e.target.value})}/>
            <Select
                options={categories}
                 getOptionLabel={option => option.name}
                 getOptionValue={option => option.id}
                 name="category"
                 value={editproduct.category}
                 onChange={(e) => seteditproduct({...editproduct, category: e.target.value})}
                 placeholder="Category"
            />
            <input type="text" className='border-2 border-[#76A900] rounded-lg p-2' placeholder='Image' value={editproduct.image} onChange={(e) => seteditproduct({...editproduct, image: e.target.value})}/>
            <button className='bg-[#76A900] text-white rounded-lg p-1 hover:bg-white hover:text-[#76A900]' onClick={handleeditToggle}>Cancel</button>
            <button className='bg-red-500 text-white rounded-lg p-1 hover:bg-white hover:text-red-500' onClick={handleedit}>Edit</button>
            </form>
      </div>
      </div>
  
      
      : "" }
      </>
  )
}

export default AdminProduct