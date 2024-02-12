import React from 'react'
import { Link } from 'react-router-dom'

function Single_stories({ src_s, src_c, title, text }) {
    return (
        <div className="w-3">
            <div className="single-story">
                <div className="story-img">
                    <img src={src_s} alt="" />
                </div>
                <div className="story-content">
                    <div className="user-company-img">
                        <img src={src_c} alt="" />
                    </div>
                    <h2 className='story-content-title'>{title}</h2>
                    <p className='story-contetn-text'>{text}</p>
                    <Link to="/testimonial" className='read-case_1'>Read Case Study</Link>
                    <Link to="/testimonial" className='read-case_2'>Watch Video</Link>

                </div>
            </div>
        </div>
    )
}

export default Single_stories
