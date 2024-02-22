import React from "react";
import crown from "../../../../assets/images/crownblack.svg";
import "./Trendingon.css";
import star_black from "../../../../assets/images/star_black.svg";
import Trendingon_tag from "./Trendingon_tag";
import { Link } from "react-router-dom";

function Trendingon() {
  return (
    <div className="trendingon-main-div">
      <div className="trendingon-heading-main">
        <div className="trendingon-heading-div">
          <img src={crown} alt="" className="trendingon-crown" />
          <span className="trendingon">Trending</span>
          #s on Imponexpo
        </div>
      </div>
      <div className="trendingon-tags-main">
        <ul className="trendingon-tags-ui">
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />
          <Trendingon_tag tag={"#Mongbabal"} />

          {/* <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li> */}
        </ul>
      </div>
      <img src={star_black} alt="" className="trendingon-start" />
      <div className="trendingon-btn-div">
        <Link to="/hash_card">
          <button className="trendingon-btn">See All</button>
        </Link>
      </div>
    </div>
  );
}

export default Trendingon;
