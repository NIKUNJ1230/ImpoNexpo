import React, { useState } from 'react'
import "./Live_stream_v1.css"
import Topbar from '../../../Components/Topbar/Topbar'
import Navbar from '../../../Components/Navbar/Navbar'
import Live_stream_v_header from '../Components/Live_stream_v_header/Live_stream_v_header'
import Full_live_v1 from './Components/Full_live_v1/Full_live_v1'
function Live_stream_v1() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div>
            <Topbar />
            <Navbar />
            <Live_stream_v_header name={"Hangzhou Kuyuan Import"} acc={"@HangZhouKuYuan"} flag={"ng"} isFollow={"follow"} followers={"120"}
                onClick={toggleVisibility}
            />
            <Full_live_v1 isVisible={isVisible} />
        </div>
    )
}

export default Live_stream_v1
