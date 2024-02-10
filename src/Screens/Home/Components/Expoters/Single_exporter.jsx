import React from "react";

function Single_exporter({ src, text, tag }) {
  return (
    <div className="expoters-wrape-div">
      <div className="exporters-img-div">
        <img src={src} className="expo-img" alt="" />
      </div>
      <div className="expo-p1-div">
        <p className="expo-p1">{text}</p>
      </div>
      <div className="expo-p2-div">
        <p className="expo-p2">{tag}</p>
      </div>
    </div>
  );
}

export default Single_exporter;
