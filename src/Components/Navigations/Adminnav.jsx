import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons'
const Adminnav = () => {
  return (
    <div className='bg-[#006394] mt-36 py-4 my-6 w-full'>
      <div className='flex items-center gap-4 md:w-[620px] md:text-center m-auto sm:w-[200px] sm:flex-col md:flex-row'>
      <NavLink  className='hover:bg-[#76A900] rounded-lg' to="/dashboard">
      <button className='text-white font-bold text-lg '>
       <div className='flex gap-2 items-center'>
       <FontAwesomeIcon icon={faGauge}/>
        Dashboard
       </div>
        </button>
        </NavLink>
      <NavLink className='hover:bg-[#76A900] rounded-lg' to="/addproducts">
      <button className='text-white font-bold text-lg'>
      <div className='flex gap-2 items-center'>
      <FontAwesomeIcon icon={faCartPlus}/>
        Add Products
        </div>
        </button>
      </NavLink>
      <NavLink className='hover:bg-[#76A900] rounded-lg' to="/addcategory">
      <button className='text-white font-bold text-lg'>
      <div className='flex gap-2 items-center'>
      <FontAwesomeIcon icon={faSquarePlus}/>
        Add Category
        </div>
        </button>
      </NavLink>
      <NavLink className='hover:bg-[#76A900] rounded-lg' to="/adminproducts">
      <button className='text-white font-bold text-lg'>
        <div className='flex gap-2 items-center'>
        <FontAwesomeIcon icon={faCartFlatbed}/>
        Products
        </div>
        </button>
      </NavLink>
      </div>
    </div>
  )
}

export default Adminnav