import React from 'react'
import "./Full_live_v_chat.css"
import Single_live_comment from '../Single_live_comment/Single_live_comment'
import send from "../../../../assets/Live version/send.svg"
import smile from "../../../../assets/Live version/smile.svg"
import font from "../../../../assets/Live version/font.svg"
import translate from "../../../../assets/Live version/translate.svg"
import profie from "../../../../assets/Live main/profile.svg"
import { Link } from 'react-router-dom'

function Full_live_v_chat() {
    return (
        <div className="w-20">
            <div className="full-live-v-chat">
                <Single_live_comment img={profie} name={"karissa asthon"} duration={"0:00:50"} comment={"TURDY THAT SMILE!!! Stunnin"} />
            </div>

            <div className="full-live-v-input-comment">

                <div>
                    <div className="full-live-input">
                        <input type="text" placeholder='Type your Message...' />
                        <div className="full-live-v-input-comment-send">
                            <Link to="/live_stream_v">
                                <img src={send} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="full-live-input-btns">
                        <Link to="/live_stream_v">
                            <img src={font} alt="" />
                        </Link>
                        <Link to="/live_stream_v">
                            <img src={smile} alt="" />
                        </Link>
                        <Link to="/live_stream_v">
                            <img src={translate} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Full_live_v_chat
