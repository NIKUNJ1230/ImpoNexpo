import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Testimonial from "./Screens/Testimonials/Testimonial.jsx";
import Welcome from "./Screens/Auth/Welcome";
import Login from "./Screens/Auth/Login";
import ForgotPassword from "./Screens/Auth/ForgotPassword";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { userLoggedIn } from "./store/user/userSlice";
import { ToastContainer } from "react-toastify";
import PublicRoute from "./routes/PublicRoutes";
import ProtectedRoute from "./routes/ProtectedRoutes";
import NewPassword from "./Screens/Auth/NewPassword";
import Register from "./Screens/Auth/Register";
import Chats from "./Components/Chats/Chats";
import Testimonial_Full from "./Screens/Testimonial_Full/Testimonial_Full";
import Search_page from "./Screens/Search_page/Search_page";
import More_channel from "./Screens/More_channel/More_channel";
import Deals_page from "./Screens/Deals_page/Deals_page";
import Categories_page from "./Screens/Categories_page/Categories_page";
import ProductHome from "./Components/aboute products/components/Home";
import Layout from "./Components/aboute products/components/Layout";
import ProductDetails from "./Components/aboute products/components/ProductDetails";
import ShoppingCart from "./Components/aboute products/components/ShoppingCart";
import AddedServices from "./Components/aboute products/components/ShoppingCart/AddedServices";
import Payment from "./Components/aboute products/components/ShoppingCart/Payment";
import QuoteResult from "./Components/aboute products/components/QuoteResult";
import OrderSuccess from "./Components/aboute products/components/ShoppingCart/OrderSuccess";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      dispatch(userLoggedIn(user?.token));
    }
  }, [dispatch]);
  console.log(process.env.REACT_APP_BASE_URL);
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route
            path="/welcome"
            element={
              <PublicRoute>
                <Welcome />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route path="/new-password/:token" element={<NewPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Testimonial_Full" element={<Testimonial_Full />} />
          <Route path="/Search_page" element={<Search_page />} />
          <Route path="/More_channel" element={<More_channel />} />
          <Route path="/Deals_page" element={<Deals_page />} />
          <Route path="/Category_page" element={<Categories_page />} />

          <Route path="/" element={<Home />} />
          <Route path="/testimonial" element={<Testimonial />} />
          {/* Example of a role-protected route */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                {/* <AdminDashboard /> */}
              </ProtectedRoute>
            }
          />
          <Route exact path="/Chat" element={<Chats />}></Route>
          <Route path="/ProductHome" exact element={<Layout isShowSidebar><ProductHome /></Layout>} />
          <Route path="/product-details/:id" exact element={<Layout><ProductDetails /></Layout>} />
          <Route path="/cart" exact element={<Layout><ShoppingCart /></Layout>} />
          <Route path="/added-services" exact element={<Layout><AddedServices /></Layout>} />
          <Route path="/payment" exact element={<Layout><Payment /></Layout>} />
          <Route path="/order-success" exact element={<Layout><OrderSuccess /></Layout>} />
          <Route path="/quote-result" exact element={<QuoteResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
