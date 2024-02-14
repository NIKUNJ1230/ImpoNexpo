import React from "react";
import "../../../../App.css";
import Usercard from "./Usercard";

export default function UserProductCard() {
  return (
    <div>
      <div>
        <nav className="user-pro-head-main">
          <p className="userprocard-p">All</p>
          <p className="userprocard-p">Trending</p>
          <p className="userprocard-p">Country</p>
          <p className="userprocard-p">Categories</p>
          <p className="userprocard-p">Management Certificates</p>
          <p className="userprocard-p">Product Certificates</p>
          <p className="userprocard-p">Management Certificates</p>
          <p className="userprocard-p">Business Type</p>
          <p className="userprocard-p">Abilities</p>
          <p className="userprocard-p">Show More</p>
        </nav>
        <div className="usercard-display-main ">
          <Usercard />
        </div>
        <div className="usercard-display-main ">
          <Usercard />
        </div>
        <div className="usercard-display-main ">
          <Usercard />
        </div>
        <div className="usercard-display-main ">
          <Usercard />
        </div>
        <div className="usercard-display-main ">
          <Usercard />
        </div>
        <div className="usercard-display-main ">
          <Usercard />
        </div>
        <div className="usercard-display-main ">
          <Usercard />
        </div>
      </div>
      
    </div>
  );
}
