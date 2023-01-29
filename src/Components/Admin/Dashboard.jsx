import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import AddProducts from '../Products/AddProducts'
import { fetchProtectedInfo } from '../api/auth'
import { onLogout } from '../api/auth'
import { unauthenticateUser } from '../../redux/eastern-light/reducer/reducer'
import { NavLink } from 'react-router-dom'
import Adminnav from '../Navigations/Adminnav'

const Dashboard = () => {
  const dispatch = useDispatch()
  const [protectedData, setProtectedData] = useState(null);

  const logout = async () => {
    try {
      await onLogout()
      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth')
    } catch (error) {
      console.log(error.response)
    }
  }

  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo()

      setProtectedData(data.info)

    } catch (error) {
      logout()
    }
  }

  useEffect(() => {
    protectedInfo()
  }, [])

  return (
    <div className='mt-36 w-full h-screen'>
      <Adminnav />
        <h2 className='text-center md:text-2xl font-bold'>
          Welcome to Admin Dashboard
        </h2>
        <div className='mt-14 w-[10%] m-auto'>
        <NavLink to="/addproducts">
       <button className='bg-[#76A900] text-white rounded-lg' >Add new product</button>

       </NavLink>
       </div>
    </div>
  )
}

export default Dashboard;