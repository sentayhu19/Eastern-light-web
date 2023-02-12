import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { unauthenticateUser } from "../../redux/eastern-light/reducer/reducer";
import { onLogout } from "../api/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMortarPestle } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import ErrorAlert from "../Alert/ErrorAlert";

const Nav = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [scroll, setScroll] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = async () => {
    //handle logout
    try {
      await onLogout();
      dispatch(unauthenticateUser());
      localStorage.removeItem("isDelta");
      window.location.reload(true);
    } catch (err) {
      ErrorAlert("Error occured while trying to logout")
    }
  };
  return (
    <>
      <header className="sm:m-0 ">
        <div className="fixed top-0 z-40 w-full bg-white ">
          <div
            className={
              scroll ? " w-full border-b-2 border-gray-200 shadow-md " : ""
            }
          >
            <nav className="flex w-full items-center md:mx-10 justify-between md:px-14 sm:px-8 sm:my-4  z-10  h-auto  ">
              <NavLink to="/">
                <div className="flex items-center relative font-bold  sm:text-[11px] md:text-[20px] text-[#006394]">
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
              </NavLink>
              <button className="sm:hidden">CONTACT US</button>
              <FontAwesomeIcon
                icon={faBars}
                onClick={toggle}
                className="md:hidden text-xl"
                id={isOpen ? "button-hidden" : ""}
              />
              <FontAwesomeIcon
                icon={faXmark}
                onClick={toggle}
                className="md:hidden text-xl"
                id={isOpen ? "" : "button-hidden"}
              />
              <ul className="flex items-center sm:hidden md:flex gap-14 ">
                <li>
                  <NavLink
                    to="/"
                    className={scroll ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]" : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={scroll ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]" : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"}
                  >
                    Products
                  </NavLink>
                </li>
                {/* start */}
                {location.pathname === "/" ?
                  <>
                    <li>
                      <Link
                        to="services"
                        smooth={true}
                        className={scroll ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]" : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="about"
                        smooth={true}
                        className={scroll ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]" : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="contact"
                        smooth={true}
                        className={scroll ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]" : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"}
                      >
                        Contact us
                      </Link>
                    </li>
                  </>
                  : ''
                }

                {/* end */}
                <li>
                  {auth.isAuth ? (
                    <button
                      type="buttom"
                      onClick={handleClick}
                      className="bg-red-400 rounded-md text-white p-2"
                    >
                      Log out
                    </button>
                  ) : (
                    <button className="bg-[#76A900] text-white p-2 rounded-lg">
                      <NavLink to="/login">Log In</NavLink>
                    </button>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/*  nav slide */}
        {isOpen ? (
          <nav
            className="fixed blob-nav overflow-hidden md:hidden top-0 h-screen w-[50%] max-w-[300px] min-w-[150px] bg-[#76A900] z-50 rounded-r-xl"
            id="slide"
            data-aos="flip-left"
          >
            <div className="flex justify-between m-6 text-white">
              <div className="flex items-center text-[11px] text-white">
                <p className="font-logo estyle">Eastern &nbsp; </p>
                <div className="relative">
                  <FontAwesomeIcon
                    className="absolute text-[8px] top-4 left-2 text-[#76A900]"
                    icon={faStethoscope}
                  />
                  <FontAwesomeIcon
                    className="text-white top-2 pt-1 text-2xl"
                    icon={faMortarPestle}
                  />
                </div>
                <p className="font-logo estyle ">&nbsp; light</p>{" "}
              </div>
            </div>
            <ul
              className="flex flex-col m-20 gap-4 text-white items-center "
              data-aos="fade-up"
            >
              <li className="">
                <NavLink to="/" onClick={toggle}>
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/products" onClick={toggle}>
                  Products
                </NavLink>
              </li>
              {location.pathname === "/" ? <>
                <li className="">
                  <Link smooth={true} onClick={toggle} to="about">
                    About
                  </Link>
                </li>
                <li className="">
                  <Link smooth={true} onClick={toggle} to="services">
                    Services
                  </Link>
                </li>
                <li className="">
                  <Link smooth={true} onClick={toggle} to="contact">
                    Contact
                  </Link>
                </li>
              </> : ''}

              <li>
                {auth.isAuth ? (
                  <button
                    type="buttom"
                    onClick={handleClick}
                    className="bg-red-400 rounded-md text-white p-2 w-[80px] text-[12px]"
                  >
                    Log out
                  </button>
                ) : (
                  <button
                    className="bg-[#76A900] text-white p-2 rounded-lg"
                    onClick={toggle}
                  >
                    <NavLink to="/login">Log In</NavLink>
                  </button>
                )}
              </li>
            </ul>
          </nav>
        ) : (
          ""
        )}
      </header>
    </>
  );
};

export default Nav;
