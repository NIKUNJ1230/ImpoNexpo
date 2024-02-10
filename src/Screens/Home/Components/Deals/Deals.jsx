import React from "react";
import Slider from "react-slick";
import "./Deals.css";
import Crown from "../../../../assets/images/headingcrown.png";
import Card from "../../../../Components/Cards/Card/Card";
import Star from "../../../../assets/images/redstar.png";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Deals_category from "./Deals_category";
const Deals = () => {
  return (
    <section>
      <div className="container">
        <div className="deals">
          <div className="deals-title">
            <h2>Trending on Imponexpo Deals ⚡</h2>
            <div className="count-down"></div>
          </div>
          <div className="row">
            <div className="w-30">
              <div className="deals-category-main">
                <div className="deals-category">
                  <h2>Most Popular Deals Categories</h2>
                  <div className="deals-ul">
                    <ul>
                      <Deals_category cat={"Project Management"} />
                      <Deals_category cat={"Video Conferencing"} />
                      <Deals_category cat={"E-Commerce Platforms"} />
                      <Deals_category cat={"Marketing Automationt"} />
                      <Deals_category cat={"Marketing Automation"} />
                      <Deals_category cat={"Accounting"} />
                      <Deals_category cat={"CRM"} />
                      <Deals_category cat={"Expense Management"} />
                      <Deals_category cat={"ERP Systems"} />
                      <Deals_category cat={"Online Backup"} />
                    </ul>
                  </div>
                </div>
                <img src={Star} alt="" className="home__dealsgprods_hstar" />
              </div>
            </div>
            <div className="w-70">
              <div className="row">
                <div className="w-4">
                  <Card />
                </div>
                <div className="w-4">
                  <Card />
                </div>
                <div className="w-4">
                  <Card />
                </div>
                <div className="w-4">
                  <Card />
                </div>
                <div className="w-4">
                  <Card />
                </div>
                <div className="w-4">
                  <Card />
                </div>
                <div className="w-4">
                  <Card />
                </div>
                <div className="w-4">
                  <Card />
                </div>
              </div>
              <div className="home__dealsprods_sourcemorebtn">
                <div className="home__dealsprods_sourcemorebtntxt">
                  Source More Deals
                </div>
                <div className="home__dealsprods_sourcemorebtniconwrap">
                  <DownIcon className="home__dealsprods_sourcemorebtnicon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
