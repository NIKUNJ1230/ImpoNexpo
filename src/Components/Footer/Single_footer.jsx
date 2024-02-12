import React from "react";
import { Link } from "react-router-dom";

function Single_footer({
  content,
  menu1,
  menu2,
  menu3,
  menu4,
  menu5,
  menu6,
  menu7,
  menu8,
}) {
  return (
    <div className="w-5">
      <div className="single_footer_content">
        <div className="footer-content-title">
          <h4>{content}</h4>
        </div>
        <ul>
          <li>
            <Link to="/">{menu1}</Link>
          </li>
          <li>
            <Link to="/">{menu2}</Link>
          </li>
          <li>
            <Link to="/">{menu3}</Link>
          </li>
          <li>
            <Link to="/">{menu4}</Link>
          </li>
          <li>
            <Link to="/">{menu5}</Link>
          </li>
          <li>
            <Link to="/">{menu6}</Link>
          </li>
          <li>
            <Link to="/">{menu7}</Link>
          </li>
          <li>
            <Link to="/">{menu8}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Single_footer;
