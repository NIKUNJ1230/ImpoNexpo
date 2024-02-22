import React from 'react'
import "./Product_cat.css"
import cat from "../../../../assets/images/importer-2.svg"
import DownIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Star from "../../../../assets/images/star_black.svg"
import Single_pro_cat from './Single_pro_cat';
import { Link } from 'react-router-dom';
function Product_cat() {
    return (
        <div className='pro-cat-section'>
            <div className="container-fluid ">
                <div className="home__trendingprods_heading">
                    <img src={Star} alt="" className="home__trendingprods_blackstar" />
                    Products Categories on
                    <span className="home__trendingprods_hdinghighlight">
                        Channel
                    </span>
                </div>
                <div className="product-cat">
                    <div className="row">
                        <Single_pro_cat img={cat} title={"Electronics"}/>
                        <Single_pro_cat img={cat} title={"Electronics"}/>
                        <Single_pro_cat img={cat} title={"Electronics"}/>
                        <Single_pro_cat img={cat} title={"Electronics"}/>
                        <Single_pro_cat img={cat} title={"Electronics"}/>
                        <Single_pro_cat img={cat} title={"Electronics"}/>
                        <Single_pro_cat img={cat} title={"Electronics"}/>
                        <Single_pro_cat img={cat} title={"Electronics"}/>
                    </div>
                    <div className="home__trendprods_sourcemorebtn">
                        <div className="home__trendprods_sourcemorebtntxt">
                            Source More Channels
                        </div>

                        <div className="home__trendprods_sourcemorebtniconwrap">
                            <DownIcon className="home__trendprods_sourcemorebtnicon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_cat
