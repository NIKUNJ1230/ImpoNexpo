import React, { useEffect } from 'react'
import "./Deals_page.css"
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Trending_Deals from "./Components/Trending_Deals/Trending_Deals"

import Footer from '../../Components/Footer/Footer';
import Time_bound_deals from './Components/Time_bound_deals/Time_bound_deals';
import Category_deals from './Components/Category_deals/Category_deals';
import Livestream_deals from "./Components/Livestreams_deals/Livestreams_deals"
import Channel_deals from './Components/Channel_deals/Channel_deals';
import Warehouse_deals from './Components/Warehouse_deals/Warehouse_deals';
import Group_deals from './Components/Group_deals/Group_deals';
import Clearance_deals from './Components/Clearance_deals/Clearance_deals';
import Services_deals from './Components/Services_deals/Services_deals';
import Follow_deals from './Components/Follow_deals/Follow_deals';
import OEM_deals from './Components/OEM_deals/OEM_deals';
function Deals_page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='deals-page'>
      <Topbar />
      <Navbar />
      <Trending_Deals />
      <Time_bound_deals />
      <Category_deals />
      <Livestream_deals />
      <Channel_deals />
      <Warehouse_deals />
      <Group_deals />
      <Clearance_deals />
      <Services_deals />
      <Follow_deals />
      <OEM_deals />
      <Footer />
    </div>
  )
}

export default Deals_page
