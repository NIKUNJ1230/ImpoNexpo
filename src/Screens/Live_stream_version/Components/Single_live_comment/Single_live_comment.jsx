import React from 'react'

function Single_live_comment({ img, name, duration, comment }) {
    return (
        <div className="single-full-v-chat">
            <div className="w-15">
                <div className="single-full-v-profile">
                    <img src={img} alt="" />
                </div>
            </div>

            <div className='w-85'>
                <div className="single-full-v-name-duration">
                    <span className="single-full-v-name">{name}</span>
                    <li className="single-full-v-duration">{duration}</li>
                </div>
                <span className="single-full-v-comment">
                    {comment}
                </span>
            </div>


        </div>
    )
}

export default Single_live_comment
