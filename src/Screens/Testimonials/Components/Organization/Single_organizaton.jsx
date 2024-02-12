import React from 'react'
import { Link } from 'react-router-dom'

function Single_organizaton({ src }) {
    return (
        <div className="w-4">
            <div className="orga-img">
                <Link to="/testimonial">
                    <img src={src} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Single_organizaton
