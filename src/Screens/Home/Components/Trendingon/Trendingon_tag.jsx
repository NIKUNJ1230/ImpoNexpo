import React from "react";
import { Link } from "react-router-dom";

function Trendingon_tag({ tag }) {
  return (
    <li className="trendingon-tag">
      <Link to="/">{tag}</Link>
    </li>
  );
}

export default Trendingon_tag;
