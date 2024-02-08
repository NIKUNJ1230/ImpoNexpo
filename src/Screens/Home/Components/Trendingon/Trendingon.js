import React from 'react'
import crown from "../../../../assets/images/crownblack.svg";
import "./Trendingon.css"

function Trendingon() {
    return (
        <div className='trendingon-main-div'>
            <div className='trendingon-heading-main' >
                <div className="trendingon-heading-div">
                    <img src={crown} alt="" className="trendingon-crown" />
                    <span className="trendingon">
                        Trending
                    </span>
                    #s on Imponexpo
                </div>
            </div>
            <div className='trendingon-tags-main'>
                <ul className='trendingon-tags-ui' >
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>
                    <li className='trendingon-tag'>#Mongbabal</li>

                    {/* <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li>
                    <li>#Mongbabal</li> */}
                </ul>
            </div>
            <div className='trendingon-btn-div'>
                <button className='trendingon-btn'>See All</button>
            </div>
        </div>
    )
}

export default Trendingon