import React from 'react'

function Full_right_banner({ icon, img, company }) {
    return (
        <div className="w-2">
            <div className="full-right-banner">
                <div className="hero-icon">
                    <img src={icon} alt="" />
                    <img src={img} alt="" className='hero-img' />
                    <div className="hero_company">
                        <img src={company} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Full_right_banner
