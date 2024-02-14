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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
