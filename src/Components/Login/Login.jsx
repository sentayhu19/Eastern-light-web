import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMortarPestle } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Login = (props) => {
  const navigate = useNavigate();

  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setlogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const { email, password } = login;
  return (
    <>
      <div class="flex items-center justify-center min-h-screen bg-[#F7F8FA]">
        <div class="px-12 py-6 mt-4  bg-white shadow-lg md:w-[35%] sm:w-[90%] rounded-lg text-center">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className=" top-4 left-4 text-[#006394] text-2xl cursor-pointer hover:text-[#f45a56] "
            title="Go back"
            onClick={() => navigate(-1)}
          />
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
          <div class="flex flex-col justify-center gap-6">
            <h1 class="font-bold">Admin login</h1>
            <form class="flex flex-col gap-6 pb-4 mb-4 w-[100%]">
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
                  id="Password"
                  name="Password"
                  onChange={handleChange}
                  value={password}
                  required
                />
                <span>Password</span>
              </label>
              <div class="flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={email === "" || password === "" ? " " : ""}
                  class="bg-[#76A900] text-white rounded-md cursor-pointer"
                >
                  LOGIN
                </button>
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
