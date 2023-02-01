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
import Products from '../src/Components/Products/Products'
import Footer from "./Components/Footer";
import AdminProducts from "./Components/Admin/AdminProducts";
import ProductDetails from "./Components/Products/ProductDetails";

const App = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
    Aos.init({ duration: 1400, delay: 150 });
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
          <Nav />
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
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route exact path="/products/:name/:id" element={<ProductDetails />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
};

export default App;
