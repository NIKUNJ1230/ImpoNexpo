import React from 'react'
import "./Search_full_page.css"
import Single_search_menu from "../Single_search_menu/Single_search_menu"
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "../../../../Components/Cards/Card1/Card1";
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className ?? ""} slickcarousal__arrow`}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className ?? ""} slickcarousal__arrow`}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function Search_full_page() {
    // Settings for the slider
    const settings = {
        dots: false, // Show dot indicators
        infinite: true, // Infinite looping
        speed: 500, // Animation speed
        slidesToShow: 4, // Number of slides to show at once
        slidesToScroll: 4, // Number of slides to scroll at once
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1324,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };
    return (
        <section className='search__fullprods_section'>
            <div className="container">
                <div className="search-menu">
                    <ul>
                        <Single_search_menu menu={"Post"} />
                        <Single_search_menu menu={"Campaigns"} />
                        <Single_search_menu menu={"Categories"} />
                        <Single_search_menu menu={"#followings"} />
                        <Single_search_menu menu={"Country"} />
                        <Single_search_menu menu={"Deals abd Discounts"} />
                    </ul>
                </div>

                <Slider {...settings} className="search__fullprods_cards">
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                </Slider>

                <Slider {...settings} className="search__fullprods_cards">
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                </Slider>

                <Slider {...settings} className="search__fullprods_cards">
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                </Slider>

                <Slider {...settings} className="search__fullprods_cards">
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                </Slider>

                <Slider {...settings} className="search__fullprods_cards">
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                    <div className="search__fullprods_card">
                        <Card1 />
                    </div>
                </Slider>

                <div className="loading-search">
                    <Link to="/" className="load-more">
                        Load more
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Search_full_page
