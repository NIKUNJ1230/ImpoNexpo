import React, { Component } from "react";
import PropTypes from "prop-types";
import userproimg from "../../../../assets/images/usercard-prooduct-img.svg";

export default function UsercardProductimg (props) {
  return (
<div>
    <img src={props.img} alt="" className="user-pro-img-main-prop" />
</div>
  )
}
