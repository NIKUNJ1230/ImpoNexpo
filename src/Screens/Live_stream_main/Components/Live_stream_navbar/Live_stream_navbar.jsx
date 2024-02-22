import React from 'react'
import "./Live_stream_navbar.css"
import Logo from "../../../../assets/Live main/logo white.svg";
import Person from "../../../../assets/Live main/person.svg";
import { Link } from "react-router-dom";
import CountriesDropDown from "../../../../Screens/Home/Components/CountriesDropDown/CountriesDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function Live_stream_navbar() {
    return (
        <div className='live-stream-navbar'>
            <div className="livestream__navbar__wrap">
                <img src={Logo} alt="" className="livestream__navbar__brand_logo" />
                <div className="livestream__navbar__searches_wrap">
                    <div className="livestream__navbar__search_item">
                        <CountriesDropDown />
                    </div>
                    {/* <div className="livestream__navbar__search_item">
                        <NavbarDropDown />
                    </div> */}
                    <div className="livestream__navbar__search_fieldwrap">
                        <input
                            type="text"
                            className="livestream__navbar__search_field"
                            placeholder="Imponexpo it directly from ImpoNexpo Live!"
                        />
                        <SearchIcon className="livestream__navbar__search_icon" />
                    </div>
                </div>

                <div className="d-flex align-center">
                    <div className="livestream__navbar__cart">
                        <div className="livestream__navbar__cart__main">
                            <ShoppingCartOutlinedIcon className='livestream__navbar__cart__icon' />
                            <div className="livestream__navbar__cart__count">
                                2
                            </div>
                        </div>
                    </div>
                    <div className="livestream__navbar__auth_actions">
                        <div className="livestream__navbar__auth_actleft">
                            <img src={Person} alt="" className="livestream__navbar__auth_actlefticon" />
                        </div>
                        <div className="livestream__navbar__auth_actright">
                            <Link to="/register">Sign Up/</Link>
                            <Link to="/login">Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Live_stream_navbar
