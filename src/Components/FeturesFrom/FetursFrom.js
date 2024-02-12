import React from "react";

export default function FetursFrom(props) {
  return (
    <div className="fetursfrom-main">
        <img src={props.img} className="logo-img-feturs" alt="" />
        <p className="feturslogo-p">{props.name}</p>
    </div>
  );
}
