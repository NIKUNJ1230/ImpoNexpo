import React from 'react'
import { Link } from 'react-router-dom'
function Single_trending_deal({ tag, img, price, old_price, quantity, desc, }) {
    return (
        <div className="w-6">
            <div className="single-trending-deals">
                <div className="single-trending-deals-tag">
                    <span>{tag}</span>
                </div>
                <div className="single-trending-deals-img">
                    <img src={img} alt="" />
                </div>
                <div className="trending-deals-btn">
                    <Link to="/Deals_page">Add</Link>
                </div>
                <div className="trending-deals-prices">
                    <h4>{price}</h4>
                    <h5 className='trending-deals-old-price'>
                        {old_price}
                    </h5>
                    <h5 className='trending-deals-quantity'>
                        {quantity}
                    </h5>
                </div>
                <div className="trending-deals-desc">
                    <p>{desc}</p>
                </div>
                <div className="trending-deals-pickup-delivery">
                    <Link to='/Deals_page'>Pickup</Link>
                    <Link to='/Deals_page'>Delivery</Link>
                </div>
            </div>
        </div>
    )
}

export default Single_trending_deal
