import React, { useEffect } from "react";
import userCardlogo from "../../../../assets/images/UserCardSvg.svg";
import locationlogo from "../../../../assets/images/location.svg";
import userfollow from "../../../../assets/images/userfollow.svg";
import usersliderimg from "../../../../assets/images/usercardsliderimg.svg";
import userproimg from "../../../../assets/images/usercard-prooduct-img.svg";
import UsercardProductimg from "./UserProductimg";
import usercardheartlogo from "../../../../assets/images/usercardprologoheart.svg";
import usercardmessgelogo from "../../../../assets/images/usercardpromessgelogo.svg";
import usercardsharelogo from "../../../../assets/images/usercardprosharelogo.svg";
import usercardfilelogo from "../../../../assets/images/usercardprofilelogo.svg";
import "./usercard-product.css";
import Topbar from "../../../../Components/Topbar/Topbar";
import Navbar from "../../../../Components/Navbar/Navbar";
import Footer from "../../../../Components/Footer/Footer";

export default function Usercard() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <>
      <Topbar />
      <Navbar />
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
              <img
                src={usersliderimg}
                alt=""
                className="usercard-containt-sliderimg"
              />
            </div>
            <div className="usercard-product-main-div">
              <div className="usercard-product-header-main">
                <ul className="usercard-header-ul">
                  <li className="usercard-header-li">All</li>
                  <li className="usercard-header-li"> Channels</li>
                  <li className="usercard-header-li"> Livestream </li>
                  <li className="usercard-header-li"> Warehouse </li>
                  <li className="usercard-header-li"> OEM</li>
                </ul>
              </div>
              <div className="usercard-pro-img-main-div">
                <div className="usercard-pro-img-main">
                  <UsercardProductimg img={userproimg} />
                </div>
                <div className="usercard-pro-img-main">
                  <UsercardProductimg img={userproimg} />
                </div>
                <div className="usercard-pro-img-main">
                  <UsercardProductimg img={userproimg} />
                </div>
                <div className="usercard-pro-img-main">
                  <UsercardProductimg img={userproimg} />
                </div>
                <div className="usercard-pro-img-main">
                  <UsercardProductimg img={userproimg} />
                </div>
                <div className="usercard-pro-img-main">
                  <UsercardProductimg img={userproimg} />
                </div>
              </div>
              <div className="usercard-proaftertxt-main">
                <p className="usercard-proaftertxt-main">Load more Products</p>
              </div>
              <div className="usercard-about-product-main">
                <div className="usercard-aboutpro-div">
                  <img
                    src={usercardheartlogo}
                    alt=""
                    className="usercard-aboutpro-img"
                  />
                  <p className="usercard-aboutpro-p">231</p>
                </div>
                <div className="usercard-aboutpro-div">
                  <img
                    src={usercardmessgelogo}
                    alt=""
                    className="usercard-aboutpro-img"
                  />
                  <p className="usercard-aboutpro-p">450</p>
                </div>
                <div className="usercard-aboutpro-div">
                  <img
                    src={usercardsharelogo}
                    alt=""
                    className="usercard-aboutpro-img"
                  />
                  <p className="usercard-aboutpro-p">34</p>
                </div>
                <div className="usercard-aboutpro-div">
                  <img
                    src={usercardfilelogo}
                    alt=""
                    className="usercard-aboutpro-img"
                  />
                  <p className="usercard-aboutpro-p">500</p>
                </div>
              </div>
              <div className="usercard-pro-botttum-btn-main">
                <button className="usercard-pro-botttum-btn-1">Order Now</button>
                <button className="usercard-pro-botttum-btn-2">
                  Group Import
                </button>
              </div>
            </div>
            <div className="usercard-discription-main">
              <p className="usercard-discription-p1">Seller’s Capacity</p>
              <ul className="usercard-discription-ul1">
                <li className="usercard-discription-li">
                  · ODM service available
                </li>
                <li className="usercard-discription-li">
                  · OEM for well-known brands
                </li>
                <li className="usercard-discription-li">
                  {" "}
                  · Finished product inspection
                </li>
                <li className="usercard-discription-li">· Full customization</li>
                <li className="usercard-discription-li">· Patents awarded (6)</li>
              </ul>
              <button className="usercard-discription-last-btn">
                {" "}
                Contact Supplier
              </button>
            </div>
            <div className="usercard-discription-main-2">
              <p className="usercard-discription-p1">Summary on Imponexpo</p>
              <ul className="usercard-discription-ul1">
                <li className="usercard-discription-li">
                  · 1 Year Wih Imponexpo
                </li>
                <li className="usercard-discription-li">
                  · 50 Products Sold on Imponexpo
                </li>
                <li className="usercard-discription-li">
                  · Finished product inspection
                </li>
                <li className="usercard-discription-li">· Full customization</li>
                <li className="usercard-discription-li">· Patents awarded (6)</li>
              </ul>
              <button className="usercard-discription-last-btn-2">
                View profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
