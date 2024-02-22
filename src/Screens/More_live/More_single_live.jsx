import React from 'react'
import Single_live_stream from '../Live_stream_main/Components/Single_live_stream/Single_live_stream'
import video from "../../assets/videos/test.mp4"
import { Link } from 'react-router-dom'
import { IoMdPlay } from 'react-icons/io'
function More_single_live() {
    return (
        <div>
            <div className="container-fluid ">
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
                    <Link to="/more_live">
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

export default More_single_live
