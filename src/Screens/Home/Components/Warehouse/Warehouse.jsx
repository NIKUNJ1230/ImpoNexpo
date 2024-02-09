import React from "react";
import "./Warehouse.css";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Card from "../../../../Components/Cards/Card_ware/Card_ware";
import star_blue from "../../../../assets/images/start_blue.svg";
function Warehouse() {
  return (
    <sction>
      <div className="container">
        <div className="warehouse-title">
          <h2>
            Order Now from The Imponexpo Warehouse They are READYMADE (TM)! and
            can <span>Ship Now</span>
          </h2>
        </div>
        <div className="warehouse-menu">
          <ul>
            <li>
              <a href="#">all</a>
            </li>
            <li>
              <a href="#">sports</a>
            </li>
            <li>
              <a href="#">men</a>
            </li>
            <li>
              <a href="#">woman</a>
            </li>
            <li>
              <a href="#">kids</a>
            </li>
            <li>
              <a href="#">jawelary</a>
            </li>
            <li>
              <a href="#">accessiores</a>
            </li>
            <li>
              <a href="#">makeup</a>
            </li>
            <li>
              <a href="#">cars</a>
            </li>
            <li>
              <a href="#">cycle</a>
            </li>
            <li>
              <a href="#">
                view more
                <span>
                  <DownIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="warehouse-content">
          <div className="row">
            <div className="w-4">
              <Card />
            </div>
            <div className="w-4">
              <Card />
            </div>
            <div className="w-4">
              <Card />
            </div>
            <div className="w-4">
              <Card />
            </div>
            <div className="w-4">
              <Card />
            </div>
            <div className="w-4">
              <Card />
            </div>
            <div className="w-4">
              <Card />
            </div>
            <div className="w-4">
              <Card />
            </div>
          </div>
          <div className="warehouse-star">
            <img src={star_blue} alt="" />
          </div>

          <div className="home__warehouseprods_sourcemorebtn">
                <div className="home__warehouseprods_sourcemorebtntxt">
                  Source More Deals
                </div>
                <div className="home__warehouseprods_sourcemorebtniconwrap">
                  <DownIcon className="home__warehouseprods_sourcemorebtnicon" />
                </div>
              </div>
        </div>
      </div>
    </sction>
  );
}

export default Warehouse;
