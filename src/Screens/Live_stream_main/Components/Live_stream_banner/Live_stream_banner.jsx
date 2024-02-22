import React from 'react'
import "./Live_stream_banner.css"
import Slider from "react-slick";
import test from "../../../../assets/videos/test.mp4"
import Single_slider_video from './Single_slider_video';
function Live_stream_banner() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='live-stream-banner'>
            <Slider {...settings}>
                <Single_slider_video video={test} />
                <Single_slider_video video={test} />
            </Slider>
        </div>
    )
}

export default Live_stream_banner
