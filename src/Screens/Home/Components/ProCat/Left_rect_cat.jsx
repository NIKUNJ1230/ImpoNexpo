import React from "react";
import { Link } from "react-router-dom";

function Left_rect_cat({ cat }) {
  return (
    <li>
      <Link to="/">{cat}</Link>
    </li>
  );
}

export default Left_rect_cat;
