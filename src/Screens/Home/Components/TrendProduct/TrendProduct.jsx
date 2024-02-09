import React from "react";
import Slider from "react-slick";
import "./TrendProduct.css";
import Crown from "../../../../assets/images/headingcrown.png";
import Star from "../../../../assets/images/redstar.png";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import live_stream from "../../../../assets/images/live video.svg";
import Card_live from "../../../../Components/Cards/Card_live/Card_live";
const TrendProduct = () => {
  return (
    <section>
      <div className="container">
        <div className="TrendPro">
          <div className="TrendPro-title">
            <h2>
              Trending Products on <br />
              <span>ImpoNexpo Livestreams</span>
            </h2>
            <div className="count-down"></div>
          </div>

          <div className="row">
            <div className="w-40">
              <div className="live-stream">
                <img src={live_stream} alt="" />
              </div>
              <div className="live-text">
                <h4>
                  View More <span>Live Now</span>
                </h4>
              </div>
            </div>
            <div className="w-60">
              <div className="TrendProList">
                <ul>
                  <li>
                    <a href="#">
                      Trending
                      <span>
                        <DownIcon className="home__TrendProprods_sourcemorebtnicon" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Upcoming
                      <span>
                        <DownIcon className="home__TrendProprods_sourcemorebtnicon" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Recent
                      <span>
                        <DownIcon className="home__TrendProprods_sourcemorebtnicon" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row" style={{ marginLeft: "30px" }}>
                <div className="w-3">
                  <Card_live />
                </div>
                <div className="w-3">
                  <Card_live />
                </div>
                <div className="w-3">
                  <Card_live />
                </div>
                <div className="w-3">
                  <Card_live />
                </div>
                <div className="w-3">
                  <Card_live />
                </div>
                <div className="w-3">
                  <Card_live />
                </div>
              </div>
              <div className="home__TrendProprods_sourcemorebtn">
                <div className="home__TrendProprods_sourcemorebtntxt">
                  Source More Deals
                </div>
                <div className="home__TrendProprods_sourcemorebtniconwrap">
                  <DownIcon className="home__TrendProprods_sourcemorebtnicon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendProduct;
