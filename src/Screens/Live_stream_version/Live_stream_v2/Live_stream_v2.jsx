import React, { useState } from 'react'
import Topbar from '../../../Components/Topbar/Topbar'
import Navbar from '../../../Components/Navbar/Navbar'
import Live_stream_v_header from '../Components/Live_stream_v_header/Live_stream_v_header'
import Full_live_v2 from './Components/Full_live_v2/Full_live_v2'
function Live_stream_v2() {
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
            <Full_live_v2 isVisible={isVisible} />
        </div>
    )
}

export default Live_stream_v2
