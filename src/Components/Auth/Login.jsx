import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authenticateUser } from "../../redux/eastern-light/reducer/reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLoader } from "react-spinners";
import { faMortarPestle } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { onLogin } from "../api/auth";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { setLoading } from "../../redux/eastern-light/reducer/reducer";

const Login = (props) => {
  const navigate = useNavigate();
 const { isloading } = useSelector ((state => state.auth));
  const [login, setlogin] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setlogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const handleOnsubmit = async (e) => {
    dispatch( setLoading(true));
    e.preventDefault();
    try{
await onLogin(login)
dispatch(authenticateUser())
localStorage.setItem('isAuth',true)
    }
    catch(err){
      console.log(err.response.data.errors[0].msg)
      setError(err.response.data.errors[0].msg)
    }
    dispatch(setLoading(false));
  }

  const { email, password } = login;
  console.log("Is loading.... at Login", isloading)
  return (
    <>
      <div class="flex absolute w-full z-10 items-center justify-center min-h-screen bg-[#F7F8FA]">
        <div class="px-12 py-6 mt-4  bg-white shadow-lg md:w-[35%] sm:w-[90%] rounded-lg text-center">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className=" top-4 left-4 text-[#006394] text-2xl cursor-pointer hover:text-[#f45a56] "
            title="Go back"
            onClick={() => navigate(-1)}
          />
          <Link to="/">
          <div className="flex items-center relative font-bold w-full text-center sm:text-[11px] md:text-[20px] text-[#006394]">
            <p className="font-logo estyle relative ">Eastern</p>
            <div className="relative">
              <FontAwesomeIcon
                className="absolute text-[8px] top-4 left-2 text-white"
                icon={faStethoscope}
              />
              <FontAwesomeIcon
                className="text-[#76A900] top-2 pt-1 text-2xl"
                icon={faMortarPestle}
              />
            </div>
            <p className="text-[#76A900] font-logo"> light</p>
          </div>
          </Link>
          <div class="flex flex-col text-center justify-center gap-6 mt-7">
            <div className="">
              <FontAwesomeIcon icon={faLock} className="text-black text-2xl" />
            <h1 class="font-bold">Admin login</h1>
            </div>
            <form onSubmit={handleOnsubmit} class="flex flex-col gap-6 pb-4 mb-4 w-[100%]">
              <label for="email" data-aos="fade-up">
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  required
                />
                <span>Email</span>
              </label>
              <label for="password" data-aos="fade-up">
              <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={password}
                  required
                />
                <span>Password</span>
              </label>
              <div class="flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={email === "" || password === "" ? " " : "" || isloading}
                  class="bg-[#76A900] text-white rounded-md cursor-pointer text-center "
                >
                 {isloading ?    
                 <div className="flex items-center justify-center">
           <HashLoader color="#76A900" size={20} /> 
        </div> :"LOGIN"} 
                </button>
                <p className="text-red-500 text-center" >{error}</p>
                <p class="text-right text-[#919191]">
                  Forgot password? Contact head adminsters
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
