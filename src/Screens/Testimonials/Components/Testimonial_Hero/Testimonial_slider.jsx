import React from "react";

function Testimonial_slider({ heading, content, img }) {
  return (
    <div className="row align-center h-100 d-flex">
      <div className="w-2">
        <div className="left_testimonial">
          <h1>{heading}</h1>
          <p>{content}</p>
        </div>
      </div>
      <div className="w-2">
        <div className="right_testimonial">
          <div className="testimonial_banner_img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial_slider;
