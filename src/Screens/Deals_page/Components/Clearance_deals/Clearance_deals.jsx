import React from 'react'
import "./Clearance_deals.css"

import Deals_menu from '../Deals_menu/Deals_menu'
import clear_1 from "../../../../assets/deals page/clear-1.svg"
import clear_2 from "../../../../assets/deals page/clear-2.svg"
import clear_3 from "../../../../assets/deals page/clear-3.svg"
import clear_4 from "../../../../assets/deals page/clear-4.svg"
import Single_clearance from './Single_clearance'
function Clearance_deals() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="category-deals-title">
                    <li>Deals from Clearance</li>
                </div>
                <Deals_menu title={"Clearance picks"} view={""} />
                <div className="clearance-deals">
                    <div className="row">
                        <Single_clearance img={clear_1} title={"Holiday clothing & more"}/>
                        <Single_clearance img={clear_2} title={"Toys"}/>
                        <Single_clearance img={clear_3} title={"Sports & rec"}/>
                        <Single_clearance img={clear_4} title={"Clear Out Deals"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clearance_deals
