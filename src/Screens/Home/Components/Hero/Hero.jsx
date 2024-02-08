import React from "react";
import Slider from "react-slick";
import "./Hero.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import offer1 from "../../../../assets/images/offer.svg";
import offer2 from "../../../../assets/images/offer-2.jpg";
import offer3 from "../../../../assets/images/offer-3.avif";
import list from "../../../../assets/images/list.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleRight,
//   faMagnifyingGlass,
//   faAngleDown,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
import Single_offer from "./Single_offer";
import Single_offerCat from "./Single_offerCat";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };
  return (
    <section className="offer">
      <div className="container">
        <div className="row">
          <div className="w-60">
            <div className="slider-container">
              <Slider {...settings}>
                {/* <div>
                  <div className="offer-img">
                    <img src={offer1} alt="" />
                  </div>
                </div> */}
                <Single_offer img={offer1} />
                <Single_offer img={offer2} />
                <Single_offer img={offer3} />
              </Slider>
              <div className="category">
                <div className="categoty-title">
                  <div className="category-title-img">
                    <img src={list} alt="" />
                  </div>
                  <h3>category</h3>
                </div>
                <div className="categoty-list">
                  <ul>
                    {/* <li>
                      <a href="#">mens clothes</a>
                      <i>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </i>
                    </li> */}
                    <Single_offerCat cat_name={"mens clothes"} />
                    <Single_offerCat cat_name={"womens clothes"} />
                    <Single_offerCat cat_name={"jewellery"} />
                    <Single_offerCat cat_name={"furnitures"} />
                    <Single_offerCat cat_name={"assecories"} />
                    <Single_offerCat cat_name={"makeup"} />
                    <Single_offerCat cat_name={"cars"} />
                    <Single_offerCat cat_name={"cycles"} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-40">
            <div className="offer-right">
              <div className="offer-right-title">
                <h2>
                  <span>Save Time and Energy,</span>
                  <br />
                  Request for Quotation (RFQ) and Get Multiple Quotes Directly
                  to You!
                </h2>
              </div>
              <ul>
                <li>Submit an RFQ in just one minute.</li>
                <li>
                  Get multiple quotations from Verified Imponexpo Exporters.
                </li>
                <li>Compare and choose the best quotation!</li>
              </ul>
              <div className="quatation-form">
                <form action="">
                  <input
                    type="text"
                    placeholder="What are you looking for....."
                  />
                  <input type="text" placeholder="Subject" />
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    placeholder="Please describe the Product "
                  ></textarea>
                  <div className="d-flex align-center justify-between">
                    <input
                      type="text"
                      placeholder="Numerical Quantity | Unit"
                      className="half-input"
                    />
                    <input
                      type="text"
                      placeholder="Shipping to (Country)"
                      className="half-input"
                    />
                  </div>
                  <div className="d-flex align-center justify-between">
                    <input
                      type="text"
                      placeholder="Contact E-mail Address"
                      className="half-input"
                    />
                    <input
                      type="text"
                      placeholder="Contact Phone Number"
                      className="half-input"
                    />
                  </div>
                  <div className="d-flex align-center justify-center">
                    <button type="submit">Request For Quotation</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
