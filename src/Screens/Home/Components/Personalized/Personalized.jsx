import React, { useEffect, useState } from "react";
import "./Personalized.css";
import Card from "../../../../Components/Cards/Card/Card";
import star_red from "../../.././../assets/images/star_red.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Personalized() {
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
  return (
    <section>
      <div className="Personalized-title">
        <h2>Personalized Sourcing for you!</h2>
      </div>
      <div className="container">
        <div className="Personalized-card">
          <div className="row">
            {
              products.length > 0 ? (
                products.slice(0, 4).map(product => (
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
          <img src={star_red} alt="" className="Personalized-card-star" />
          <div className="Personalized-btn">
            <Link to="/">See All</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Personalized;
