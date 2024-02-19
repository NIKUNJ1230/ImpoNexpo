import React, { useState } from "react";
import { RWebShare } from "react-web-share";

const ProductShare = () => {
  return (
    <div>
      <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: "https://on.natgeo.com/2zHaNup",
          title: "Flamingos",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className="card_live__component_statitemtext">34</button>
      </RWebShare>
    </div>
  );
};

export default ProductShare;