import React from 'react'
import "./Upcoming_live.css"
import Single_live_stream from '../Single_live_stream/Single_live_stream'
import { Link } from 'react-router-dom'
import video from "../../../../assets/videos/test.mp4"
function Upcoming_live() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="upcoming-live-title">
                    <h2>Upcoming Livestream</h2>
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
                <div className="view-all-live">
                    <Link to="live_stream_main">View all</Link>
                </div>
            </div>
        </div>
    )
}

export default Upcoming_live
