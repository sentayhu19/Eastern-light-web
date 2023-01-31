import React from 'react'
import { NavLink } from 'react-router-dom'
const Adminnav = () => {
  return (
    <div className='bg-[#006394] mt-36 py-4 my-6 w-full'>
      <div className='flex items-center gap-4 md:w-[450px] m-auto sm:w-[200px] sm:flex-col md:flex-row'>
      <NavLink  className='hover:bg-[#76A900] rounded-lg' to="/dashboard">
      <button className='text-white font-bold text-lg'>Dashboard</button>
        </NavLink>
      <NavLink className='hover:bg-[#76A900] rounded-lg' to="/addproducts">
      <button className='text-white font-bold text-lg'>Add Products</button>
      </NavLink>
      <NavLink className='hover:bg-[#76A900] rounded-lg' to="/addcategory">
      <button className='text-white font-bold text-lg'>Add Category</button>
      </NavLink>
      <NavLink className='hover:bg-[#76A900] rounded-lg' to="/adminproducts">
      <button className='text-white font-bold text-lg'>Products</button>
      </NavLink>
      </div>
    </div>
  )
}

export default Adminnav