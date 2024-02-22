import React from 'react'
import "./Expoters.css"
import crown from "../../../../assets/images/crownblack.svg";
import expoterlogo from "../../../../assets/images/Expoterlogo.svg"
import Single_exporter from './Single_exporter';
import { Link } from 'react-router-dom';

function Expoters() {
    return (
        <div>
            <div className='export-heading-main' >
                <div className="expoter-heading-div">
                    <img src={crown} alt="" className="crown-black-exporter" />
                    <span className="Expotersheading">
                        Trending
                    </span>
                    Exporters on Imponexpo Exporters
                </div>
            </div>
            <div className='main-expoters'>

                <Single_exporter src={expoterlogo} text={"TCL Incorporated"} tag={"@tlcincorporated"} />
                <Single_exporter src={expoterlogo} text={"TCL Incorporated"} tag={"@tlcincorporated"} />
                <Single_exporter src={expoterlogo} text={"TCL Incorporated"} tag={"@tlcincorporated"} />
                <Single_exporter src={expoterlogo} text={"TCL Incorporated"} tag={"@tlcincorporated"} />
                <Single_exporter src={expoterlogo} text={"TCL Incorporated"} tag={"@tlcincorporated"} />
                <Single_exporter src={expoterlogo} text={"TCL Incorporated"} tag={"@tlcincorporated"} />
            </div>
            <Link to="/More_exporter" className='expoters-button'>
                <div >
                    <button className='expo-seeall-btn'>See All</button>
                </div>
            </Link>
        </div>
    )
}

export default Expoters
