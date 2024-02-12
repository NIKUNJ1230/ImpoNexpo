import React from 'react'
import "./Global.css"
import earth from "../../../../assets/testimonial/Earth.svg"
function Global() {
    return (
        <section>
            <div className="container">
                <div className="global-title">
                    <h2>global success story</h2>
                </div>
            </div>
        <div className="global-map">
            <div className="global-map-img">
                <img src={earth} alt="" />
            </div>
        </div>
        </section>
    )
}

export default Global
