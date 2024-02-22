import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Deals.css";
import Crown from "../../../../assets/images/headingcrown.png";
import Card from "../../../../Components/Cards/Card/Card";
import Star from "../../../../assets/images/redstar.png";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Deals_category from "./Deals_category";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Deals = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/Trending/Products', {
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
  const catData = async () => {
    try {
      const response = await fetch("http://localhost:3000/Admin/Find/Categories")
      if (response.statusCode === 200 || response.ok) {
        const responseData = await response.json();
        setCategory(responseData.Category)
      }
      else {
        toast.error(response?.message || "data not found. Please try again.");
      }

    }
    catch (err) {
      toast.error('Error fetching data:', err);
      toast.error('Error fetching data:', err);
    }
  }
  useEffect(() => {
    fetchData();
    catData();
  }, [])
  return (
    <section className="deals-section">
      <div className="container">
        <div className="home__trendingprods_heading">
          Deals on
          <span className="home__trendingprods_hdinghighlight">
            Imponexpo Channel
          </span>
        </div>
        <div className="deals">
          <div className="deals-title">
            <h2>Trending on Imponexpo Deals ⚡</h2>

          </div>
          <div className="row">
            <div className="w-30">
              <div className="deals-category-main">
                <div className="deals-category">
                  <h2>Most Popular Deals Categories</h2>
                  <div className="deals-ul">
                    <ul>
                      {
                        category.length > 0 ? (
                          category.map(value => (
                            <Deals_category cat={value.name} />
                          ))) : (null)
                      }
                    </ul>
                  </div>
                </div>
                <img src={Star} alt="" className="home__dealsgprods_hstar" />
              </div>
            </div>
            <div className="w-70">
              <div className="row">
                {
                  products.length > 0 ? (
                    products.slice(0, 8).map(product => (
                      <div className="w-4">
                        <Card
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
              <div className="home__dealsprods_sourcemorebtn">
                <div className="home__dealsprods_sourcemorebtntxt">
                  Source More Deals
                </div>
                <div className="home__dealsprods_sourcemorebtniconwrap">
                  <Link to="/deals_page">

                    <DownIcon className="home__dealsprods_sourcemorebtnicon text-white" />
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

export default Deals;
