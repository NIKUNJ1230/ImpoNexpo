import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import ShowMoreText from "react-show-more-text";
import { useNavigate } from "react-router-dom";
import LikeShare_Product from "./LikeShare_Product";

export const productData = [
    {
        id: 1,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "Readymade",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },
    {
        id: 2,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "live",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },
    {
        id: 3,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "live",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },
    {
        id: 4,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "Readymade",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },
    {
        id: 5,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "live",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },
    {
        id: 6,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "Readymade",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },
    {
        id: 7,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "live",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },
    {
        id: 8,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "live",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },
    {
        id: 9,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "Readymade",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },
    {
        id: 10,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "live",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },

    {
        id: 11,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "Readymade",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },
    {
        id: 12,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "live",
        image: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
        description: "8 threads with up to 4.1 GHz max boost clock and 4MB L3 cache deliver exceptional processing speeds. AMD Radeon graphics help you perform intensive multimedia tasks.",
        hashtages: ["#go", "#World", "David", "#Semllons", "imorts"],
        minOrder: 20,
        maxPrice: 40,
        minprice: 80,
        title: "HP Laptop 15, AMD Ryzen 3 7320U",
        totalOrders: 22,
        rating: 2.5,
        like: 18,
        comment: 22,
        share: 15,
        download: 10,
    },
];


const filledStar = (
    <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="#FF9017"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
        />
    </svg>
);

const nonFilledStar = (
    <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="#BDC4CD"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.70039 15.3882L15.4478 18.9219L13.9226 12.2619L19.0004 7.78082L12.3137 7.20293L9.70039 0.921875L7.08709 7.20293L0.400391 7.78082L5.47819 12.2619L3.95299 18.9219L9.70039 15.3882Z"
        />
    </svg>
);
const halfFilledStar = (
    <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="#FF9017"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="50%" style={{ stopColor: "#FF9017", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#BDC4CD", stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <path
            d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
            fill="url(#half-fill)"
        />
    </svg>
);

const renderRatingStars = (rating) => {
    const filledStarsCount = Math.floor(rating); // Get the integer part of the rating
    const decimalPart = rating - filledStarsCount; // Get the decimal part of the rating
    const isHalfStar = decimalPart >= 0.5; // Check if the decimal part is greater than or equal to 0.5

    // Create an array to hold the JSX elements for each star
    const stars = [];

    // Fill stars based on the rating
    for (let i = 0; i < 5; i++) {
        if (i < filledStarsCount) {
            // If the index is less than the filled stars count, add a filled star
            stars.push(filledStar);
        } else if (isHalfStar && i === filledStarsCount) {
            // If there's a half star and we're at the index where the half star should be added
            // Add a half-filled star
            stars.push(halfFilledStar);
        } else {
            // Otherwise, add a non-filled star
            stars.push(nonFilledStar);
        }
    }

    return stars;
};

// Usage
// const rating = 3.8; // Example rating value from the database
// const stars = renderRatingStars(rating);

const ListView = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([])


    const handleProducts = async () => {
        try {
            const response = await fetch("http://91.107.205.100:97/Admin/Get/All/Product");
            if (response.statusCode === 200 || response.ok) {
                const responseData = await response.json();
                setProducts(responseData.product)
            }
            else {
                console.log(response?.message)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        handleProducts()
    })

    return (
        <Row>
            {/* <Col md={12} className="list-view-card mb-4" onClick={() => navigate(`/product-details/${item.id}`)}> */}
            {products.map((item) => (
                <Col md={12} className="list-view-card mb-4">
                    <Row>
                        <Col md={3}>
                            <div className="position-relative text-center" onClick={() => navigate(`/product-details/${item._id}`)}>
                                <Image src={`http://91.107.205.100:97${item.ProductImage[0]}`} className="object-fit-cover" height={260} />
                            </div>

                            <LikeShare_Product ProductId={item._id} ProductName={item.ProductName} ProductDescription={item.ProductDescription} Like={item.Like} Comment={item.Comment} Share={item.Share} Saved={item.Saved} />

                            <div className="d-flex justify-content-between align-items-center mt-2">
                                <div className="d-flex align-items-center">

                                    <div className="rating-stars">

                                        {renderRatingStars(item.averageRating).map((star, index) => (
                                            <span key={index}>{star}</span>
                                        ))}
                                    </div>

                                    {/* <svg
                                        width="19"
                                        height="19"
                                        viewBox="0 0 19 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
                                            fill="#FF9017"
                                        />
                                    </svg>
                                    {item.averageRating < 5 &&
                                        <svg
                                            width="19"
                                            height="19"
                                            viewBox="0 0 19 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M9.70039 15.3882L15.4478 18.9219L13.9226 12.2619L19.0004 7.78082L12.3137 7.20293L9.70039 0.921875L7.08709 7.20293L0.400391 7.78082L5.47819 12.2619L3.95299 18.9219L9.70039 15.3882Z"
                                                fill="#BDC4CD"
                                            />
                                        </svg>
                                    } */}
                                    <div className="product-rating">{item.totalRatings}</div>
                                </div>

                                <div className="list-product-order">
                                    <div className="dot" />
                                    {item.totalOrders} orders <div className="dot" /></div>
                            </div>
                        </Col>
                        <Col md={6} className="pe-3">
                            <div className="fs-3 fw-bold">
                                {item.ProductName}
                            </div>
                            <div className="mt-2">
                                <ShowMoreText lines={3} more={<strong>Show more</strong>}
                                    less={<strong>Show less</strong>}
                                    className="content-css"
                                    anchorClass="show-more-less-clickable"
                                    expanded={false}
                                >{item.ProductDescription}</ShowMoreText>
                                <div className="product-hast-tag text-blue mt-2">
                                    {item.HashTags}
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-2 more-description">
                                <ul>
                                    <li>Type: {item.Category}</li>
                                    <li>Age: 0m+</li>
                                    <li>Function: Music, Flash of Light, Electric, Sound Recording, Rattle</li>
                                </ul>
                                <ul>
                                    <li>Material: Polyester</li>
                                    <li>Style: Bed Bell</li>
                                    <li>Usage: Improving Intelligence, Exercise Kids Balan</li>
                                </ul>
                            </div>
                            <div className="mt-2">
                                <div className="product-price mt-2">
                                    US ${item.StartPrice} - US ${item.EndPrice}
                                </div>
                                <div className="product-order mt-1">
                                    Min orders: {item.MinOrder} PCS
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                                <div className="text-center order-group-chat">
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                        <rect x="0.828125" y="0.897461" width="25.9107" height="26.0543"
                                            fill="url(#pattern0)" />
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                height="1">
                                                <use href="#image0_207_3724"
                                                    transform="matrix(0.00785581 0 0 0.0078125 -0.00277159 0)" />
                                            </pattern>
                                            <image id="image0_207_3724" width="128" height="128"
                                                href="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                    <div className="text-blue">
                                        Order it Now
                                    </div>
                                </div>
                                <div className="text-center order-group-chat">
                                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                        <rect x="0.828125" y="0.897461" width="25.9107" height="26.0543"
                                            fill="url(#pattern0)" />
                                        <defs>
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                height="1">
                                                <use href="#image0_207_3724"
                                                    transform="matrix(0.00785581 0 0 0.0078125 -0.00277159 0)" />
                                            </pattern>
                                            <image id="image0_207_3724" width="128" height="128"
                                                href="data:image/png;base64,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" />
                                        </defs>
                                    </svg>
                                    <div className="text-blue">
                                        Group Import
                                    </div>
                                </div>
                                <div className="text-center order-group-chat">
                                    <svg width="30" height="30" viewBox="0 0 22 23" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="10.9622" cy="11.023" rx="10.9622" ry="11.023" fill="#FF7313" />
                                        <path
                                            d="M10.9627 5.14404C11.8456 5.14456 12.7169 5.34613 13.5113 5.73365C14.3057 6.12117 15.0024 6.68456 15.5493 7.38155C16.0962 8.07854 16.4789 8.89102 16.6689 9.75802C16.8589 10.625 16.8511 11.524 16.6462 12.3876C16.4412 13.2511 16.0444 14.0568 15.4856 14.7441C14.9267 15.4314 14.2203 15.9825 13.4194 16.3561C12.6185 16.7297 11.7438 16.916 10.861 16.901C9.97823 16.8861 9.11028 16.6703 8.32229 16.2699L8.23386 16.2221L5.57005 16.8909C5.51878 16.9038 5.46533 16.9054 5.41338 16.8956C5.36143 16.8858 5.31222 16.8647 5.26914 16.8339C5.22606 16.8031 5.19015 16.7633 5.16387 16.7172C5.1376 16.671 5.12158 16.6197 5.11694 16.5668V16.5065L5.12717 16.4455L5.79221 13.7677L5.74617 13.6795C5.41174 13.0175 5.20587 12.2975 5.1396 11.5579L5.12133 11.2772L5.11621 11.023C5.11621 9.46377 5.73218 7.96845 6.82861 6.86594C7.92505 5.76343 9.41213 5.14404 10.9627 5.14404ZM10.9627 5.87891C10.07 5.87876 9.19279 6.11352 8.41825 6.55986C7.64371 7.0062 6.99881 7.64858 6.54763 8.42316C6.09645 9.19774 5.85471 10.0776 5.84642 10.9752C5.83813 11.8728 6.06358 12.757 6.50037 13.5399C6.53428 13.6007 6.55025 13.6701 6.54641 13.7398L6.53618 13.8088L5.98369 16.0289L8.19367 15.4748C8.23859 15.4636 8.28521 15.4611 8.33106 15.4674L8.39756 15.4829L8.46114 15.5115C9.14324 15.8955 9.90378 16.1172 10.6844 16.1595C11.4649 16.2019 12.2448 16.0638 12.964 15.7559C13.6833 15.448 14.3228 14.9784 14.8334 14.3833C15.3441 13.7881 15.7123 13.0832 15.9098 12.3227C16.1073 11.5621 16.1289 10.7662 15.9728 9.99598C15.8167 9.22575 15.4872 8.50174 15.0095 7.87953C14.5318 7.25732 13.9187 6.75347 13.2172 6.40666C12.5157 6.05985 11.7444 5.87931 10.9627 5.87891ZM11.3281 11.7578C11.4194 11.7577 11.5075 11.7919 11.575 11.8537C11.6425 11.9156 11.6845 12.0006 11.6927 12.0921C11.701 12.1835 11.6749 12.2747 11.6196 12.3478C11.5643 12.4209 11.4837 12.4704 11.3939 12.4868L11.3281 12.4927H9.13568C9.04437 12.4929 8.95631 12.4586 8.88883 12.3968C8.82135 12.3349 8.77935 12.2499 8.7711 12.1585C8.76285 12.067 8.78895 11.9758 8.84425 11.9027C8.89955 11.8297 8.98006 11.7801 9.06991 11.7637L9.13568 11.7578H11.3281ZM12.7898 9.55323C12.8811 9.55306 12.9691 9.58727 13.0366 9.64914C13.1041 9.711 13.1461 9.79602 13.1543 9.88746C13.1626 9.9789 13.1365 10.0701 13.0812 10.1432C13.0259 10.2163 12.9454 10.2659 12.8555 10.2822L12.7898 10.2881H9.13568C9.04437 10.2883 8.95631 10.254 8.88883 10.1922C8.82135 10.1303 8.77935 10.0453 8.7711 9.95386C8.76285 9.86242 8.78895 9.77118 8.84425 9.69812C8.89955 9.62506 8.98006 9.57547 9.06991 9.55911L9.13568 9.55323H12.7898Z"
                                            fill="white" />
                                    </svg>
                                    <div className="text-blue">
                                        Chat
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* <Col md={3} className="list-product-user-part">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center">
                                    <Image src={item.user.profile} height={40} roundedCircle />
                                    <div className="ms-2 user-name-handle">
                                        <div className="user-name">
                                            {item.user.name}
                                        </div>
                                        <div className="user-handle list-user-handle">
                                            <span>
                                                {item.user.handle}
                                            </span>
                                            <span className="ms-1">
                                                {item.user.followers} followers
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="list-user-follow">
                                        <svg width="30" height="30" viewBox="0 0 13 9" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.65921 4.53932C8.11207 4.53932 8.55475 4.41984 8.93129 4.19599C9.30783 3.97213 9.6013 3.65396 9.7746 3.2817C9.94791 2.90945 9.99325 2.49982 9.9049 2.10464C9.81655 1.70945 9.59848 1.34645 9.27826 1.06154C8.95804 0.776625 8.55006 0.582597 8.10591 0.50399C7.66175 0.425382 7.20137 0.465726 6.78298 0.61992C6.3646 0.774114 6.007 1.03523 5.75541 1.37025C5.50381 1.70528 5.36952 2.09916 5.36952 2.50208C5.37146 3.04186 5.61332 3.55904 6.0423 3.94072C6.47128 4.32241 7.05254 4.5376 7.65921 4.53932ZM7.65921 5.55827C6.14232 5.55827 3.0791 6.24587 3.0791 7.59551V8.61446H12.2378V7.59551C12.2378 6.24587 9.17463 5.55827 7.65921 5.55827Z"
                                                fill="#1D5DC7" />
                                            <path
                                                d="M3.07484 3.85865V2.50049H2.31235V3.85865H0.785156V4.53773H2.31235V5.89589H3.07484V4.53773H4.60204V3.85865H3.07484Z"
                                                fill="#1D5DC7" />
                                        </svg>
                                        <span className="ms-2 text-blue">Follow</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-4">
                                <div className="fs-5">ProductOrigin:</div>
                                <div className="fs-5 ms-1">{item.user.contury}</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="fs-5">
                                    Available for:
                                </div>
                                <div className="ms-1 fs-5">
                                    {item.availability}
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Col>
            ))}
        </Row>
    )
}

export default ListView;