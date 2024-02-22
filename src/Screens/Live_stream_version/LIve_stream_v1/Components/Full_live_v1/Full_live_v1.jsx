import React, { useState } from 'react'
import "./Full_live_v1.css"
import video from "../../../../../assets/videos/test.mp4"
import Full_live_v_chat from '../../../Components/Full_live_v_chat/Full_live_v_chat';
import Full_live_v1_video from '../Full_live_v1_video/Full_live_v1_video';



import color from "../../../../../assets/Live version/color.svg"
import profie from "../../../../../assets/Live main/profile.svg"
import Share from "../../../../../assets/icons/share.svg";
import Download from "../../../../../assets/icons/download.svg";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import Comment from "../../../../../assets/icons/comment.svg";
import send from "../../../../../assets/Live version/send.svg"
import smile from "../../../../../assets/Live version/smile.svg"
import font from "../../../../../assets/Live version/font.svg"
import translate from "../../../../../assets/Live version/translate.svg"
import { Link } from 'react-router-dom';
import Single_live_comment from '../../../Components/Single_live_comment/Single_live_comment';
import Price_pair from '../../../Components/About_product_details/Price_pair';
import Size from '../../../Components/About_product_details/Size';


function Full_live_v1({ isVisible }) {

    return (
        <div>
            <div className="full-live-v1">
                <div className="row">
                    <Full_live_v1_video isVisible={isVisible} video={video} />

                    <Full_live_v_chat/>

                </div>

            </div>
        </div>
    )
}

export default Full_live_v1
