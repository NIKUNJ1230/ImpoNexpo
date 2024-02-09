import React from 'react'
import "./AboutUs.css"
import userfirtst from "../../../../assets/images/aboutus1.svg"
import usersecond from "../../../../assets/images/aboutus2.svg"
import usertherd from "../../../../assets/images/aboutus3.svg"
import starone from "../../../../assets/images/retting stars.svg"
import starsecond from "../../../../assets/images/retting stars2.svg"
import Slider from "react-slick";



// import impoone from "../../../../assets/images/importer-1.svg";

function AboutUs() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    //   return (
    //     <Slider {...settings}>
    //       <div>
    //         <h3>1</h3>
    //       </div>
    //       <div>
    //         <h3>2</h3>
    //       </div>
    //       <div>
    //         <h3>3</h3>
    //       </div>
    //       <div>
    //         <h3>4</h3>
    //       </div>
    //       <div>
    //         <h3>5</h3>
    //       </div>
    //       <div>
    //         <h3>6</h3>
    //       </div>
    //     </Slider>
    //   );

    return (
        <div>
            <div className="aboutus-heading-div">
                What are People and Business {""} <br />
                <span className="aboutus-head-span">
                    saying about us?
                </span>
            </div>
            <Slider {...settings}>
                <div className='aboutus-slider-main'>
                    <div className='aboutus-main'>
                        <div className='aboutus-usericon-main'>
                            <div className='aboutus-usericon1-img-main'>
                                <img src={userfirtst} alt="" className='aboutus-usericon1-img' />
                            </div>
                            <div className='aboutus-usericon2-img-main'>
                                <img src={starone} alt="" className='aboutus-usericon2-img' />
                            </div>
                        </div>
                        <div className='aboutus-p2-div-p1'>
                            <p className='aboutus-p2-p'>
                                Floyd Miles
                            </p>
                        </div>
                        <div className='aboutus-p2-div-p2'>
                            <p className='aboutus-p2-p2'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div className='aboutus-main'>
                        <div className='aboutus-usericon-main'>
                            <div className='aboutus-usericon1-img-main'>
                                <img src={usersecond} alt="" className='aboutus-usericon1-img' />
                            </div>
                            <div className='aboutus-usericon2-img-main'>
                                <img src={starsecond} alt="" className='aboutus-usericon2-img' />
                            </div>
                        </div>
                        <div className='aboutus-p2-div-p1'>
                            <p className='aboutus-p2-p'>
                                Ronald Richards
                            </p>
                        </div>
                        <div className='aboutus-p2-div-p2'>
                            <p className='aboutus-p2-p2'>
                                ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div className='aboutus-main'>
                        <div className='aboutus-usericon-main'>
                            <div className='aboutus-usericon1-img-main'>
                                <img src={usertherd} alt="" className='aboutus-usericon1-img' />
                            </div>
                            <div className='aboutus-usericon2-img-main'>
                                <img src={starone} alt="" className='aboutus-usericon2-img' />
                            </div>
                        </div>
                        <div className='aboutus-p2-div-p1'>
                            <p className='aboutus-p2-p'>
                                Savannah Nguyen
                            </p>
                        </div>
                        <div className='aboutus-p2-div-p2'>
                            <p className='aboutus-p2-p2'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='aboutus-slider-main'>
                    <div className='aboutus-main'>
                        <div className='aboutus-usericon-main'>
                            <div className='aboutus-usericon1-img-main'>
                                <img src={userfirtst} alt="" className='aboutus-usericon1-img' />
                            </div>
                            <div className='aboutus-usericon2-img-main'>
                                <img src={starone} alt="" className='aboutus-usericon2-img' />
                            </div>
                        </div>
                        <div className='aboutus-p2-div-p1'>
                            <p className='aboutus-p2-p'>
                                Floyd Miles
                            </p>
                        </div>
                        <div className='aboutus-p2-div-p2'>
                            <p className='aboutus-p2-p2'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div className='aboutus-main'>
                        <div className='aboutus-usericon-main'>
                            <div className='aboutus-usericon1-img-main'>
                                <img src={usersecond} alt="" className='aboutus-usericon1-img' />
                            </div>
                            <div className='aboutus-usericon2-img-main'>
                                <img src={starsecond} alt="" className='aboutus-usericon2-img' />
                            </div>
                        </div>
                        <div className='aboutus-p2-div-p1'>
                            <p className='aboutus-p2-p'>
                                Ronald Richards
                            </p>
                        </div>
                        <div className='aboutus-p2-div-p2'>
                            <p className='aboutus-p2-p2'>
                                ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div className='aboutus-main'>
                        <div className='aboutus-usericon-main'>
                            <div className='aboutus-usericon1-img-main'>
                                <img src={usertherd} alt="" className='aboutus-usericon1-img' />
                            </div>
                            <div className='aboutus-usericon2-img-main'>
                                <img src={starone} alt="" className='aboutus-usericon2-img' />
                            </div>
                        </div>
                        <div className='aboutus-p2-div-p1'>
                            <p className='aboutus-p2-p'>
                                Savannah Nguyen
                            </p>
                        </div>
                        <div className='aboutus-p2-div-p2'>
                            <p className='aboutus-p2-p2'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='aboutus-slider-main'>
                    <div className='aboutus-main'>
                        <div className='aboutus-usericon-main'>
                            <div className='aboutus-usericon1-img-main'>
                                <img src={userfirtst} alt="" className='aboutus-usericon1-img' />
                            </div>
                            <div className='aboutus-usericon2-img-main'>
                                <img src={starone} alt="" className='aboutus-usericon2-img' />
                            </div>
                        </div>
                        <div className='aboutus-p2-div-p1'>
                            <p className='aboutus-p2-p'>
                                Floyd Miles
                            </p>
                        </div>
                        <div className='aboutus-p2-div-p2'>
                            <p className='aboutus-p2-p2'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div className='aboutus-main'>
                        <div className='aboutus-usericon-main'>
                            <div className='aboutus-usericon1-img-main'>
                                <img src={usersecond} alt="" className='aboutus-usericon1-img' />
                            </div>
                            <div className='aboutus-usericon2-img-main'>
                                <img src={starsecond} alt="" className='aboutus-usericon2-img' />
                            </div>
                        </div>
                        <div className='aboutus-p2-div-p1'>
                            <p className='aboutus-p2-p'>
                                Ronald Richards
                            </p>
                        </div>
                        <div className='aboutus-p2-div-p2'>
                            <p className='aboutus-p2-p2'>
                                ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div className='aboutus-main'>
                        <div className='aboutus-usericon-main'>
                            <div className='aboutus-usericon1-img-main'>
                                <img src={usertherd} alt="" className='aboutus-usericon1-img' />
                            </div>
                            <div className='aboutus-usericon2-img-main'>
                                <img src={starone} alt="" className='aboutus-usericon2-img' />
                            </div>
                        </div>
                        <div className='aboutus-p2-div-p1'>
                            <p className='aboutus-p2-p'>
                                Savannah Nguyen
                            </p>
                        </div>
                        <div className='aboutus-p2-div-p2'>
                            <p className='aboutus-p2-p2'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default AboutUs
