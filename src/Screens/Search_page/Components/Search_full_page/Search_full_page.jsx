import React, { useEffect, useState } from 'react'
import "./Search_full_page.css"
import Single_search_menu from "../Single_search_menu/Single_search_menu"
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card1 from "../../../../Components/Cards/Card1/Card1";
import { toast } from 'react-toastify';
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
    const [products, setProducts] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch('http://91.107.205.100:97/Admin/Get/All/Product', {
                method: "GET",
            });
            if (response.status === 200 || response.ok) {
                const responseData = await response.json();
                setProducts(responseData.product)
            }
            else {
                toast.error(response?.message || "data not found. Please try again.");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error("error fetching data. Please try again.");
        }
    };
    console.log(products)
    useEffect(() => {
        fetchData();
        // recentProducts()
    }, [])
    // Settings for the slider
    const settings = {
        dots: false, // Show dot indicators
        infinite: true, // Infinite looping
        speed: 500, // Animation speed
        slidesToShow: 2, // Number of slides to show at once
        slidesToScroll: 2, // Number of slides to scroll at once
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

                <div className="search__fullprods_cards">

                    {
                        products.length > 0 ? (
                            products.slice(0, 8).map(product => (
                                <div className="search__fullprods_card">
                                    <Card1
                                        ProductId={product._id}
                                        ProductName={product.ProductName}
                                        ProductDescription={product.ProductDescription}

                                        Like={product.Like}
                                        Comment={product.Comment}
                                        Share={product.Share}
                                        Saved={product.Saved}
                                        StartPrice={product.StartPrice}
                                        EndPrice={product.EndPrice}
                                        MinOrder={product.MinOrder}
                                        HashTags={product.HashTags}
                                    />
                                </div>
                            ))) : (null)
                    }

                </div>

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
