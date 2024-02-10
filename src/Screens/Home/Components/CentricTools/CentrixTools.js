import React from "react";
import "./CentrixTools.css";
import impoone from "../../../../assets/images/importer-1.svg";
import impotwo from "../../../../assets/images/importer-2.svg";
import impothree from "../../../../assets/images/impoerter-3.svg";
import impofour from "../../../../assets/images/impoerter-4.svg";
import impofive from "../../../../assets/images/impoerter-5.svg";
import imposix from "../../../../assets/images/impoerter-6.svg";
import start_blue from "../../../../assets/images/start_blue.svg";
import Importer_box from "./Importer_box";

function CentrixTools() {
  return (
    <div className="centrixtools-main">
      <div className="centrixtool-head">
        <h1 className="centrixtool-head-h1">Importer - Centric Tools</h1>
        <p className="centrixtool-head-p">All in one place</p>
      </div>

      <div className="importer-boxesmain">
        {/* <div className="importer-box-1">
          <div className="importer-box-1-img-div">
            <img src={impoone} alt="" className="importer-box-1-img" />
          </div>
          <div className="importer-box-1-p-div">
            <p className="importer-box-1-p">
              Want to Import But Does not know how to get Started?
            </p>
          </div>
          <div className="importer-box-1-btn-div">
            <button className="importer-box-1-btn">
              Our Team Can Help You
            </button>
          </div>
        </div> */}

        <Importer_box
          src={impotwo}
          text={"Want to Import But Does not know how to get Started?"}
          btn_text={"Our Team Can Help You"}
        />
        <Importer_box
          src={impotwo}
          text={"Want to travel Abroad For Your Business Trip?"}
          btn_text={"Book Your Visa, Flight & Accomdation"}
        />
        <Importer_box
          src={impothree}
          text={"Done Ordering and purchasing your Desired Products?"}
          btn_text={"Ship Your Products Here "}
        />
        <Importer_box
          src={impofour}
          text={"Has Your Goods Left the Producer?"}
          btn_text={"Let’s Clear/ Transport to you"}
        />
        <Importer_box
          src={impofive}
          text={"Want to get your Products Quality Checked?"}
          btn_text={"Quality Check & Factory Visit"}
        />
        <Importer_box
          src={imposix}
          text={
            "Seamless, Secure and Ease of Mind Payments, Escrow and Wallets"
          }
          btn_text={"Pay Wit Ease"}
        />

        <img src={start_blue} alt="" className="centrix_star" />
      </div>
    </div>
  );
}

export default CentrixTools;
