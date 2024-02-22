import React from 'react'
import "./Trending_suppliers_live_stream.css"
import { Link } from 'react-router-dom'
import Flag from "react-world-flags";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { IoPlaySharp } from "react-icons/io5";
import Single_trending_suppliers_live from './Single_trending_suppliers_live';
import { IoMdPlay } from 'react-icons/io';
function Trending_supliers_live_stream() {
    return (
        <div>
            <div className="container-fluid ">
                <div className="trending-suppliers-title">
                    <h2>Livestream from Trending Suppliers</h2>
                </div>
                <div className="trending-suppliers-live">
                    <div className="row">
                        <Single_trending_suppliers_live profile={""} name={"David Semllons"} acc={"@davidsemofficial"} flag={"NG"} isFollow={"follow"} followers={"120"}/>
                        <Single_trending_suppliers_live profile={""} name={"David Semllons"} acc={"@davidsemofficial"} flag={"NG"} isFollow={"follow"} followers={"120"}/>
                        <Single_trending_suppliers_live profile={""} name={"David Semllons"} acc={"@davidsemofficial"} flag={"NG"} isFollow={"follow"} followers={"120"}/>
                        <Single_trending_suppliers_live profile={""} name={"David Semllons"} acc={"@davidsemofficial"} flag={"NG"} isFollow={"follow"} followers={"120"}/>
                        <Single_trending_suppliers_live profile={""} name={"David Semllons"} acc={"@davidsemofficial"} flag={"NG"} isFollow={"follow"} followers={"120"}/>
                        <Single_trending_suppliers_live profile={""} name={"David Semllons"} acc={"@davidsemofficial"} flag={"NG"} isFollow={"follow"} followers={"120"}/>
                        <Single_trending_suppliers_live profile={""} name={"David Semllons"} acc={"@davidsemofficial"} flag={"NG"} isFollow={"follow"} followers={"120"}/>
                        <Single_trending_suppliers_live profile={""} name={"David Semllons"} acc={"@davidsemofficial"} flag={"NG"} isFollow={"follow"} followers={"120"}/>
                        <Single_trending_suppliers_live profile={""} name={"David Semllons"} acc={"@davidsemofficial"} flag={"NG"} isFollow={"follow"} followers={"120"}/>
                        <Single_trending_suppliers_live profile={""} name={"David Semllons"} acc={"@davidsemofficial"} flag={"NG"} isFollow={"follow"} followers={"120"}/>
                    </div>
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

export default Trending_supliers_live_stream
