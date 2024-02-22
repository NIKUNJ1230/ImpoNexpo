import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/navbarlogo.png";
import Person from "../../assets/icons/person2.svg";
import { Link } from "react-router-dom";
import CountriesDropDown from "../../Screens/Home/Components/CountriesDropDown/CountriesDropDown";
import SearchIcon from "@mui/icons-material/Search";
import NavbarDropDown from "./NavbarDropDown/NavbarDropDown";
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register";

const Navbar = () => {
  return (
    <div className="navbar__wrap">
      <img src={Logo} alt="" className="navbar__brand_logo" />
      <div className="navbar__searches_wrap">
        <div className="navbar__search_item">
          {" "}
          <CountriesDropDown />
        </div>
        <div className="navbar__search_item">
          {" "}
          <NavbarDropDown />
        </div>
        <div className="navbar__search_fieldwrap">
          <input
            type="text"
            className="navbar__search_field"
            placeholder="Got a Product to Source? Imponexpo it here!"
          />
          <SearchIcon className="navbar__search_icon" />
        </div>
      </div>
      <div className="navbar__auth_actions">
        <div className="navbar__auth_actleft">
          <img src={Person} alt="" className="navbar__auth_actlefticon" />
        </div>
        <div className="navbar__auth_actright">
          <button
            type="button"
            className="btn p-0 "
            data-bs-toggle="modal"
            data-bs-target="#signin"
          >
            Sign Up/
          </button>
          <br /> 
          <button
            type="button"
            className="btn p-0"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Sign In
          </button>

          {/* </Link> */}
          {/* <Link to="/login">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
            </button>
          </Link> */}
          {/* <Link to="/Chat">Chat</Link> */}
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <Login />
            </div>
           
          </div>
        </div>
      </div>
      <div
        className="modal fade w-100"
        id="signin"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <Register />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

