import React from "react";
import { Link } from "react-router-dom";

function Warehouse_menu({menu}) {
  return (
    <li>
      <Link to="/">{menu}</Link>
    </li>
  );
}

export default Warehouse_menu;
