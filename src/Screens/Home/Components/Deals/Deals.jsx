import React from "react";
import Slider from "react-slick";
import "./Deals.css";
import Crown from "../../../../assets/images/headingcrown.png";
import Card from "../../../../Components/Cards/Card/Card";
import Star from "../../../../assets/images/redstar.png";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
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
                      <li>
                        <a href="#">Project Management</a>
                      </li>
                      <li>
                        <a href="#">Video Conferencing</a>
                      </li>
                      <li>
                        <a href="#">E-Commerce Platforms</a>
                      </li>
                      <li>
                        <a href="#">Marketing Automation</a>
                      </li>
                      <li>
                        <a href="#">Accounting</a>
                      </li>
                      <li>
                        <a href="#">CRM</a>
                      </li>
                      <li>
                        <a href="#">Expense Management</a>
                      </li>
                      <li>
                        <a href="#">ERP Systems</a>
                      </li>
                      <li>
                        <a href="#">Online Backup</a>
                      </li>
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
