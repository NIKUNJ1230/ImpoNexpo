import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
function Full_left_banner({ path1, path2, path3, title, text }) {
    return (
        <div className="w-2">
            <div className="full-left-banner">
                <div className="full-banner-menu">
                    <h5>{path1}<span><FaChevronRight /></span> {path2} <span><FaChevronRight /></span> <span style={{ color: "#0E72ED" }}>{[path3]}</span></h5>
                </div>
                <div className="full-banner-title">
                    <h2>{title}</h2>
                </div>
                <div className="full-banner-text">
                    <p>{text}</p>
                </div>
                <div className="full-banner-social-icon">
                    <div>
                        <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div>
                        <i className="fa-solid fa-file-arrow-down"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Full_left_banner
