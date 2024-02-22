import React from "react";
import "./Testimonial_Hero.css";
import banner_img from "../../../../assets/testimonial/banner_chat.svg";
import Slider from "react-slick";
import Testimonial_slider from "./Testimonial_slider";
function Testimonial_Hero() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div className="container-fluid ">
        <div className="testimonial_banner">
          {/* <div className="row align-center h-100">
            <div className="w-2">
              <div className="left_testimonial">
                <h1>Inspiring stories of customer success</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam molestias voluptatem quibusdam velit voluptates
                  accusantium libero corrupti, quod veritatis iusto quas nisi
                  fuga ut officia tempore error aperiam pariatur placeat eos
                  quia distinctio. Nostrum aut a laboriosam quidem numquam
                  rerum. Nesciunt iusto non labore hic. Consequuntur officiis
                  delectus eum odit!
                </p>
              </div>
            </div>
            <div className="w-2">
              <div className="right_testimonial">
                <div className="testimonial_banner_img">
                  <img src={banner_img} alt="" />
                </div>
              </div>
            </div>
          </div> */}

          <Slider {...settings}>
            <Testimonial_slider heading={"Inspiring stories of customer success"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ipsam molestias voluptatem quibusdam velit voluptates accusantium libero corrupti, quod veritatis iusto quas nisi fuga ut officiatempore error aperiam pariatur placeat eosuia distinctio. Nostrum aut a laboriosam quidem numquam rerum. Nesciunt iusto non labore hic. Consequuntur officiis delectus eum odit!"} img={banner_img}/>
            <Testimonial_slider heading={"Inspiring stories of customer success"} content={"Lorem ipsum dolor sit, amet consectetur adipisicing elit.Ipsam molestias voluptatem quibusdam velit voluptates accusantium libero corrupti, quod veritatis iusto quas nisi fuga ut officiatempore error aperiam pariatur placeat eosuia distinctio. Nostrum aut a laboriosam quidem numquam rerum. Nesciunt iusto non labore hic. Consequuntur officiis delectus eum odit!"} img={banner_img}/>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial_Hero;
