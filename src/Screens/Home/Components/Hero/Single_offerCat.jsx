import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function Single_offerCat({ cat_name }) {
  return (
    <li className="d-flex align-center justify-between">
      <Link to="/">{cat_name}</Link>
      {/* <i>
        <FontAwesomeIcon icon={faAngleRight} />{" "}
      </i> */}
      <i clssName="fa-solid fa-angle-right"></i>
    </li>
  );
}

export default Single_offerCat;
