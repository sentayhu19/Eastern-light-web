import React, { useState, useEffect } from "react";
import format from "date-fns/format";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto";
import FinancialAnalysis from "./FinancialAnalysis";
import AddProducts from "../Products/AddProducts";
import {
  fetchProtectedInfo,
  getcategories,
  onLogout,
  getproducts,
} from "../api/auth";
import {
  fetchcatagory,
  fetchproduct,
} from "../../redux/eastern-light/reducer/reducer";
import { unauthenticateUser } from "../../redux/eastern-light/reducer/reducer";
import { NavLink } from "react-router-dom";
import Adminnav from "../Navigations/Adminnav";
import { setProtectedData } from "../../redux/eastern-light/reducer/reducer";
import { getmessages } from "../api/auth";
import ErrorAlert from "../Alert/ErrorAlert";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.catagory);
  const { products } = useSelector((state) => state.product);
  const [messages, setmessages] = useState([]);
  const logout = async () => {
    try {
      await onLogout();
      dispatch(unauthenticateUser());
      localStorage.removeItem("isDelta");
    } catch (error) {
      ErrorAlert("Error", "Something went wrong");
    }
  };
  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo();
      dispatch(setProtectedData(data.info));
    } catch (error) {
      logout();
    }
  };
  useEffect(() => {
    protectedInfo();
    const pulldata = async () => {
      getcategories().then((response) => {
        dispatch(fetchcatagory(response.data.category));
      });
      //fetch products to redux
      getproducts().then((response) => {
        dispatch(fetchproduct(response.data.products));
      });
      getmessages().then((response) => {
        setmessages(response.data.messages);
      });
    };
    pulldata();
  }, []);
  setTimeout(() => {
    const ctx = document.getElementById("myChart");
    const categoriesdata = categories.map((item) => item.name);
    //How many products are in each category
    const productsCount = categories.map((item) => {
      let count = 0;
      products.forEach((product) => {
        if (product.category_id === item.id) {
          count++;
        }
      });
      return count;
    });
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: categoriesdata,
        datasets: [
          {
            label: "# of Products",
            data: productsCount,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, 3300);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  let grand=0
  products.map((product) => {
    grand=grand+product.price * product.unit
  })
  function Convert(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



  return (
    <div className="mt-36 w-full h-screen">
      <Adminnav />
      <h2 className="text-center md:text-2xl font-bold">
        Welcome Admin, 
        <span className="text-green">{format(new Date(), "'Today is 'iiii")}</span>
      </h2>
      
      <div className="mt-14 w-[10%] m-auto">
        <NavLink to="/addproducts"></NavLink>
      </div>
      <div>
        <div className=" flex sm:flex-col md:flex-row   w-full ">
          <div className="md:w-[50%] md:mt-14 sm:w-[90%] md:ml-6">
            <canvas id="myChart"></canvas>
          </div>
          <div className="md:w-[60%] sm:relative z-30 md:min-w-[400px]  md:ml-5  ">
            <h2 className="text-center md:text-2xl font-bold mt-10">
              Messages
            </h2>
            {messages.length > 0 ? (
            <div className="h-[60vh] w-full overflow-y-auto overflow-x-hidden">
            <div className="flex relative z-10 flex-col   bg-white sm:w-[90%] m-auto  w-full md:px-20">
              {messages.reverse().map((message) => (
                <div className="flex flex-col w-full border-2  border-gray-300 p-2 mt-2 rounded-lg shadow-lg">
                  <p className="font-bold bg-[#F7F7F7] border-b hover:bg-green-500 hover:text-white ">
                    From: {message.name}
                  </p>
                  <p className="font-bold text-slate-500 width-[50%]">{message.email}</p>
                  <p className="font-bold text-slate-500">{message.phone}</p>
                  <p className="font-bold">{message.message}</p>
                  <p className="font-bold text-slate-500 border-t pt-4">
                    {formatDate(message.created_at)}
                  </p>
                </div>
              ))}
            </div>
          </div>) : 
          <div className="flex flex-col w-[60%] m-auto border-2  border-gray-300 p-2 mt-2 rounded-lg shadow-lg">
          <p className="font-bold bg-[#F7F7F7] border-b hover:bg-red-500 hover:text-white text-center ">
            No Messages yet
          </p>
          </div>
          }
          </div>
        </div>
        {products.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md border-t relative z-30 b">
        <h2 className="text-lg font-medium mb-4 text-center">Financial Analysis</h2>
        <table className="w-full md:w-[80%] m-auto text-left table-collapse">
        <thead>
          <tr className="text-gray-700 font-medium">
            <th className="p-3 bg-gray-100">Brand</th>
            <th className="p-3 bg-gray-100">Name</th>
            <th className="p-3 bg-gray-100">Price</th>
            <th className="p-3 bg-gray-100">Unit</th>
            <th className="p-3 bg-gray-100">Box</th>
            <th className="p-3 bg-gray-100">Price per Unit</th>
            <th className="p-3 bg-gray-100">Price per Box</th>
            <th className="p-3 bg-gray-100">Date created</th>
          </tr>
        </thead>
        <tbody>
        {products.map((product) =>(
          <FinancialAnalysis data={product} />
        )) 
      }
        <td className="bg-gray-300 ">Grand Total</td>
          <tr className="flex ">
            
            <td className=" font-medium p-3 bg-gray-300 w-auto text-white">
              
                <p className="bg-green-700" title="(Grand) Price x Unit">
                  {Convert(grand)} ETB
                </p>
                
               
            </td>
          </tr>
        </tbody>
        </table>
        </div>
        ) : <h2 className="text-center bg-red-600 text-white">No Products for Financial Analysis</h2>}
        
      </div>
      {/* Messages */}
    </div>
  );
};

export default Dashboard;
