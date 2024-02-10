import React from "react";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Link } from "react-router-dom";

function Region_menu({ region }) {
  return (
    <li>
      <Link to="/">
        {region}
        <DownIcon />
      </Link>
    </li>
  );
}

export default Region_menu;
