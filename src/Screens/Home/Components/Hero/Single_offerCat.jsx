import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function Single_offerCat({ cat_name }) {
  return (
    <li className="d-flex align-center justify-between">
      <a href="#">{cat_name}</a>
      {/* <i>
        <FontAwesomeIcon icon={faAngleRight} />{" "}
      </i> */}
      <i class="fa-solid fa-angle-right"></i>
    </li>
  );
}

export default Single_offerCat;
