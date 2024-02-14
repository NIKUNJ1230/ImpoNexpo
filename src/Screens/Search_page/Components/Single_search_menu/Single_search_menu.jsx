import React from 'react'
import { Link } from 'react-router-dom'
function Single_search_menu({ menu }) {
    return (
        <li>
            <Link to="search_page">
                {menu}
            </Link>
        </li>
    )
}

export default Single_search_menu
