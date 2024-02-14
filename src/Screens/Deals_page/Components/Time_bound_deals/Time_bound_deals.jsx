import React from 'react'
import "./Time_bound_deals.css"
import { Link } from 'react-router-dom'
import Deals_menu from '../Deals_menu/Deals_menu'
import deals_1 from "../../../../assets/deals page/deals-1.svg"
import Single_trending_deal from '../Trending_Deals/Single_trending_deal'
function Time_bound_deals() {
    return (
        <div>
            <div className="container">
                <div className="time-bound-title">
                    <h2>time-bound deals</h2>
                </div>
                <div className="time-bound-menu">
                    <ul>
                        <li>
                            <Link to="/Deals_page">all</Link>
                        </li>
                        <li>
                            <Link to="/Deals_page">today's</Link>
                        </li>
                        <li>
                            <Link to="/Deals_page">weekly</Link>
                        </li>
                        <li>
                            <Link to="/Deals_page">monthly</Link>
                        </li>
                        <li>
                            <Link to="/Deals_page">seasonal</Link>
                        </li>
                        <li>
                            <Link to="/Deals_page">upcoming</Link>
                        </li>
                    </ul>
                </div>

                <Deals_menu title={"Deals of the Week"} view={"View All"} />
                <div className="row border-under">
                    <Single_trending_deal tag={"Reduced price"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"} />
                    <Single_trending_deal tag={"Reduced price"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"} />
                    <Single_trending_deal tag={"Reduced price"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"} />
                    <Single_trending_deal tag={"Reduced price"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"} />
                    <Single_trending_deal tag={"Reduced price"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"} />
                    <Single_trending_deal tag={"Reduced price"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"} />
                </div>

            </div>
        </div>
    )
}

export default Time_bound_deals
