import React from "react";
import Slider from "react-slick";
import "./Deals.css";
import Crown from "../../../../assets/images/headingcrown.png";
import Star from "../../../../assets/images/redstar.png";
import Card from "../../../../Components/Cards/Card/Card";

const Deals = () => {
  return (
    <section className="deals">
      <div className="container">
        <div className="deals-title">
          <h2>Trending on Imponexpo Deals ⚡</h2>
          <div className="count-down"></div>
        </div>
        <div className="row">
          <div className="w-30">
            <div className="deals-category">
              <h2>Most Popular Deals Categories</h2>
              <div className="deals-ul">
                <ul>
                  <li>
                    <a href="#">Project Management</a>
                  </li>
                  <li>
                    <a href="#">Video Conferencing</a>
                  </li>
                  <li>
                    <a href="#">E-Commerce Platforms</a>
                  </li>
                  <li>
                    <a href="#">Marketing Automation</a>
                  </li>
                  <li>
                    <a href="#">Accounting</a>
                  </li>
                  <li>
                    <a href="#">CRM</a>
                  </li>
                  <li>
                    <a href="#">Expense Management</a>
                  </li>
                  <li>
                    <a href="#">ERP Systems</a>
                  </li>
                  <li>
                    <a href="#">Online Backup</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-70">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
