import { Title } from '@mui/icons-material'
import React from 'react'

function Single_live_category({ img, title }) {
    return (
        <div className="w-8">
            <div className="single-live-category">
                <div className="single-live-cat-img">
                    <img src={img} alt="" />
                </div>
                <div className="single-live-cat-title">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Single_live_category
