import React from 'react'
import "./Possible.css"
function Possible() {
    return (
        <section>
            <div className="possible-buttons">
                <button className='possible-btn'>
                    Contact Sales
                </button>
                <button className='possible-btn'>
                    Request a Demo
                </button>
            </div>
            <div className="row">
                <div className="w-2">
                    <div className="possible-left">
                        <div className="container-fluid ">
                            <div className="possible-left-title">
                                <h3>Explore what's possible with Zoom</h3>
                            </div>
                            <div className="possible-left-content">
                                <p>Our customers inspire us! See how organizations are using our platform to connect, communicate, and get more done together.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2">
                    <div className="possible-right">
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">Slide 1</div>
                                <div className="swiper-slide">Slide 2</div>
                                <div className="swiper-slide">Slide 3</div>
                                <div className="swiper-slide">Slide 4</div>
                                <div className="swiper-slide">Slide 5</div>
                                <div className="swiper-slide">Slide 6</div>
                                <div className="swiper-slide">Slide 7</div>
                                <div className="swiper-slide">Slide 8</div>
                                <div className="swiper-slide">Slide 9</div>
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Possible
