import React from 'react'

function Single_slider_video({video}) {
    return (
        <div>
            <video src={video} controls autoPlay></video>
        </div>
    )
}

export default Single_slider_video
