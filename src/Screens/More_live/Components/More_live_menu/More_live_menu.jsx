import React from 'react'
import "./More_live_menu.css"
import { Link } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";
function More_live_menu() {
    return (
        <div>
            <div className="more-live-menu">
                <div className="container-fluid ">
                    <ul>
                        <li>
                            <Link to="/more_live">all</Link>
                        </li>
                        <li>
                            <Link to="/more_live">Following</Link>
                        </li>
                        <li className='more-live-time'>
                            <Link to="/more_live">Time</Link>
                            <div className="more-live-time-menu">
                                <ul>
                                    <li>
                                        <Link to="/more_live">Last 24 Hours</Link>
                                    </li>
                                    <li>
                                        <Link to="/more_live">Last 24 Hours</Link>
                                    </li>
                                    <li>
                                        <Link to="/more_live">Last 24 Hours</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className='more-live-supplier'>
                            <Link to="/more_live">Supplier</Link>
                            <div className="more-live-supplier-menu">
                                <ul>
                                    <li>
                                        <Link to="/more_live">Wholesalers</Link>
                                    </li>
                                    <li>
                                        <Link to="/more_live">Brands</Link>
                                    </li>
                                    <li>
                                        <Link to="/more_live">Factory</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="/more_live">Category</Link>
                        </li>
                        <li>
                            <Link to="/more_live">Product</Link>
                        </li>
                        <li>
                            <Link to="/more_live">Trending</Link>
                        </li>
                        <li className='more-filter'>
                            <Link to="/more_live">More Filters
                                <FaChevronDown />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default More_live_menu
