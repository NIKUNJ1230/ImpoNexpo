import React from 'react'
import Price_pair from '../../../Components/About_product_details/Price_pair'
import Size from '../../../Components/About_product_details/Size'
import { Link } from 'react-router-dom'

function Full_live_v1_about_product({ isVisible, color }) {
    return  (
        <div className="w-20">
            <div className={`full-live-v2-about-product ${isVisible ? 'visible' : ''}`}>
                <div className="full-live-v2-about-product-title">
                    <h2>About Product</h2>
                </div>
                <div className="full-live-v2-about-product-details">
                    <div className="row">

                        <div className="w-1">
                            <div className="full-live-v2-about-product-details-title">
                                <h3>1. Price</h3>
                                <div className="row">
                                    <div className="w-2">
                                        <span className='mb-10px'>Quantity:</span>
                                    </div>
                                    <div className="w-2">
                                        <span className='mb-10px'>Price/Pair</span>
                                    </div>

                                    <Price_pair pairs={"3000 - 4000 Pairs"} price={"US $ 2.20"} />
                                    <Price_pair pairs={"3000 - 4000 Pairs"} price={"US $ 2.20"} />
                                </div>
                            </div>
                        </div>

                        <div className="w-1">
                            <div className="full-live-v2-about-product-details-title">
                                <h3>2. Color</h3>
                                <div className="full-live-v2-about-product-details-title-img">
                                    <img src={color} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="w-1">
                            <div className="full-live-v2-about-product-details-title">
                                <h3>3. Size:</h3>
                                <div className="row">

                                    <Size size={"35/36#"} price={"US $ 2.20"} index={0} />
                                    <Size size={"35/36#"} price={"US $ 2.20"} index={1} />
                                </div>
                            </div>
                        </div>

                        <div className="w-1">

                            <div className="full-live-v2-about-product-details-title">
                                <h3>4. others:</h3>
                                <div className="row">
                                    <div className="w-2">
                                        <span>Shipping</span>
                                    </div>
                                    <div className="w-2">
                                        <span>US $ 2.20</span>
                                    </div>
                                    <div className="w-2">
                                        <span>Quality Checking</span>
                                    </div>
                                    <div className="w-2">
                                        <span>US $ 2.20</span>
                                    </div>
                                    <div className="w-2">
                                        <span>Customs Clearance</span>
                                    </div>
                                    <div className="w-2">
                                        <span>US $ 2.20</span>
                                    </div>
                                </div>
                                <div className='full-live-v2-about-product-total'>
                                    <div className="row">
                                        <div className="w-2">
                                            <h2>Grand Total:</h2>
                                        </div>
                                        <div className="w-2">
                                            <h2>US $ 2.20</h2>
                                        </div>
                                    </div>

                                    <div className="full-live-v2-about-product-order-now">
                                        <Link to="/live_stream_v1">
                                            Order Now
                                        </Link>
                                    </div>

                                    <p>Not meeting up with the Minimum Order Quantity? Don’t worry, you can:</p>
                                    <Link to="live_stream_v1" className='full-live-v2-about-product-group-import'>Group Import it!</Link>
                                </div>
                            </div>

                        </div>

                    </div>
                    {/* <div className="full-live-v2-about-product-order-now">
                        <Link to="/live_stream_v1">
                            Order Now
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}


export default Full_live_v1_about_product
