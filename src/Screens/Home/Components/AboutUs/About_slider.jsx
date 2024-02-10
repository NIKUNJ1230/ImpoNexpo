import React from "react";

function About_slider({ src, star, name, review }) {
  return (
    <div className="aboutus-main">
      <div className="aboutus-usericon-main">
        <div className="aboutus-usericon1-img-main">
          <img src={src} alt="" className="aboutus-usericon1-img" />
        </div>
        <div className="aboutus-usericon2-img-main">
          <img src={star} alt="" className="aboutus-usericon2-img" />
        </div>
      </div>
      <div className="aboutus-p2-div-p1">
        <p className="aboutus-p2-p">{name}</p>
      </div>
      <div className="aboutus-p2-div-p2">
        <p className="aboutus-p2-p2">{review}</p>
      </div>
    </div>
  );
}

export default About_slider;
