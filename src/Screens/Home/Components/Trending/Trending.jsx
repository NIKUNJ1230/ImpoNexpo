import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./Trending.css";
import Crown from "../../../../assets/images/headingcrown.png";
import Star from "../../../../assets/images/star_red.svg";
import Card1 from "../../../../Components/Cards/Card1/Card1";
// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className ?? ""} slickcarousal__arrow`}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className ?? ""} slickcarousal__arrow`}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const Trending = ({ title1, title2, text }) => {

  const [products, setProducts] = useState([])

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
  useEffect(() => {
    fetchData();
    // recentProducts()
  }, [])
  // Settings for the slider
  const settings = {
    dots: false, // Show dot indicators
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 4, // Number of slides to scroll at once
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="home__trendingprods_section">
      <div className="home__trendingprods_heading">
        <img src={Crown} alt="" className="home__trendingprods_hcrown" />
        <img src={Star} alt="" className="home__trendingprods_hstar" />

        {title1}
        <span className="home__trendingprods_hdinghighlight">
          {title2}
        </span>
      </div>
      <div className="home__trendingprods_subheading">
        {text}
      </div>

      <div className="home__trendingprods_cards">

        {
          products.length > 0 ? (
            products.slice(0, 8).map(product => (
              <div className="home__trendingprods_card">
                <Card1
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
      <div className="home__trendprods_sourcemorebtn">
        <div className="home__trendprods_sourcemorebtntxt">
          Source More Now
        </div>
        <div className="home__trendprods_sourcemorebtniconwrap">
          <Link to="/more_channel"> <DownIcon className="home__trendprods_sourcemorebtnicon text-white" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Trending;
