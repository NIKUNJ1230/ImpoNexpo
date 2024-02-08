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
    </div>
  );
};

export default Home;
