import React from 'react'
import { Link } from 'react-router-dom'
function Single_category_page({ img, title, list }) {
    return (
        <div className="w-3">
            <div className="single-category-page">
                <div className="row">
                    <div className="w-70">
                        <div className="single-category-title">
                            <h3>{title}</h3>
                        </div>
                        <div className="category-list">
                            <ul>
                                {list.map((item) => (
                                    <li>
                                        <Link to="category_page">{item}</Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                    <div className="w-30">
                        <div className="single-category-img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single_category_page
