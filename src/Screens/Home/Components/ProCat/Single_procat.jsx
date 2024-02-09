import React from "react";

function Single_procat({ img, text }) {
  return (
    <div className="w-2">
      <div className="single-procat">
        <div className="single-procat-img">
          <img src={img} alt="" />
        </div>
        <div className="single-procat-title">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Single_procat;
