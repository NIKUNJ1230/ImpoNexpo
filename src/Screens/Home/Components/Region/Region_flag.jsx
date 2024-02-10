import React from "react";
import { Link } from "react-router-dom";

function Region_flag({ src }) {
  return (
    <li>
      <Link to="/">
        <img src={src} alt="" />
      </Link>
    </li>
  );
}

export default Region_flag;
