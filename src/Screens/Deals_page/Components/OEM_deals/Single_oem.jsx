import React from 'react'

function Single_oem({ img, title }) {
    return (
        <div className="w-6">
            <div className="single-oem-deals">
                <div className="single-oem-img">
                    <img src={img} alt="" />
                </div>
                <div className="single-oem-title">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Single_oem
