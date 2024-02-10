import React from "react";

function Importer_box({ src, text, btn_text }) {
  return (
    <div className="iporter-boxes-maindiv">
      <div className="importerbox-img-div">
        <img className="importerbox-img" src={src} alt="" />
      </div>
      <div className="importerbox-p-div">
        <p className="importerbox-p">{text}</p>
      </div>
      <div className="importerbox-btn-div">
        <button className="importerbox-btn">{btn_text}</button>
      </div>
    </div>
  );
}

export default Importer_box;
