import React from 'react'
import "./Category_deals.css"
import Deals_menu from '../Deals_menu/Deals_menu'
import cat1 from "../../../../assets/deals page/cat-1.svg"
import cat2 from "../../../../assets/deals page/cat-2.svg"
import cat3 from "../../../../assets/deals page/cat-3.svg"
import cat4 from "../../../../assets/deals page/cat-4.svg"
import cat5 from "../../../../assets/deals page/cat-5.svg"
import cat6 from "../../../../assets/deals page/cat-6.svg"
import cat7 from "../../../../assets/deals page/cat-7.svg"
import cat8 from "../../../../assets/deals page/cat-8.svg"
import cat9 from "../../../../assets/deals page/cat-9.svg"
import cat10 from "../../../../assets/deals page/cat-10.svg"
import cat11 from "../../../../assets/deals page/cat-11.svg"
import cat12 from "../../../../assets/deals page/cat-12.svg"
import { Link } from 'react-router-dom'
import Single_category_deals from './Single_category_deals'
function Category_deals() {
    return (
        <div>
            <div className="container">
                <div className="category-deals-title">
                    <li>Deals from Categories</li>
                </div>
                <Deals_menu title={"More deals"} view={"See less"} />
                <div className="category-deals-images">
                    <div className="row">
                        <Single_category_deals img={cat1} title={"Grocery"}/>
                        <Single_category_deals img={cat2} title={"Clothing, shoes & more"}/>
                        <Single_category_deals img={cat3} title={"Outdoor living"}/>
                        <Single_category_deals img={cat4} title={"Sports & rec"}/>
                        <Single_category_deals img={cat5} title={"Toys"}/>
                        <Single_category_deals img={cat6} title={"Electronics"}/>
                        <Single_category_deals img={cat7} title={"Home"}/>
                        <Single_category_deals img={cat8} title={"Furniture"}/>
                        <Single_category_deals img={cat9} title={"Personal care"}/>
                        <Single_category_deals img={cat10} title={"Beauty"}/>
                        <Single_category_deals img={cat11} title={"Health"}/>
                        <Single_category_deals img={cat12} title={"Household supplies & pantry"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category_deals
