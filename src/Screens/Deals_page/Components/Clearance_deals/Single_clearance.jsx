import React from 'react'

function Single_clearance({ img, title }) {
    return (
        <div className="w-4">
            <div className="single-clearance-deals">
                <div className="single-clearance-deals-img">
                    <img src={img} alt="" />
                </div>
                <div className="clearance-title">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Single_clearance
