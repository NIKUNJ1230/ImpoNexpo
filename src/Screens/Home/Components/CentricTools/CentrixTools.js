import React from 'react'
import "./CentrixTools.css"
import impoone from "../../../../assets/images/importer-1.svg";
import impotwo from "../../../../assets/images/importer-2.svg";
import impothree from "../../../../assets/images/impoerter-3.svg";
import impofour from "../../../../assets/images/impoerter-4.svg";
import impofive from "../../../../assets/images/impoerter-5.svg";
import imposix from "../../../../assets/images/impoerter-6.svg";



function CentrixTools() {
    return (
        <div className='centrixtools-main'>
            <div className='centrixtool-head'>
                <h1 className='centrixtool-head-h1'>
                    Importer - Centric Tools
                </h1>
                <p className='centrixtool-head-p'>
                    All in one place
                </p>
            </div>

            <div className='importer-boxesmain'>
                <div className='importer-box-1'>
                    <div className='importer-box-1-img-div'>
                        <img src={impoone} alt="" className='importer-box-1-img' />
                    </div>
                    <div className='importer-box-1-p-div'>
                        <p className='importer-box-1-p'>
                            Want to Import But Does not know how to get Started?
                        </p>
                    </div>
                    <div className='importer-box-1-btn-div'>
                        <button className='importer-box-1-btn'>Our Team Can Help You</button>
                    </div>
                </div>
                <div className='iporter-boxes-maindiv'>
                    <div className='importerbox-img-div'>
                        <img className='importerbox-img' src={impotwo} alt="" />
                    </div>
                    <div className='importerbox-p-div'>
                        <p className='importerbox-p'>
                            Want to travel Abroad For
                            Your Business Trip?
                        </p>
                    </div>
                    <div className='importerbox-btn-div'>
                        <button className='importerbox-btn'>
                            Book Your Visa, Flight & Accomdation
                        </button>
                    </div>
                </div>
                <div className='iporter-boxes-maindiv'>
                    <div className='importerbox-img-div'>
                        <img className='importerbox-img' src={impothree} alt="" />
                    </div>
                    <div className='importerbox-p-div'>
                        <p className='importerbox-p'>
                            Done Ordering and purchasing
                            your Desired Products?
                        </p>
                    </div>
                    <div className='importerbox-btn-div'>
                        <button className='importerbox-btn'>
                            Ship Your Products Here
                        </button>
                    </div>
                </div> 
                
                <div className='iporter-boxes-maindiv'>
                    <div className='importerbox-img-div'>
                        <img className='importerbox-img' src={impofour} alt="" />
                    </div>
                    <div className='importerbox-p-div'>
                        <p className='importerbox-p'>
                            Has Your Goods <br /> Left the Producer?
                        </p>
                    </div>
                    <div className='importerbox-btn-div'>
                        <button className='importerbox-btn'>
                            Let’s Clear/ Transport to you
                        </button>
                    </div>
                </div><div className='iporter-boxes-maindiv'>
                    <div className='importerbox-img-div'>
                        <img className='importerbox-img' src={impofive} alt="" />
                    </div>
                    <div className='importerbox-p-div'>
                        <p className='importerbox-p'>
                            Want to get your Products Quality Checked?
                        </p>
                    </div>
                    <div className='importerbox-btn-div'>
                        <button className='importerbox-btn'>
                            Quality Check & Factory Visit
                        </button>
                    </div>
                </div><div className='iporter-boxes-maindiv'>
                    <div className='importerbox-img-div'>
                        <img className='importerbox-img' src={imposix} alt="" />
                    </div>
                    <div className='importerbox-p-div'>
                        <p className='importerbox-p'>
                            Seamless, Secure and Ease <br />
                            of Mind Payments, Escrow and Wallets
                        </p>
                    </div>
                    <div className='importerbox-btn-div'>
                        <button className='importerbox-btn'>
                            Pay Wit Ease
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CentrixTools
