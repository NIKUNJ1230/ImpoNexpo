import React from "react";
import "./Warehouse.css";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Card from "../../../../Components/Cards/Card_ware/Card_ware";
import star_blue from "../../../../assets/images/start_blue.svg";
import Warehouse_menu from "./Warehouse_menu";
import { Link } from "react-router-dom";
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
            <Warehouse_menu menu={"all"} />
            <Warehouse_menu menu={"sports"} />
            <Warehouse_menu menu={"men"} />
            <Warehouse_menu menu={"woman"} />
            <Warehouse_menu menu={"kids"} />
            <Warehouse_menu menu={"jawelry"} />
            <Warehouse_menu menu={"accessories"} />
            <Warehouse_menu menu={"makeup"} />
            <Warehouse_menu menu={"cars"} />
            <Warehouse_menu menu={"cycles"} />
          </ul>
          <li className="view-more">
            <Link to="/">
              view more
              <span>
                <DownIcon />
              </span>
            </Link>
          </li>
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
