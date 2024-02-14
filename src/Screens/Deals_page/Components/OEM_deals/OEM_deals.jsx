import React from 'react'
import "./OEM_deals.css"
import oem_1 from "../../../../assets/deals page/oem-1.svg"
import oem_2 from "../../../../assets/deals page/oem-2.svg"
import oem_3 from "../../../../assets/deals page/oem-3.svg"
import oem_4 from "../../../../assets/deals page/oem-4.svg"
import oem_5 from "../../../../assets/deals page/oem-5.svg"
import oem_6 from "../../../../assets/deals page/oem-6.svg"
import saving_1 from "../../../../assets/deals page/saving-1.svg"
import saving_2 from "../../../../assets/deals page/saving-2.svg"
import saving_3 from "../../../../assets/deals page/saving-3.svg"
import saving_4 from "../../../../assets/deals page/saving-4.svg"
import Single_oem from './Single_oem'
import Single_brand from './Single_brand'
import Single_saving from './Single_saving'
function OEM_deals() {
    return (
        <div>
            <div className="container">
                <div className="category-deals-title">
                    <li>OEM/ODM Deals</li>
                </div>
                <div className="oem-deals">
                    <div className="row">
                        <Single_oem img={oem_1} title={"29 Coupons"} />
                        <Single_oem img={oem_2} title={"26 Coupons"} />
                        <Single_oem img={oem_3} title={"30 Coupons"} />
                        <Single_oem img={oem_4} title={"28 Coupons"} />
                        <Single_oem img={oem_5} title={"23 Coupons"} />
                        <Single_oem img={oem_6} title={"28 Coupons"} />
                    </div>
                </div>

                <div className="container">
                    <div className="brands-deals">
                        <div className="brand-deals-title">
                            <h4>The hottest deals from the most popular brands</h4>
                        </div>
                        <div className="brand-deals-brands">
                            <ul>
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />
                                <Single_brand brand={"MoneyGram"} />

                            </ul>
                        </div>
                    </div>
                    <div className="saving-deals">
                        <div className="saving-deals-title">
                            <h3>Trust us to have the best money-saving deals</h3>
                            <p>Our expert shoppers hand pick the latest online coupons and promo codes</p>
                        </div>
                        <div className="saving-deals-images">
                            <div className="row">
                                <Single_saving img={saving_1} title={"31000 Codes"} text={"added every year"} />
                                <Single_saving img={saving_2} title={"800 Active retailers"} text={"and counting"} />
                                <Single_saving img={saving_3} title={"8000 Vouchers"} text={"added each month"} />
                                <Single_saving img={saving_4} title={"10 Years"} text={"of sharing deals"} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OEM_deals
