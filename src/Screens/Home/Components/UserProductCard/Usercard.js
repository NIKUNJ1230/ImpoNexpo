import React from "react";
import userCardlogo from "../../../../assets/images/UserCardSvg.svg";
import locationlogo from "../../../../assets/images/location.svg";
import userfollow from "../../../../assets/images/userfollow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Usercard() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="usercard-main">
      <div className="usercard-Wrap">
        <div className="usercard-header-main">
          <div className="usercard-headcontant-main">
            <div className="usercard-head-logo">
              <img src={userCardlogo} alt="" className="usercard-head-img" />
            </div>
            <div className="usercard-info-mian">
              <div className="usercard-comp-name">
                <p className="usercard-comp-name-p">
                  Shenzhen Leagend Optoelectronics Co., Ltd.
                </p>
              </div>
              <div className="usercard-username">
                <p className="usercard-username-p">@ShenzhenLeagend </p>
              </div>
            </div>
          </div>
          <div className="usercard-location-main">
            <div className="usercard-location-icon">
              <img
                src={locationlogo}
                alt=""
                className="usercard-location-icon-img"
              />
            </div>
            <div className="usercard-location-text">
              <p className="usercard-location-text-p">China</p>
            </div>
          </div>
          <div className="usercard-follow-main">
            <div className="usercard-follow-img-main">
              <img src={userfollow} alt="" className="usercard-follow-img" />
            </div>
            <div className="usercard-follow-text-main">
              <p className="usercard-follow-text-p">1.2k followers</p>
            </div>
          </div>
        </div>
        <div className="usercard-containt-main">
          <div className="usercard-containt-slider">
            <Slider {...settings}>
                
            </Slider>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
