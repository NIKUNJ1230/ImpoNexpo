import React from "react";
import "./ProCat.css";
import slider_img1 from "../../../../assets/images/procat-slider.svg";
import pro_cat_img from "../../../../assets/images/procat-img.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Single_procat from "./Single_procat";
import Single_mention from "./Single_mention";
import Single_hash from "./single_hash";
import DownIcon from "@mui/icons-material/KeyboardArrowRightRounded";
function ProCat() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };
  return (
    <section>
      <div className="procat-title">
        <h2>
          Products Category on <span>ImpoNaxpo</span>
        </h2>
        <p>Get an amazing discount on great Products</p>
      </div>
      <div className="container">
        <div className="procategory">
          <div className="row">
            <div className="w-5">
              <div className="left-rect">
                <div className="left-rect-title">
                  <h4>apparel</h4>
                </div>
                <ul>
                  <li>
                    <a href="#">Deals</a>
                  </li>
                  <li>
                    <a href="#">On-Going Group Import</a>
                  </li>
                  <li>
                    <a href="#">Top Sales</a>
                  </li>
                  <li>
                    <a href="#">Top Products</a>
                  </li>
                  <li>
                    <a href="#">Latest Deals</a>
                  </li>
                  <li>
                    <a href="#">Cheap Prices</a>
                  </li>
                  <li>
                    <a href="#">Ready To Ship</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-30">
              <div className="procat-slider">
                <Slider {...settings}>
                  <div className="slider-img">
                    <img src={slider_img1} alt="" />
                  </div>
                  <div className="slider-img">
                    <img src={slider_img1} alt="" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="w-30">
              <div className="procat-img">
                <div className="row">
                  {/* <div className="w-2">
                    <div className="single-procat">
                      <div className="single-procat-img">
                        <img src={pro_cat_img} alt="" />
                      </div>
                      <div className="single-procat-title">
                        <p>Garment & rocessing Accessories</p>
                      </div>
                    </div>
                  </div> */}
                  <Single_procat
                    img={pro_cat_img}
                    text={"Garment & rocessing Accessories"}
                  />
                  <Single_procat
                    img={pro_cat_img}
                    text={"Infants & Toddlers Clothing"}
                  />
                  <Single_procat img={pro_cat_img} text={"Men’s Clothing"} />
                  <Single_procat img={pro_cat_img} text={"Women’s Clothing"} />
                  <Single_procat
                    img={pro_cat_img}
                    text={"Children’s Clothing"}
                  />
                  <Single_procat img={pro_cat_img} text={""} />
                </div>
              </div>
            </div>
            <div className="w-5">
              <div className="right-rect">
                <div className="mention">
                  <ul>
                    <Single_mention tag={"@imponexpo"} />
                    <Single_mention tag={"@Dangot"} />
                    <Single_mention tag={"@Mong"} />
                    <Single_mention tag={"@imponexpo"} />
                    <Single_mention tag={"@Mongbabal"} />
                    <Single_mention tag={"@imponexpo"} />
                    <Single_mention tag={"@Dangot"} />
                    <Single_mention tag={"@Mong"} />
                    <Single_mention tag={"@imponexpo"} />
                    <Single_mention tag={"@Mongbabal"} />
                    <Single_mention tag={"@Dangot"} />
                    <Single_mention tag={"@Mong"} />
                    <Single_mention tag={"@imponexpo"} />
                    <Single_mention tag={"@Mongbabal"} />
                    <Single_mention tag={"@imponexpo"} />
                    <Single_mention tag={"@Dangot"} />
                  </ul>
                </div>
                <div className="hashtag">
                  <h5>Suggested Tags</h5>
                  <ul>
                    <Single_hash hash={"#imponexpo"} />
                    <Single_hash hash={"#Dangot"} />
                    <Single_hash hash={"#Mong"} />
                    <Single_hash hash={"#imponexpo"} />
                    <Single_hash hash={"#Mongbabal"} />
                    <Single_hash hash={"#imponexpo"} />
                    <Single_hash hash={"#Dangot"} />
                    <Single_hash hash={"#Mong"} />
                    <Single_hash hash={"#imponexpo"} />
                    <Single_hash hash={"#Mongbabal"} />
                    <Single_hash hash={"#Dangot"} />
                    <Single_hash hash={"#Mong"} />
                    <Single_hash hash={"#imponexpo"} />
                    <Single_hash hash={"#Mongbabal"} />
                    <Single_hash hash={"#imponexpo"} />
                    <Single_hash hash={"#Dangot"} />
                  </ul>
                </div>
                <div className="home__procatprods_sourcemorebtn">
                  <div className="home__procatprods_sourcemorebtntxt">
                    Source Now
                  </div>
                  <div className="home__procatprods_sourcemorebtniconwrap">
                    <DownIcon className="home__procatprods_sourcemorebtnicon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProCat;
