import React from 'react'
import Deals_menu from '../Deals_menu/Deals_menu'
import deals_1 from "../../../../assets/deals page/deals-1.svg"
import Single_trending_deal from '../Trending_Deals/Single_trending_deal'
function Channel_deals() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="category-deals-title">
                    <li>Deals from Channels</li>
                </div>
                <Deals_menu title={"Deals of the Week"} view={"View All"} />
                <div className="row">
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

export default Channel_deals
