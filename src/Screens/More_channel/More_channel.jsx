import React from 'react'
import "./More_channel.css"
import Topbar from "../../Components/Topbar/Topbar"
import Navbar from "../../Components/Navbar/Navbar"
import Trending from "../Home/Components/Trending/Trending"
import Expoters from "../Home/Components/Expoters/Expoters";
import Footer from "../../Components/Footer/Footer"
import Deals from '../Home/Components/Deals/Deals'
import Product_cat from './Components/Product_cat/Product_cat'
function More_channel() {
    return (
        <div className='more-channel'>
            <Topbar />
            <Navbar />
            <Trending title1={"Trending Products"} title2={"ImpoNexpo Channel"} text={"Explore great Products from great Suppliers"} />
            <Trending title1={"New Arrival on"} title2={"ImpoNexpo Channel"} text={""} />
            <Trending title1={"Your Interaction on"} title2={"ImpoNexpo Channel"} text={""} />
            <Expoters />
            <Deals />
            <Trending title1={"in-Stock on"} title2={"ImpoNexpo Channel"} text={""} />
            <Trending title1={"On-going Group-Import"} title2={"ImpoNexpo Channel"} text={""} />
            <Product_cat />
            <Trending title1={"Categories for OEM and ODM"} title2={"ImpoNexpo Channel"} text={""} />
            <Footer />
        </div>
    )
}

export default More_channel
