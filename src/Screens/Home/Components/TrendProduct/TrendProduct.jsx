import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./TrendProduct.css";
import Crown from "../../../../assets/images/headingcrown.png";
import Star from "../../../../assets/images/redstar.png";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import live_stream from "../../../../assets/images/live video.svg";
import Card_live from "../../../../Components/Cards/Card_live/Card_live";
import Trendingpro_list from "./Trendingpro_list";
import test_video from "../../../../assets/videos/test.mp4";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const TrendProduct = () => {
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
    <section className="trending-product-section">
      <div className="container">
        <div className="TrendPro">
          <div className="TrendPro-title">
            <h2>
              Trending Products on <br />
              <span>ImpoNexpo Livestreams</span>
            </h2>

          </div>

          <div className="row">
            <div className="w-40">
              <div className="live-stream">
                {/* <img src={live_stream} alt="" /> */}
                <video src={test_video} controls></video>
              </div>
              <div className="live-text">
                <h4>
                  View More <span>Live Now</span>
                </h4>
              </div>
            </div>
            <div className="w-60">
              <div className="TrendProList">
                <ul>
                  <Trendingpro_list text={"Trending"} />
                  <Trendingpro_list text={"Upcoming"} />
                  <Trendingpro_list text={"Recent"} />
                </ul>
              </div>
              <div className="row" style={{ marginLeft: "30px" }}>
              {
                  products.length > 0 ? (
                    products.slice(0, 6).map(product => (
                      <div className="w-3">
                        <Card_live
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
              <div className="home__TrendProprods_sourcemorebtn">
                <div className="home__TrendProprods_sourcemorebtntxt">
                  Source More Deals
                </div>
                <div className="home__TrendProprods_sourcemorebtniconwrap">
                  <Link to="/deals_page">
                    <DownIcon className="home__TrendProprods_sourcemorebtnicon text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendProduct;
