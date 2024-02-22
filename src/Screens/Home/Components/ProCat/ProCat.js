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
import Left_rect_cat from "./Left_rect_cat";
import Pro_cat_slider from "./Pro_cat_slider";
import { Link } from "react-router-dom";
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

        <div className="procat-main">
          <div className="procategory">
            <div className="row">
              <div className="w-5">
                <div className="left-rect">
                  <div className="left-rect-title">
                    <h4>apparel</h4>
                  </div>
                  <ul>
                    <Left_rect_cat cat={"Deals"} />
                    <Left_rect_cat cat={"On-Going Group Import"} />
                    <Left_rect_cat cat={"Top Sales"} />
                    <Left_rect_cat cat={"Top Products"} />
                    <Left_rect_cat cat={"Latest Deals"} />
                    <Left_rect_cat cat={"Cheap Prices"} />
                    <Left_rect_cat cat={"Ready To Ship"} />
                  </ul>
                </div>
              </div>
              <div className="w-30">
                <div className="procat-slider">
                  <Slider {...settings}>
                    <Pro_cat_slider src={slider_img1} />
                    <Pro_cat_slider src={slider_img1} />
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
                    <Single_procat
                      img={pro_cat_img}
                      text={"Women’s Clothing"}
                    />
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
                     <Link to="/category_page"> <DownIcon className="home__procatprods_sourcemorebtnicon text-white" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="procategory">
            <div className="row">
              <div className="w-5">
                <div className="left-rect">
                  <div className="left-rect-title">
                    <h4>consumer electronics</h4>
                  </div>
                  <ul>
                    <Left_rect_cat cat={"Deals"} />
                    <Left_rect_cat cat={"On-Going Group Import"} />
                    <Left_rect_cat cat={"Top Sales"} />
                    <Left_rect_cat cat={"Top Products"} />
                    <Left_rect_cat cat={"Latest Deals"} />
                    <Left_rect_cat cat={"Cheap Prices"} />
                    <Left_rect_cat cat={"Ready To Ship"} />
                  </ul>
                </div>
              </div>
              <div className="w-30">
                <div className="procat-slider">
                  <Slider {...settings}>
                    <Pro_cat_slider src={slider_img1} />
                    <Pro_cat_slider src={slider_img1} />
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
                    <Single_procat
                      img={pro_cat_img}
                      text={"Women’s Clothing"}
                    />
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
                      <Link to="/category_page"> <DownIcon className="home__procatprods_sourcemorebtnicon text-white" /></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="explore-more-cat">
            <Link to="/Category_page">What are you looking for.....</Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProCat;
