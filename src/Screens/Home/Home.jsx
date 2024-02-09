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
      <CentrixTools />
      <AboutUs />
      <TrendProduct />
      <Personalized />
      <ProCat />
      <Warehouse />
    </div>
  );
};

export default Home;
