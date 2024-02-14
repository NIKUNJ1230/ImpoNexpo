import React from 'react'
import "./Trending_Deals.css"
import { Link } from 'react-router-dom'
import Deals_menu from '../Deals_menu/Deals_menu'
import deals_1 from "../../../../assets/deals page/deals-1.svg"
import Single_trending_deal from './Single_trending_deal'
function Trending_Deals() {
    return (
        <div>
            <div className="container">
                <div className="trending-deals-title">
                    <h2>Trending Deals</h2>
                </div>
                <Deals_menu title={"Weekly flyer features"} view={"View All"} />
                <div className="trending-deals">
                    <div className="row">

                        <Single_trending_deal tag={"Flyer feature"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"}/>
                        <Single_trending_deal tag={"Flyer feature"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"}/>
                        <Single_trending_deal tag={"Flyer feature"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"}/>
                        <Single_trending_deal tag={"Flyer feature"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"}/>
                        <Single_trending_deal tag={"Flyer feature"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"}/>
                        <Single_trending_deal tag={"Flyer feature"} img={deals_1} price={"$6.97"} old_price={"$9.97"} quantity={"$6.97/1kg"} desc={"Maple Leaf Bone-In Chicken Thighs, 12 Thighs, 1.20 - 2.14 kg"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending_Deals
