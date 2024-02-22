import React from 'react'
import "./Intreact_live_stream.css"
import video from "../../../../assets/videos/test.mp4"
import Single_live_stream from '../Single_live_stream/Single_live_stream'
import { Link } from 'react-router-dom'
import { IoMdPlay } from 'react-icons/io'
function Intreact_live_stream() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="intreact-live-title">
                    <h2>Livestream from your Interacted Suppliers</h2>
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

export default Intreact_live_stream
