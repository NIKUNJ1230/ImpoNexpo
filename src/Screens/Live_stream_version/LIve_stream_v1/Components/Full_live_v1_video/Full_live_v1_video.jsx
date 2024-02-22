import React from 'react'
import Price_pair from '../../../Components/About_product_details/Price_pair'
import Size from '../../../Components/About_product_details/Size'
import { Link } from 'react-router-dom'
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import Comment from "../../../../../assets/icons/comment.svg";
import color from "../../../../../assets/Live version/color.svg"
import Share from "../../../../../assets/icons/share.svg";
import Download from "../../../../../assets/icons/download.svg";
import Full_live_v1_about_product from '../Full_live_v1_about_product/Full_live_v1_about_product';

function Full_live_v1_video({ isVisible, video }) {
    return (
        <div className="w-80">

            <div className="full-live-v1-video">
                <video src={video} controls autoPlay></video>
                
                
                <Full_live_v1_about_product isVisible={isVisible} color={color}/>

                <div className="full-live-v1-content">
                    <h2>Amazon Travel Finds with mo4travel Amazon Travel Finds with mo4travel</h2>
                    <p>Transform the way you sell online with our complete Video Commerce Solution by providing Improved Product Experiences, Real-time Engagement & Shoppertainment to your Buyers.</p>
                    <div className="full_live__component_stats">
                        <div className="full_live__component_statitem">
                            <FavoriteBorderRoundedIcon className="full_live__component_statitemicon" />
                            <div className="full_live__component_statitemtext">231</div>
                        </div>
                        <div className="full_live__component_statitem">
                            <img src={Comment} alt="" className="full_live__component_statitemicon" />
                            <div className="full_live__component_statitemtext">450</div>
                        </div>
                        <div className="full_live__component_statitem">
                            <img src={Share} alt="" className="full_live__component_statitemicon" />
                            <div className="full_live__component_statitemtext">34</div>
                        </div>
                        <div className="full_live__component_statitem">
                            <img
                                src={Download}
                                alt=""
                                className="full_live__component_statitemicon"
                            />
                            <div className="full_live__component_statitemtext">500</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Full_live_v1_video
