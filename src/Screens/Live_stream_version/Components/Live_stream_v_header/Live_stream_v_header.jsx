import React from 'react'
import "./Live_stream_v_header.css"
import profile from "../../../../assets/Live version/profile.svg"
import Flag from 'react-world-flags'
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from 'react-router-dom';
function Live_stream_v_header({ img, name, acc, flag, isFollow, followers, onClick }) {
    return (
        <div>
            <div className="live-stream-v-header">
                <div className="d-flex align-center justify-between">


                    <div className="d-flex align-center">
                        <div className="profile-img">
                            <img src={profile} alt="" />
                        </div>
                        <div className="profile-text">
                            <h2>{name}</h2>
                            <h2>{acc}</h2>
                        </div>
                    </div>

                    <div className="stream-location">
                        <p>Location</p>
                        <Flag
                            code={flag}
                            style={{
                                height: "50px",
                                width: "50px",
                                marginLeft: "5px",
                            }}
                        />
                    </div>

                    <div className='d-flex align-center'>
                        <div className="follow-and-count">
                            <div className="stream-follow">
                                <PersonAddIcon />
                                <span>{isFollow}</span>
                            </div>
                            <div className="follow-count">
                                <span>{followers} followers</span>
                            </div>
                        </div>
                        <Link className='stream-trigger' onClick={onClick}>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Live_stream_v_header
