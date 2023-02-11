import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto";
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

  return (
    <div className="mt-36 w-full h-screen">
      <Adminnav />
      <h2 className="text-center md:text-2xl font-bold">
        Welcome to Admin Dashboard
      </h2>
      <div className="mt-14 w-[10%] m-auto">
        <NavLink to="/addproducts"></NavLink>
      </div>
      <div>
        <div className=" flex sm:flex-col md:flex-row   w-full ">
          <div className="md:w-[50%] md:mt-14 sm:w-[90%] md:ml-6">
            <canvas id="myChart"></canvas>
          </div>
          <div className="md:w-[60%] sm:relative z-50 md:min-w-[400px]  md:ml-5  ">
            <h2 className="text-center md:text-2xl font-bold mt-10">
              Messages
            </h2>
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
          </div>
          </div>
        </div>
      </div>
      {/* Messages */}
    </div>
  );
};

export default Dashboard;
