import React from 'react'
import "./Expoters.css"
import crown from "../../../../assets/images/crownblack.svg";
import expoterlogo from "../../../../assets/images/Expoterlogo.svg"

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
                <div className='expoters-wrape-div'>
                    <div className='exporters-img-div'>
                        <img src={expoterlogo} className='expo-img' alt="" />
                    </div>
                    <div className='expo-p1-div'>
                        <p className='expo-p1'>
                            TCL Incorporated
                        </p>
                    </div>
                    <div className='expo-p2-div'>
                        <p className='expo-p2'>
                            @tlcincorporated
                        </p>
                    </div>
                </div>
                <div className='expoters-wrape-div'>
                    <div className='exporters-img-div'>
                        <img src={expoterlogo} className='expo-img' alt="" />
                    </div>
                    <div className='expo-p1-div'>
                        <p className='expo-p1'>
                            TCL Incorporated
                        </p>
                    </div>
                    <div className='expo-p2-div'>
                        <p className='expo-p2'>
                            @tlcincorporated
                        </p>
                    </div>
                </div>
                <div className='expoters-wrape-div'>
                    <div className='exporters-img-div'>
                        <img src={expoterlogo} className='expo-img' alt="" />
                    </div>
                    <div className='expo-p1-div'>
                        <p className='expo-p1'>
                            TCL Incorporated
                        </p>
                    </div>
                    <div className='expo-p2-div'>
                        <p className='expo-p2'>
                            @tlcincorporated
                        </p>
                    </div>
                </div>
                <div className='expoters-wrape-div'>
                    <div className='exporters-img-div'>
                        <img src={expoterlogo} className='expo-img' alt="" />
                    </div>
                    <div className='expo-p1-div'>
                        <p className='expo-p1'>
                            TCL Incorporated
                        </p>
                    </div>
                    <div className='expo-p2-div'>
                        <p className='expo-p2'>
                            @tlcincorporated
                        </p>
                    </div>
                </div>
                <div className='expoters-wrape-div'>
                    <div className='exporters-img-div'>
                        <img src={expoterlogo} className='expo-img' alt="" />
                    </div>
                    <div className='expo-p1-div'>
                        <p className='expo-p1'>
                            TCL Incorporated
                        </p>
                    </div>
                    <div className='expo-p2-div'>
                        <p className='expo-p2'>
                            @tlcincorporated
                        </p>
                    </div>
                </div>
                <div className='expoters-wrape-div'>
                    <div className='exporters-img-div'>
                        <img src={expoterlogo} className='expo-img' alt="" />
                    </div>
                    <div className='expo-p1-div'>
                        <p className='expo-p1'>
                            TCL Incorporated
                        </p>
                    </div>
                    <div className='expo-p2-div'>
                        <p className='expo-p2'>
                            @tlcincorporated
                        </p>
                    </div>
                </div>
            </div>
            <div className='expoters-button'>
                <button className='expo-seeall-btn'>See All</button>
            </div>
        </div>
    )
}

export default Expoters
