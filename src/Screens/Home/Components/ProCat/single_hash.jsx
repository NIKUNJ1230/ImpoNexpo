import React from "react";
import { Link } from "react-router-dom";

function single_hash({ hash }) {
  return (
    <li>
      <Link to="/">{hash}</Link>
    </li>
  );
}

export default single_hash;
