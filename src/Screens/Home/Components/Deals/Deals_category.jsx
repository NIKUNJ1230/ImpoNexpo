import React from "react";
import { Link } from "react-router-dom";

function Deals_category({cat}) {
  return (
    <li>
      <Link to="/">{cat}</Link>
    </li>
  );
}

export default Deals_category;
