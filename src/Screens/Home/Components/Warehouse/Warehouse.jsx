import React, { useEffect, useState } from "react";
import "./Warehouse.css";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Card_ware from "../../../../Components/Cards/Card_ware/Card_ware";
import star_blue from "../../../../assets/images/start_blue.svg";
import Warehouse_menu from "./Warehouse_menu";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Warehouse() {
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://91.107.205.100:97/Trending/Products', {
        method: "GET",
      });
      if (response.status === 200 || response.ok) {
        const responseData = await response.json();
        setProducts(responseData.Data)
      }
      else {
        toast.error(response?.message || "data not found. Please try again.");
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error("error fetching data. Please try again.");
    }
  };
  useEffect(() => {
    fetchData();
    // recentProducts()
  }, [])
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


            {
              products.length > 0 ? (
                products.slice(0, 8).map(product => (
                  <div className="w-4">
                    <Card_ware
                      ProductId={product._id}
                      ProductName={product.ProductName}
                      ProductDescription={product.ProductDescription}

                      Like={product.Like}
                      Comment={product.Comment}
                      Share={product.Share}
                      Saved={product.Saved}
                      StartPrice={product.StartPrice}
                      EndPrice={product.EndPrice}
                      MinOrder={product.MinOrder}
                      HashTags={product.HashTags}

                    />
                  </div>
                ))) : (null)
            }

          </div>
          <div className="warehouse-star">
            <img src={star_blue} alt="" />
          </div>

          <div className="home__warehouseprods_sourcemorebtn">
            <div className="home__warehouseprods_sourcemorebtntxt">
              Source More Deals
            </div>
            <div className="home__warehouseprods_sourcemorebtniconwrap">
              <Link to="/deals_page">
                <DownIcon className="home__warehouseprods_sourcemorebtnicon text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </sction>
  );
}

export default Warehouse;
