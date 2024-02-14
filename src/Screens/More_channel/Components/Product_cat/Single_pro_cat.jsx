import React from 'react'

function Single_pro_cat({img,title}) {
    return (
        <div className="w-4">
            <div className="single-pro-cat">
                <div className="single-pro-cat-img">
                    <img src={img} alt="" />
                </div>
                <div className="single-pro-cat-title">
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default Single_pro_cat
