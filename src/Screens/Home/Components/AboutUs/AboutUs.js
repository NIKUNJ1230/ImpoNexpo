import React from "react";
import "./AboutUs.css";
import userfirtst from "../../../../assets/images/aboutus1.svg";
import usersecond from "../../../../assets/images/aboutus2.svg";
import usertherd from "../../../../assets/images/aboutus3.svg";
import starone from "../../../../assets/images/retting stars.svg";
import starsecond from "../../../../assets/images/retting stars2.svg";
import Slider from "react-slick";
import About_slider from "./About_slider";
import star_red from "../../../../assets/images/star_red.svg"

// import impoone from "../../../../assets/images/importer-1.svg";

function AboutUs() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  //   return (
  //     <Slider {...settings}>
  //       <div>
  //         <h3>1</h3>
  //       </div>
  //       <div>
  //         <h3>2</h3>
  //       </div>
  //       <div>
  //         <h3>3</h3>
  //       </div>
  //       <div>
  //         <h3>4</h3>
  //       </div>
  //       <div>
  //         <h3>5</h3>
  //       </div>
  //       <div>
  //         <h3>6</h3>
  //       </div>
  //     </Slider>
  //   );

  return (
    <div className="about-us">
      <div className="aboutus-heading-div">
        What are People and Business {""} <br />
        <span className="aboutus-head-span">saying about us?</span>
      </div>
      <Slider {...settings}>
        <div className="aboutus-slider-main">
          <About_slider src={userfirtst} star={starone} name={"Floyd Miles"} review={" Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet."}/>
          <About_slider src={userfirtst} star={starone} name={"Floyd Miles"} review={" Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet."}/>
          <About_slider src={userfirtst} star={starone} name={"Floyd Miles"} review={" Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet."}/>
        </div>

        <div className="aboutus-slider-main">
          <About_slider src={usersecond} star={starsecond} name={"Floyd Miles"} review={" Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet."}/>
          <About_slider src={usersecond} star={starsecond} name={"Floyd Miles"} review={" Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet."}/>
          <About_slider src={usersecond} star={starsecond} name={"Floyd Miles"} review={" Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet."}/>
        </div>
        
        <div className="aboutus-slider-main">
          <About_slider src={usertherd} star={starone} name={"Floyd Miles"} review={" Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet."}/>
          <About_slider src={usertherd} star={starone} name={"Floyd Miles"} review={" Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet."}/>
          <About_slider src={usertherd} star={starone} name={"Floyd Miles"} review={" Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet."}/>
        </div>

      </Slider>
      <img src={star_red} alt="" className="about_star"/>
    </div>
  );
}

export default AboutUs;
