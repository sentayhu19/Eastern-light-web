import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { HashLoader } from "react-spinners";
import Home from "./Components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Admin/Dashboard";
import Nav from "./Components/Navigations/Nav";
import AddProducts from "./Components/Products/AddProducts";
import AddCategory from "./Components/Products/AddCategory";
import Products from "../src/Components/Products/Products";
import Footer from "./Components/Footer";
import AdminProducts from "./Components/Admin/AdminProducts";
import ProductDetails from "./Components/Products/ProductDetails";
import NotFound from "./Components/NotFound";

const App = () => {
  const [loading, setloading] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isAuth } = useSelector((state) => state.auth);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
    Aos.init({ duration: 1400, delay: 150 });
    function handleScroll() {
      const home = document.getElementById("home").getBoundingClientRect();
      const about = document.getElementById("about").getBoundingClientRect();
      const services = document.getElementById("services").getBoundingClientRect();
      const contact = document.getElementById("contact").getBoundingClientRect();
      const products = document.getElementById("products").getBoundingClientRect();
      if (contact.top < window.innerHeight / 2) {
        setActiveSection("contact");
      } else if (about.top < window.innerHeight / 2) {
        setActiveSection("about");
        
      }
      else if (services.top < window.innerHeight / 2) {
        setActiveSection("services");
      }
      else if (products.top < window.innerHeight / 2) {
        setActiveSection("products");
      }
      else if (home.top < window.innerHeight / 2) {
        setActiveSection("home");
      }
      else if (services.top < window.innerHeight / 2) {
        setActiveSection("services");
      }
      
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const PrivateRoutes = () => {
    const auth = useSelector((state) => state.auth);

    return <>{auth.isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
  };

  const RestrictedRoutes = () => {
    const auth = useSelector((state) => state.auth);

    return <>{!auth.isAuth ? <Outlet /> : <Navigate to="/dashboard" />}</>;
  };

  return (
    <div className="App">
      {loading ? (
        <div className="flex items-center h-screen justify-center">
          <HashLoader color="#76A900" size={70} />
        </div>
      ) : (
        <Router>
          <Nav activeSection={activeSection} />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addproducts" element={<AddProducts />} />
              <Route path="/addcategory" element={<AddCategory />} />
              <Route path="/adminproducts" element={<AdminProducts />} />
            </Route>
            <Route element={<RestrictedRoutes />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route  path="/" element={<Home activeSection={activeSection} />} />
            <Route path="/products" element={<Products/>} />
            <Route
              exact
              path="/products/:category/:name/:id"
              element={<ProductDetails />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
