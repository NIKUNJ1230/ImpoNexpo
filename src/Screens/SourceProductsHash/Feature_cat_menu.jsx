import React from 'react'

function Feature_cat_menu({ img, text }) {
    return (
        <div className="col-1">
            <div className="hash-card-cat">
                <div className="single-hash-img">
                    <img src={img} alt="" />
                </div>
                <div className="single-hash-text">
                    <h6>
                        {text}
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Feature_cat_menu
