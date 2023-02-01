import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Chart from 'chart.js/auto';
import AddProducts from '../Products/AddProducts'
import { fetchProtectedInfo, getcategories, onLogout, getproducts } from '../api/auth'
import { fetchcatagory, fetchproduct } from '../../redux/eastern-light/reducer/reducer';
import { unauthenticateUser } from '../../redux/eastern-light/reducer/reducer'
import { NavLink } from 'react-router-dom'
import Adminnav from '../Navigations/Adminnav'
import { setProtectedData } from '../../redux/eastern-light/reducer/reducer'


const Dashboard = () => {
  const dispatch = useDispatch()
  const {categories} = useSelector((state) => state.catagory)
  const {products} = useSelector((state) => state.product)
  const logout = async () => {
    try {
      await onLogout()
      dispatch(unauthenticateUser())
      localStorage.removeItem('isDelta')
    } catch (error) {
      console.log(error.response)
    }
  }
  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo()
      dispatch(setProtectedData(data.info))
    } catch (error) {
      logout()
    }
  }
  useEffect(() => {
    protectedInfo()
    const pulldata = async () => {
      getcategories().then(response => {
        dispatch( fetchcatagory(response.data.category));
      });
      //fetch products to redux 
      getproducts().then(response => {
        dispatch(fetchproduct(response.data.products));
      }
      );
    }
    pulldata();
  }, [])
setTimeout(() => {
  const ctx = document.getElementById('myChart');
const categoriesdata = categories.map((item) => item.name)
//How many products are in each category 
const productsCount = categories.map((item) => {
  let count = 0;
  products.forEach((product) => {
    if(product.category_id === item.id){
      count++;
    }
  })
  return count;
})
console.log("PRODUCTS COUNT",productsCount)
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: categoriesdata,
      datasets: [{
        label: '# of Products',
        data: productsCount,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}, 3000);


  return (
    <div className='mt-36 w-full h-screen'>
      <Adminnav />
        <h2 className='text-center md:text-2xl font-bold'>
          Welcome to Admin Dashboard
        </h2>
        <div className='mt-14 w-[10%] m-auto'>
        <NavLink to="/addproducts">
       </NavLink>

       </div>
       <div>
        <div className=' flex md:w-[65%] sm:w-[90%]  w-full md:mx-20'>
  <canvas id="myChart">
  </canvas>
  </div>
</div>
    </div>
  )
}

export default Dashboard;