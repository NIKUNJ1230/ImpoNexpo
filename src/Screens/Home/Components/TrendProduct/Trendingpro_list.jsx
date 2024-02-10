import React from "react";
import { Link } from "react-router-dom";
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
function Trendingpro_list({text}) {
  return (
    <li>
      <Link to="/">
        Trending
        <span>
          <DownIcon className="home__TrendProprods_sourcemorebtnicon" />
        </span>
      </Link>
    </li>
  );
}

export default Trendingpro_list;
