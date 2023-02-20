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
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import ErrorAlert from "../Alert/ErrorAlert";

const Nav = ({ activeSection }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [scroll, setScroll] = React.useState(false);
  const [navActive, setNavActive] = React.useState("");
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
  }, [window.pageYOffset]);
  if (activeSection != navActive) {
    setNavActive(activeSection);
  }
  
  const handleClick = async () => {
    //handle logout
    try {
      await onLogout();
      dispatch(unauthenticateUser());
      localStorage.removeItem("isDelta");
      window.location.reload(true);
    } catch (err) {
      ErrorAlert("Error occured while trying to logout");
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
            <nav className="flex w-full items-center md:mx-10 justify-between md:px-14 sm:px-8 sm:my-4 z-30  h-auto  ">
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
                    className={
                      scroll
                        ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]"
                        : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"
                    }
                    id={
                      (navActive === "home" || activeSection === "home") && location.pathname === "/"
                        ? "active"
                        : ""
                    }
                    onClick={() => setNavActive("home")}
                  >
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={
                      scroll
                        ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]"
                        : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"
                    }
                    id={navActive === "products" || (location.pathname === "/" && activeSection ==="products") || location.pathname === "/products" ? "active" : ""}
                    onClick={() => setNavActive("products")}
                  >
                    <FontAwesomeIcon icon={faBox} className="mr-2" />
                    Products
                  </NavLink>
                </li>
                {/* start */}
                {location.pathname === "/" ? (
                  <>
                    <li>
                      <Link
                        to="services"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={
                          scroll
                            ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]"
                            : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"
                        }
                        id={
                          navActive === "Services" ||
                          activeSection === "services"
                            ? "active"
                            : ""
                        }
                        onClick={() => setNavActive("Services")}
                      >
                        <FontAwesomeIcon icon={faGear} className="mr-2" />
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="about"
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className={
                          scroll
                            ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]"
                            : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"
                        }
                        id={
                          navActive === "about" || activeSection === "about"
                            ? "active"
                            : ""
                        }
                        onClick={() => setNavActive("about")}
                      >
                        <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="contact"
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className={
                          scroll
                            ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]"
                            : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"
                        }
                        id={
                          navActive === "contact" || activeSection === "contact"
                            ? "active"
                            : ""
                        }
                        onClick={() => setNavActive("contact")}
                      >
                        <FontAwesomeIcon icon={faMessage} className="mr-2" />
                        Contact us
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to="/#services"
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={
                          scroll
                            ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]"
                            : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"
                        }
                       
                        onClick={() => setNavActive("Services")}
                      >
                        <FontAwesomeIcon icon={faGear} className="mr-2" />
                        Services
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/#about"
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className={
                          scroll
                            ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]"
                            : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"
                        }
    
                        onClick={() => setNavActive("about")}
                      >
                        <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/#contact"
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className={
                          scroll
                            ? "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[8px]"
                            : "hover:hover:text-[#76A900] cursor-pointer hover:border-b-4 hover:pb-[19px]"
                        }
                       
                        onClick={() => setNavActive("contact")}
                      >
                        <FontAwesomeIcon icon={faMessage} className="mr-2" />
                        Contact us
                      </NavLink>
                    </li>
                  </>
                )}

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
              className="flex flex-col mt-20 ml-10 gap-4 text-white items-start  "
              data-aos="fade-up"
            >
              <li className="">
                <NavLink to="/" onClick={toggle}>
                  <div className="flex gap-1 items-center">
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  Home
                  </div>
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/products" onClick={toggle}>
                <div className="flex gap-1 items-center">
                  <FontAwesomeIcon icon={faBox} className="mr-2" />
                  Products
                  </div>
                </NavLink>
                
              </li>
              {location.pathname === "/" ? (
                <>
                  <li className="">
                    <Link smooth={true} onClick={toggle} to="about">
                    <div className="flex gap-1 items-center">
                      <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
                      About
                      </div>
                    </Link>
                  </li>
                  <li className="">
                    <Link smooth={true} onClick={toggle} to="services">
                    <div className="flex gap-1 items-center">
                      <FontAwesomeIcon icon={faGear} className="mr-2" />
                      Services
                      </div>
                    </Link>
                  </li>
                  <li className="">
                    <Link smooth={true} onClick={toggle} to="contact">
                    <div className="flex gap-1 items-center">
                      <FontAwesomeIcon icon={faMessage} className="mr-2" />
                      Contact
                      </div>
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}

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
                    className="bg-[#76A900] text-white sm:w-[92px] p-2 rounded-lg"
                    onClick={toggle}
                  >
                    <NavLink   to="/login"  >
                      <div className="flex gap-1 items-center  text-blue-500">
                      <FontAwesomeIcon icon={faUser} className="mr-2" />
                      Log In 
                      </div>
                      </NavLink>
                      
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
