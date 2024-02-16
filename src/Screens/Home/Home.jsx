import React from "react";
import "./Home.css";
import Topbar from "../../Components/Topbar/Topbar";
import Navbar from "../../Components/Navbar/Navbar";
import Trending from "./Components/Trending/Trending";
import Hero from "./Components/Hero/Hero";
import Deals from "./Components/Deals/Deals";
import Expoters from "./Components/Expoters/Expoters";
import Trendingon from "./Components/Trendingon/Trendingon";
import CentrixTools from "./Components/CentricTools/CentrixTools";
import AboutUs from "./Components/AboutUs/AboutUs";
import TrendProduct from "./Components/TrendProduct/TrendProduct";
import Personalized from "./Components/Personalized/Personalized";
import Warehouse from "./Components/Warehouse/Warehouse";
import ProCat from "./Components/ProCat/ProCat";
import Region from "./Components/Region/Region";
import Footer from "./Components/Footer/Footer";
import Fetursindex from "../../Components/FeturesFrom/Fetursindex";
import Usercard from "./Components/UserProductCard/Usercard";
import UserProductCard from "./Components/UserProductCard/UserProductCard";
import Deals_page from "../Deals_page/Deals_page";
const Home = () => {
  return (
    <div className="home__screen">
      <Topbar />
      <Navbar />
      <Hero />
      <Trending />
      <Deals />
      <Expoters />
      <Trendingon />
      <TrendProduct />
      <Personalized />
      <ProCat />
      <CentrixTools />
      <AboutUs />
      <Region />
      <Warehouse />
      <Footer />
      <UserProductCard />

      
    </div>
  );
};

export default Home;
