import React, { useState } from "react";
import "./Region.css";
import star_red from "../../../../assets/images/star_red.svg";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import region_1 from "../../../../assets/region/region-1.svg";
import Region_menu from "./Region_menu";
import Region_flag from "./Region_flag";
const fileContext = require.context(
  "../../../../assets/region/",
  false,
  /\.svg$/
);
const filePaths = fileContext.keys().map((filePath) => fileContext(filePath));
function Region() {
  return (
    <section className="region">
      <div className="region-title">
        <h2>
          Source By <span>Region</span>
        </h2>
        <div className="region-search">
          <input
            type="search"
            name="region"
            placeholder="Search the country or region here"
          />
        </div>
      </div>
      <div className="container">
        <div className="region-menu">
          <ul>
            <Region_menu region={"africa"} />
            <Region_menu region={"americas"} />
            <Region_menu region={"asia"} />
            <Region_menu region={"europe"} />
            <Region_menu region={"oceania"} />
          </ul>
        </div>
        <div className="region-flag">
          <ul>
            {filePaths.map((path, index) => (
              <Region_flag src={path}/>
            ))} 
          </ul>
        </div>
        <img src={star_red} alt="" className="region_star"/>
      </div>
    </section>
  );
}

export default Region;
