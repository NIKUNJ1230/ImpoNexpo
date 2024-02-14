import React from 'react'
import { Link } from 'react-router-dom'
function Deals_menu({title,view}) {
    return (
        <div className="deals-menu">
            <h3>{title}</h3>
            <Link to="/Deals_page">{view}</Link>
        </div>
    )
}

export default Deals_menu
