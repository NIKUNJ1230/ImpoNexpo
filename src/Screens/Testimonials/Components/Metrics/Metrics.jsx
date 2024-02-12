import React from 'react'
import "./Metrics.css"
import Single_metrics from './Single_metrics'
function Metrics() {
    return (
        <section>
            <div className="container">
                <div className="metrics-title">
                    <h2>success metrics unveiled</h2>
                </div>
            </div>
            <div className="metrics-content">
                <div className="container">
                    <div className="row align-center">
                        <div className="w-30">
                            <div className="left-content">
                                <div className="left-content-title">
                                    <h2>More data.</h2>
                                    <h2>More insights</h2>
                                </div>
                                <div className="left-content-text">
                                    <p >With the size of our SEO databases and speed of our backlink crawler, imagine what you can achieve if you have the insights your competitors don’t.</p>
                                </div>

                                <button type='button' className='left-content-btn'>Learn more</button>

                            </div>
                        </div>
                        <div className="w-70">
                            <div className="right-content">
                                <div className="row">
                                    <Single_metrics title={"25b"} text={"keywords"}/>
                                    <Single_metrics title={"43t"} text={"backlinks"}/>
                                    <Single_metrics title={"25b"} text={"keywords"}/>
                                    <Single_metrics title={"43t"} text={"backlinks"}/>
                                    <Single_metrics title={"808m"} text={"domain profile"}/>
                                    <Single_metrics title={"140"} text={"geo database"}/>
                                    <Single_metrics title={"808m"} text={"domain profile"}/>
                                    <Single_metrics title={"140"} text={"geo database"}/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Metrics
