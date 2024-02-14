import { Title } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function Single_category_deals({ img, title }) {
    return (
        <div className="w-6">
            <div className="single-category-deals">
                <div className="category-deals-img">
                    <Link to="/Deals_page"><img src={img} alt="" /></Link>
                </div>
                <div className="category-deals-title">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default Single_category_deals
