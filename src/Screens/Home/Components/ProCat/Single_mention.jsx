import React from "react";
import { Link } from "react-router-dom";

function Single_mention({ tag }) {
  return (
    <li>
      <Link to="/">{tag}</Link>
    </li>
  );
}

export default Single_mention;
