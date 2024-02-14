import React from 'react'
import { Link } from 'react-router-dom'

function Single_follow({ img, title, text, btn }) {
    return (
        <div className="w-3">
            <div className="single-follow-deals">
                <div className="single-deals-img">
                    <img src={img} alt="" />
                </div>
                <div className="single-follow-content">
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <div className="single-follow-btn">
                        <Link to="/Deals_page">
                            {btn}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single_follow
