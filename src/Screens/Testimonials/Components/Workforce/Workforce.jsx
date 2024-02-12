import React from 'react'
import "./Workforce.css"
import workforce from "../../../../assets/testimonial/workforce.svg"
function Workforce() {
    return (
        <section>
            <div className="workforce">
                <div className="container">
                    <div className="row">
                        <div className="w-70">
                            <div className="left-workforce">
                                <h2>Connecting the hybrid workforce</h2>
                                <p>Whether you’re returning to the office, working from home, or a mix of both,
                                Zoom has the products you need to connect, share ideas, and get more done together, regardless of location.</p>
                                <button className="workforce-btn">Elevate Your Communications</button>
                            </div>
                        </div>
                        <div className="w-30">
                            <div className="right-workforce">
                                <div className="workspace-img">
                                    <img src={workforce} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Workforce
