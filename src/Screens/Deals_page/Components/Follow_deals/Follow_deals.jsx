import React from 'react'
import "./Follow_deals.css"
import follow_1 from "../../../../assets/deals page/follow-1.svg"
import follow_2 from "../../../../assets/deals page/follow-2.svg"
import follow_3 from "../../../../assets/deals page/follow-3.svg"
import { Link } from 'react-router-dom'
import Single_follow from './Single_follow'
function Follow_deals() {
    return (
        <div>
            <div className="container">
                <div className="follow-deals-title">
                    <h2>Deals from Accounts you follow</h2>
                </div>
                <div className="follow-deals">
                    <div className="row">

                        <Single_follow img={follow_1} title={"Save with a $45 bonus"} text={"Offer available until Jan 31, 2024. Conditions apply."} btn={"Apply now"}/>
                        <Single_follow img={follow_2} title={"Order with Walmart Now"} text={"Get groceries in as little as 30 minutes. Conditions apply."} btn={"Shop"}/>
                        <Single_follow img={follow_3} title={"Mobile Check-in on app"} text={"Pick up your groceries & more faves in a snap!"} btn={"Learn more"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Follow_deals
