import React from 'react'
import "./Follow_live_stream.css"
import Single_live_stream from '../Single_live_stream/Single_live_stream'
import video from "../../../../assets/videos/test.mp4"
function Follow_live_stream() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="follow-live-title">
                    <h2>Livestream from accounts I follow</h2>
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
            </div>
        </div>
    )
}

export default Follow_live_stream
