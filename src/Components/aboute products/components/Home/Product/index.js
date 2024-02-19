import React from "react";
import {Col, Image, Pagination, Row} from "react-bootstrap";
import './index.css';
import ShowMoreText from "react-show-more-text";

const Product=()=>{
    const productData = [
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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
            hashtages: ["#go", "#World","David","#Semllons","imorts"],
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

    return (
        <Row className="justify-content-center">
            {productData.map((item) => (
                <Col md={6} xl={5} xxl={4} className="mb-4" >
                <div className="product-card p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <Image src={item.user.profile} height={40} roundedCircle/>
                            <div className="ms-2 user-name-handle">
                                <div className="user-name">
                                    {item.user.name}
                                </div>
                                <div className="user-handle">
                                    {item.user.handle}
                                </div>
                            </div>
                        </div>
                        <div className="user-county">
                            <div>Origin:</div>
                            <div>{item.user.contury}</div>
                        </div>
                        <div>
                            <div className="user-follow">
                                <svg width="20" height="20" viewBox="0 0 13 9" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.65921 4.53932C8.11207 4.53932 8.55475 4.41984 8.93129 4.19599C9.30783 3.97213 9.6013 3.65396 9.7746 3.2817C9.94791 2.90945 9.99325 2.49982 9.9049 2.10464C9.81655 1.70945 9.59848 1.34645 9.27826 1.06154C8.95804 0.776625 8.55006 0.582597 8.10591 0.50399C7.66175 0.425382 7.20137 0.465726 6.78298 0.61992C6.3646 0.774114 6.007 1.03523 5.75541 1.37025C5.50381 1.70528 5.36952 2.09916 5.36952 2.50208C5.37146 3.04186 5.61332 3.55904 6.0423 3.94072C6.47128 4.32241 7.05254 4.5376 7.65921 4.53932ZM7.65921 5.55827C6.14232 5.55827 3.0791 6.24587 3.0791 7.59551V8.61446H12.2378V7.59551C12.2378 6.24587 9.17463 5.55827 7.65921 5.55827Z"
                                        fill="#1D5DC7"/>
                                    <path
                                        d="M3.07484 3.85865V2.50049H2.31235V3.85865H0.785156V4.53773H2.31235V5.89589H3.07484V4.53773H4.60204V3.85865H3.07484Z"
                                        fill="#1D5DC7"/>
                                </svg>
                                <span className="ms-2">Follow</span>
                            </div>
                            <div className="user-follow-count mt-2">
                                {item.user.followers} followers
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="position-relative text-center">
                            <div className="product-tag">{item.availability} <div className="dot"/></div>
                            <div>
                                <Image src={item.image}/>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <svg width="20" height="20" viewBox="0 0 12 10" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.13939 0.64502C7.69941 0.645716 7.26604 0.75101 6.87578 0.952035C6.48551 1.15306 6.14979 1.44393 5.89688 1.80014C5.64397 1.44393 5.30825 1.15306 4.91799 0.952035C4.52772 0.75101 4.09435 0.645716 3.65437 0.64502C2.91225 0.685915 2.21429 1.00702 1.70442 1.5421C1.19455 2.07719 0.911656 2.78546 0.914078 3.52085C0.914078 5.01373 1.76627 6.55144 3.37817 7.96756C4.12511 8.62251 4.94443 9.19191 5.82054 9.66493C5.84414 9.67699 5.87032 9.68329 5.89688 9.68329C5.92344 9.68329 5.94962 9.67699 5.97322 9.66493C6.84911 9.19186 7.66821 8.62246 8.41497 7.96756C10.0287 6.55144 10.8797 5.01373 10.8797 3.52085C10.8821 2.78546 10.5992 2.07719 10.0893 1.5421C9.57947 1.00702 8.88151 0.685915 8.13939 0.64502ZM5.89688 9.33209C5.28675 8.99679 1.24614 6.67242 1.24614 3.52085C1.24148 2.8719 1.48867 2.24591 1.93674 1.77196C2.38482 1.29801 2.99961 1.01224 3.65437 0.973563C4.08194 0.973728 4.50178 1.08628 4.87094 1.29971C5.2401 1.51314 5.54532 1.81978 5.75537 2.18825C5.77114 2.21195 5.79261 2.23139 5.81785 2.24485C5.84309 2.2583 5.87131 2.26534 5.89998 2.26534C5.92866 2.26534 5.95688 2.2583 5.98212 2.24485C6.00736 2.23139 6.02883 2.21195 6.0446 2.18825C6.25413 1.82069 6.55837 1.51463 6.92634 1.30126C7.29432 1.08788 7.71288 0.974814 8.13939 0.973563C8.79415 1.01224 9.40895 1.29801 9.85702 1.77196C10.3051 2.24591 10.5523 2.8719 10.5476 3.52085C10.5476 6.67242 6.50701 8.99925 5.89688 9.33209Z"
                                        fill="#336CCC" stroke="#336CCC" stroke-width="0.489058"/>
                                </svg>
                                <div className="text-blue">
                                    {item.like}
                                </div>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"
                                     fill="none">
                                    <path
                                        d="M7.84322 6.59544H4.41657C4.32565 6.59544 4.23846 6.63182 4.17418 6.69659C4.10989 6.76135 4.07377 6.84919 4.07377 6.94078C4.07377 7.03237 4.10989 7.1202 4.17418 7.18497C4.23846 7.24973 4.32565 7.28611 4.41657 7.28611H7.84322C7.93413 7.28611 8.02132 7.24973 8.08561 7.18497C8.1499 7.1202 8.18601 7.03237 8.18601 6.94078C8.18601 6.84919 8.1499 6.76135 8.08561 6.69659C8.02132 6.63182 7.93413 6.59544 7.84322 6.59544ZM8.52881 4.52409H3.73164C3.64073 4.52409 3.55353 4.56047 3.48925 4.62523C3.42496 4.69 3.38884 4.77783 3.38884 4.86942C3.38884 4.96101 3.42496 5.04885 3.48925 5.11361C3.55353 5.17838 3.64073 5.21476 3.73164 5.21476H8.52881C8.61973 5.21476 8.70692 5.17838 8.77121 5.11361C8.83549 5.04885 8.87161 4.96101 8.87161 4.86942C8.87161 4.77783 8.83549 4.69 8.77121 4.62523C8.70692 4.56047 8.61973 4.52409 8.52881 4.52409ZM6.13023 0.727051C3.10268 0.727051 0.647461 2.89103 0.647461 5.55976C0.661554 6.30885 0.856042 7.04328 1.2142 7.69989C1.57236 8.35651 2.08347 8.91567 2.70358 9.32928V11.7738L5.10217 10.3059C5.4408 10.3631 5.78353 10.3923 6.12689 10.3931C9.15511 10.3931 11.6097 8.22916 11.6097 5.56043C11.6097 2.8917 9.15844 0.727051 6.13023 0.727051ZM6.13023 9.70247C5.74088 9.70125 5.35275 9.65873 4.97224 9.57561L3.35853 10.5529L3.37918 8.95139C2.77484 8.61408 2.26825 8.12385 1.90943 7.52907C1.5506 6.93428 1.35194 6.25552 1.33306 5.55976C1.33306 3.27228 3.48112 1.41705 6.13023 1.41705C8.77933 1.41705 10.9274 3.27161 10.9274 5.55976C10.9274 7.84792 8.78 9.70247 6.13023 9.70247Z"
                                        fill="#336CCC" stroke="#336CCC" stroke-width="0.260831"/>
                                </svg>
                                <div className="text-blue">
                                    {item.comment}
                                </div>
                            </div>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 11 10" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.3943 5.18476L6.17432 0.727051V5.20547C4.8687 5.16304 3.58832 5.59151 2.54398 6.42032C1.49965 7.24913 0.753614 8.42887 0.428711 9.76532C0.982306 8.69966 1.82589 7.834 2.85033 7.28031C3.87477 6.72663 5.03293 6.51041 6.17497 6.65962V9.64179L10.3943 5.18476Z"
                                        fill="#336CCC"/>
                                </svg>
                                <div className="text-blue">
                                    {item.share}
                                </div>
                            </div>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 12 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.0687 2.55285H5.86821L4.8123 1.18714C4.5878 0.899252 4.25973 0.727051 3.90341 0.727051H1.38458C0.737126 0.727051 0.204102 1.2929 0.204102 1.97411V9.30506C0.204102 9.98395 0.737126 10.5498 1.38458 10.5498H10.0709C10.7183 10.5498 11.2513 9.98395 11.2513 9.30275V3.78437C11.2492 3.10284 10.7161 2.55285 10.0687 2.55285ZM0.692949 9.30275V1.97411C0.692949 1.5755 1.00581 1.24134 1.38458 1.24134H3.90341C4.10836 1.24134 4.3039 1.34413 4.43354 1.51402L5.23018 2.55285H2.63313C1.98785 2.55285 1.45048 3.10317 1.45048 3.78437V10.0355H1.38458C1.00581 10.0355 0.692949 9.70103 0.692949 9.30275ZM10.7596 9.30275C10.7596 9.69938 10.4467 10.0355 10.068 10.0355H1.94223V3.78437C1.94223 3.38775 2.26016 3.06681 2.63603 3.06681H10.0687C10.4453 3.06681 10.7603 3.38808 10.7603 3.78437L10.7596 9.30275Z"
                                        fill="#336CCC"/>
                                </svg>
                                <div className="text-blue">
                                    {item.download}
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <ShowMoreText lines={3} more={<strong>Show more</strong>}
                                          less={<strong>Show less</strong>}
                                          className="content-css"
                                          anchorClass="show-more-less-clickable"
                                          expanded={false}
                            >{item.description}</ShowMoreText>
                            <div className="product-hast-tag text-blue mt-2">
                                {item.hashtages.join(' ')}
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <div className="product-price mt-2">
                                ${item.minprice} - ${item.maxPrice}
                            </div>
                            <div className="product-order">
                                Min orders: {item.minOrder} Units
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-2">
                            <div className="text-center order-group-chat">
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                     xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                    <rect x="0.828125" y="0.897461" width="25.9107" height="26.0543"
                                          fill="url(#pattern0)"/>
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                 height="1">
                                            <use href="#image0_207_3724"
                                                 transform="matrix(0.00785581 0 0 0.0078125 -0.00277159 0)"/>
                                        </pattern>
                                        <image id="image0_207_3724" width="128" height="128"
                                               href="data:image/png;base64,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"/>
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
                                          fill="url(#pattern0)"/>
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                 height="1">
                                            <use href="#image0_207_3724"
                                                 transform="matrix(0.00785581 0 0 0.0078125 -0.00277159 0)"/>
                                        </pattern>
                                        <image id="image0_207_3724" width="128" height="128"
                                               href="data:image/png;base64,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"/>
                                    </defs>
                                </svg>
                                <div className="text-blue">
                                    Group Import
                                </div>
                            </div>
                            <div className="text-center order-group-chat">
                                <svg width="30" height="30" viewBox="0 0 22 23" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="10.9622" cy="11.023" rx="10.9622" ry="11.023" fill="#FF7313"/>
                                    <path
                                        d="M10.9627 5.14404C11.8456 5.14456 12.7169 5.34613 13.5113 5.73365C14.3057 6.12117 15.0024 6.68456 15.5493 7.38155C16.0962 8.07854 16.4789 8.89102 16.6689 9.75802C16.8589 10.625 16.8511 11.524 16.6462 12.3876C16.4412 13.2511 16.0444 14.0568 15.4856 14.7441C14.9267 15.4314 14.2203 15.9825 13.4194 16.3561C12.6185 16.7297 11.7438 16.916 10.861 16.901C9.97823 16.8861 9.11028 16.6703 8.32229 16.2699L8.23386 16.2221L5.57005 16.8909C5.51878 16.9038 5.46533 16.9054 5.41338 16.8956C5.36143 16.8858 5.31222 16.8647 5.26914 16.8339C5.22606 16.8031 5.19015 16.7633 5.16387 16.7172C5.1376 16.671 5.12158 16.6197 5.11694 16.5668V16.5065L5.12717 16.4455L5.79221 13.7677L5.74617 13.6795C5.41174 13.0175 5.20587 12.2975 5.1396 11.5579L5.12133 11.2772L5.11621 11.023C5.11621 9.46377 5.73218 7.96845 6.82861 6.86594C7.92505 5.76343 9.41213 5.14404 10.9627 5.14404ZM10.9627 5.87891C10.07 5.87876 9.19279 6.11352 8.41825 6.55986C7.64371 7.0062 6.99881 7.64858 6.54763 8.42316C6.09645 9.19774 5.85471 10.0776 5.84642 10.9752C5.83813 11.8728 6.06358 12.757 6.50037 13.5399C6.53428 13.6007 6.55025 13.6701 6.54641 13.7398L6.53618 13.8088L5.98369 16.0289L8.19367 15.4748C8.23859 15.4636 8.28521 15.4611 8.33106 15.4674L8.39756 15.4829L8.46114 15.5115C9.14324 15.8955 9.90378 16.1172 10.6844 16.1595C11.4649 16.2019 12.2448 16.0638 12.964 15.7559C13.6833 15.448 14.3228 14.9784 14.8334 14.3833C15.3441 13.7881 15.7123 13.0832 15.9098 12.3227C16.1073 11.5621 16.1289 10.7662 15.9728 9.99598C15.8167 9.22575 15.4872 8.50174 15.0095 7.87953C14.5318 7.25732 13.9187 6.75347 13.2172 6.40666C12.5157 6.05985 11.7444 5.87931 10.9627 5.87891ZM11.3281 11.7578C11.4194 11.7577 11.5075 11.7919 11.575 11.8537C11.6425 11.9156 11.6845 12.0006 11.6927 12.0921C11.701 12.1835 11.6749 12.2747 11.6196 12.3478C11.5643 12.4209 11.4837 12.4704 11.3939 12.4868L11.3281 12.4927H9.13568C9.04437 12.4929 8.95631 12.4586 8.88883 12.3968C8.82135 12.3349 8.77935 12.2499 8.7711 12.1585C8.76285 12.067 8.78895 11.9758 8.84425 11.9027C8.89955 11.8297 8.98006 11.7801 9.06991 11.7637L9.13568 11.7578H11.3281ZM12.7898 9.55323C12.8811 9.55306 12.9691 9.58727 13.0366 9.64914C13.1041 9.711 13.1461 9.79602 13.1543 9.88746C13.1626 9.9789 13.1365 10.0701 13.0812 10.1432C13.0259 10.2163 12.9454 10.2659 12.8555 10.2822L12.7898 10.2881H9.13568C9.04437 10.2883 8.95631 10.254 8.88883 10.1922C8.82135 10.1303 8.77935 10.0453 8.7711 9.95386C8.76285 9.86242 8.78895 9.77118 8.84425 9.69812C8.89955 9.62506 8.98006 9.57547 9.06991 9.55911L9.13568 9.55323H12.7898Z"
                                        fill="white"/>
                                </svg>
                                <div className="text-blue">
                                    Chat
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>
            ))}
        </Row>
    )
}

export default Product;