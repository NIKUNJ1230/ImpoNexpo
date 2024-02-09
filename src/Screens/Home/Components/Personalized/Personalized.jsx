import React from "react";
import "./Personalized.css";
import Card from "../../../../Components/Cards/Card/Card";
import star_red from "../../.././../assets/images/star_red.svg"
function Personalized() {
  return (
    <section>
      <div className="Personalized-title">
        <h2>Personalized Sourcing for you!</h2>
      </div>
      <div className="container">
        <div className="Personalized-card">
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
          </div>
          <img src={star_red} alt="" className="Personalized-card-star"/>
          <div className="Personalized-btn">
            <a href="#">
                See All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Personalized;
