import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGauge } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Adminnav = () => {
  const location = useLocation()
  return (
    <div className='bg-[#006394] mt-36 py-4 my-6 w-full'>
      <div className='flex items-center gap-4 md:w-[710px] md:text-center m-auto sm:w-[200px] sm:flex-col md:flex-row'>
      <NavLink  className='hover:bg-[#76A900] rounded-lg' to="/dashboard" id={location.pathname === "/dashboard" ? 'adminnavbtn': '' }   >
      <button className='text-white font-bold text-lg '>
       <div className='flex gap-2 items-center'>
       <FontAwesomeIcon icon={faGauge}
       />
        Dashboard
       </div>
        </button>
        </NavLink>
      <NavLink className='hover:bg-[#76A900] rounded-lg' to="/addproducts" id={location.pathname === "/addproducts" ? 'adminnavbtn': '' }
      >
      <button className='text-white font-bold text-lg'>
      <div className='flex gap-2 items-center'>
      <FontAwesomeIcon icon={faCartPlus}/>
        Add Products
        </div>
        </button>
      </NavLink>
      <NavLink className='hover:bg-[#76A900] rounded-lg' to="/addcategory" id={location.pathname === "/addcategory" ? 'adminnavbtn': '' }
      >
      <button className='text-white font-bold text-lg'>
      <div className='flex gap-2 items-center'>
      <FontAwesomeIcon icon={faSquarePlus}/>
        Add Category
        </div>
        </button>
      </NavLink>
      <NavLink className='hover:bg-[#76A900] rounded-lg' to="/addunit"  id={location.pathname === "/addunit" ? 'adminnavbtn': ''}>
      <button className='text-white font-bold text-lg'>
        <div className='flex gap-2 items-center'>
        <FontAwesomeIcon icon={faPlus}/>
        Add Units
        </div>
        </button>
      </NavLink>
      <NavLink className='hover:bg-[#76A900] rounded-lg' to="/adminproducts" id={location.pathname === "/adminproducts" ? 'adminnavbtn': '' }
      >
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