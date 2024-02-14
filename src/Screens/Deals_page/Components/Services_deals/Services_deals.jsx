import React from 'react'
import "./Services_deals.css"
import service from "../../../../assets/deals page/services-deals.svg"
function Services_deals() {
    return (
        <div>
            <div className="container">
                <div className="category-deals-title">
                    <li>Free Services Deals</li>
                </div>
                <div className="services_deals">
                    <div className="services-deals-img">
                        <img src={service} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services_deals
