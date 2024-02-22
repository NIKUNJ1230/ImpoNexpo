import React from 'react'
import "./On_going_live.css"
import { Link } from 'react-router-dom'
import Single_live_stream from '../Single_live_stream/Single_live_stream'
import video from "../../../../assets/videos/test.mp4"
import { IoMdPlay } from "react-icons/io";

function On_going_live() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="on-going-title">
                    <h2>Ongoing Livestream</h2>
                </div>
                <div className="on-going-menu">
                    <ul>
                        <li>
                            <Link to="live_stream_main">
                                all
                            </Link>
                        </li>
                        <li>
                            <Link to="live_stream_main">
                                By Trending
                            </Link>
                        </li>
                        <li>
                            <Link to="live_stream_main">
                                By Country
                            </Link>
                        </li>
                        <li>
                            <Link to="live_stream_main">
                                by Category
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="row">

                <Single_live_stream
                        name={"David Semllons"}
                        acc={"@davidsemofficial"}
                        flag={"NG"}
                        isFollow={"Follow"}
                        followers={"120"}
                        video={video}
                        like={"120"}
                        comment={"450"}
                        share={"34"}
                        download={"500"}
                    />
                    <Single_live_stream
                        name={"David Semllons"}
                        acc={"@davidsemofficial"}
                        flag={"NG"}
                        isFollow={"Follow"}
                        followers={"120"}
                        video={video}
                        like={"120"}
                        comment={"450"}
                        share={"34"}
                        download={"500"}
                    />
                    <Single_live_stream
                        name={"David Semllons"}
                        acc={"@davidsemofficial"}
                        flag={"NG"}
                        isFollow={"Follow"}
                        followers={"120"}
                        video={video}
                        like={"120"}
                        comment={"450"}
                        share={"34"}
                        download={"500"}
                    />
                    <Single_live_stream
                        name={"David Semllons"}
                        acc={"@davidsemofficial"}
                        flag={"NG"}
                        isFollow={"Follow"}
                        followers={"120"}
                        video={video}
                        like={"120"}
                        comment={"450"}
                        share={"34"}
                        download={"500"}
                    />
                    <Single_live_stream
                        name={"David Semllons"}
                        acc={"@davidsemofficial"}
                        flag={"NG"}
                        isFollow={"Follow"}
                        followers={"120"}
                        video={video}
                        like={"120"}
                        comment={"450"}
                        share={"34"}
                        download={"500"}
                    />
                </div>

                <div className="show-more-live">
                    <Link to="/live_stream_main">
                        show more
                        <span>
                            <IoMdPlay />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default On_going_live
