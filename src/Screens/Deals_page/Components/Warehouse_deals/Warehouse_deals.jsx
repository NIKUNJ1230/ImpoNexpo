import React from 'react'
import "./Warehouse_deals.css"
import warehouse_bg from "../../../../assets/deals page/warehouse-bg.svg"
import { Link } from 'react-router-dom'
function Warehouse_deals() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="category-deals-title">
                    <li>Deals from Warehouse</li>
                </div>
                <div className="warehouse-deals">
                    <div className="warehouse-img">
                        <img src={warehouse_bg} alt="" />
                    </div>
                    <div className="warehouse-deals-content">
                        <h3>Promo code: VIOLIFE</h3>
                        <p>Get a free pack of Violife dairy-free cheese! Ends Jan 24.*</p>
                        <div className="warehouse-deals-btn">
                            <Link to="/Deals_page">
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Warehouse_deals
