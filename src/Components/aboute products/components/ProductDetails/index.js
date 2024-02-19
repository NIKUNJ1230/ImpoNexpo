import React, {useRef, useState} from "react";
import './index.css';
import {Col, Row, Image, Button, Tabs, Tab, Table} from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {productData} from "../Home/Product/ListView";
import GroupImport from "../GroupImport";
import GroupApproval from "../GroupImport/GroupApproval";
import GroupInvitation from "../GroupImport/GroupInvitaion";
import GroupImportApproved from "../GroupImport/GroupImportApproved";
import PaymentComplete from "../ShoppingCart/PaymentComplete";
import {useNavigate} from "react-router-dom";

const ProductDetails = () => {
    const product = {
        id: 1,
        user: {
            profile: "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
            name: "David",
            handle: "@david-semllons",
            contury: "china",
            followers: "1.5k",
        },
        availability: "Readymade",
        images: [
            {
                original: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
                thumbnail: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
            }, {
                original: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
                thumbnail: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
            }, {
                original: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
                thumbnail: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
            }, {
                original: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
                thumbnail: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
            }, {
                original: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
                thumbnail: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
            }, {
                original: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
                thumbnail: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
            }, {
                original: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
                thumbnail: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
            }, {
                original: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
                thumbnail: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
            }, {
                original: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
                thumbnail: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
            }, {
                original: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
                thumbnail: "https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg",
            }
        ],
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
    };

    const ref = useRef(null);
    const [show, setShow]=useState(false);
    const [showApproval, setShowApproval]=useState(false);
    const [showInvitation, setShowInvitation]=useState(false);
    const [showImportApproved, setShowImportApproved]=useState(false);
    const [showPaymentComplete, setShowPaymentComplete]=useState(false);
    const navigate = useNavigate();
    const handlePrevSlide = () => {
        ref?.current?.slideRight();
    }
    const handleNextSlide = () => {
        ref?.current?.slideLeft();
    }

    return (
        <Row className="single-product">
            <Col md={12}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Image src={product.user.profile} height={50} roundedCircle/>
                        <div className="ms-2 user-name-handle">
                            <div className="user-name">
                                {product.user.name}
                            </div>
                            <div className="user-handle fs-5 mt-2">
                                {product.user.handle}
                            </div>
                        </div>
                    </div>
                    <div className="user-county">
                        <div className="fs-5">Location</div>
                        <div className="mt-2 country-name">Berlin,<br/> Germany</div>
                    </div>
                    <div>
                        <div className="user-follow fs-5">
                            <svg width="24" height="24" viewBox="0 0 13 9" fill="none"
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
                        <div className="user-follow-count fs-5 mt-2">
                            {product.user.followers} followers
                        </div>
                    </div>
                </div>
            </Col>
            <Row className="mt-3">
                <Col lg={5}>
                    <div className="position-relative">
                        <div className="product-offer">
                            -30%
                        </div>
                        <div className="product-favrite">
                            <svg width="39" height="33" viewBox="0 0 39 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="19.9294" cy="16.6251" rx="19.0354" ry="16.3126" fill="#E6EFFB"/>
                                <g clip-path="url(#clip0_237_295)">
                                    <path
                                        d="M30.5049 14.1238L22.9013 13.5619L19.9297 7.5625L16.9581 13.571L9.35449 14.1238L15.1286 18.4104L13.3942 24.7814L19.9297 21.401L26.4652 24.7814L24.7414 18.4104L30.5049 14.1238ZM19.9297 19.7063L15.9534 21.7635L17.0109 17.8848L13.5 15.2747L18.1319 14.9304L19.9297 11.2782L21.7381 14.9394L26.37 15.2838L22.859 17.8938L23.9166 21.7726L19.9297 19.7063Z"
                                        fill="#1071FF"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_237_295">
                                        <rect width="25.3805" height="21.7501" fill="white"
                                              transform="translate(7.23926 5.75)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div onClick={() => handleNextSlide()} className="thumbnail-prev">
                            <svg width="39" height="33" viewBox="0 0 39 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_237_306)">
                                    <path
                                        d="M26.4384 20.9478L19.1573 14.7218L11.8763 20.9478L9.63965 19.031L19.1573 10.8747L28.675 19.031L26.4384 20.9478Z"
                                        fill="#0C0C0C"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_237_306">
                                        <rect width="38.0707" height="32.6252" fill="white"
                                              transform="matrix(1 0 0 -1 0.12207 32.625)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <ImageGallery
                            ref={ref}
                            items={product.images}
                            fullscreen={false}
                            thumbnailPosition={'left'}
                            showFullscreenButton={false}
                            useBrowserFullscreen={false}
                            showPlayButton={false}
                            onSlide={(index) => {
                                console.log('---------------- index', index)
                            }}
                        />
                        <div onClick={() => handlePrevSlide()} className="thumbnail-prev">
                            <svg width="39" height="33" viewBox="0 0 39 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_237_309)">
                                    <path
                                        d="M19.1573 22.125L9.63965 13.9687L11.8763 12.052L19.1573 18.2779L26.4384 12.052L28.675 13.9687L19.1573 22.125Z"
                                        fill="#0C0C0C"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_237_309">
                                        <rect width="38.0707" height="32.6252" fill="white"
                                              transform="matrix(1 0 0 -1 0.12207 33)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="product-zoom">
                            <svg width="39" height="33" viewBox="0 0 39 33" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_237_318)">
                                    <path
                                        d="M25.4813 19.0933H24.2282L23.784 18.7263C25.3386 17.1766 26.2745 15.1647 26.2745 12.9761C26.2745 8.09594 21.6584 4.14014 15.9637 4.14014C10.2689 4.14014 5.65283 8.09594 5.65283 12.9761C5.65283 17.8563 10.2689 21.8121 15.9637 21.8121C18.5176 21.8121 20.8653 21.0101 22.6736 19.6779L23.1019 20.0585V21.1324L31.0333 27.9157L33.3969 25.8903L25.4813 19.0933ZM15.9637 19.0933C12.0138 19.0933 8.82539 16.361 8.82539 12.9761C8.82539 9.59126 12.0138 6.8589 15.9637 6.8589C19.9135 6.8589 23.1019 9.59126 23.1019 12.9761C23.1019 16.361 19.9135 19.0933 15.9637 19.0933ZM16.7568 9.57767H15.1705V12.2964H11.998V13.6558H15.1705V16.3746H16.7568V13.6558H19.9294V12.2964H16.7568V9.57767Z"
                                        fill="#0C0C0C"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_237_318">
                                        <rect width="38.0707" height="32.6252" fill="white"
                                              transform="translate(0.894043 0.0620117)"/>
                                    </clipPath>
                                </defs>
                            </svg>
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
                                {product.like}
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
                                {product.comment}
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
                                {product.share}
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
                                {product.download}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <div className="d-flex align-items-center">
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
                                    d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
                                    fill="#FF9017"
                                />
                            </svg>
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
                                    d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
                                    fill="#FF9017"
                                />
                            </svg>
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
                                    d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
                                    fill="#FF9017"
                                />
                            </svg>
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
                                    d="M9.3 14.564L15.0474 18.0977L13.5222 11.4377L18.6 6.9566L11.9133 6.37871L9.3 0.0976562L6.6867 6.37871L0 6.9566L5.0778 11.4377L3.5526 18.0977L9.3 14.564Z"
                                    fill="#FF9017"
                                />
                            </svg>
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
                            <div className="product-rating">{product.rating}</div>
                        </div>

                        <div className="list-product-order">
                            <div className="dot"/>
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="me-2">
                                <path
                                    d="M5.85401 5.79896H29.0963V23.1962H7.5536L5.85401 24.8925V5.79896ZM5.85401 2.89941C4.25611 2.89941 2.96326 4.20421 2.96326 5.79896L2.94873 31.8948L8.75929 26.0958H29.0963C30.6942 26.0958 32.0016 24.791 32.0016 23.1962V5.79896C32.0016 4.20421 30.6942 2.89941 29.0963 2.89941H5.85401ZM8.75929 17.3971H26.191V20.2967H8.75929V17.3971ZM8.75929 13.0478H26.191V15.9474H8.75929V13.0478ZM8.75929 8.6985H26.191V11.598H8.75929V8.6985Z"
                                    fill="#8B96A5"/>
                            </svg>
                            32 reviews
                        </div>
                        <div className="list-product-order">
                            <div className="dot"/>
                            <svg width="36" height="35" viewBox="0 0 36 35" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="me-2">
                                <path
                                    d="M32.8434 13.7586H25.8852L19.5226 4.24806C19.2466 3.84213 18.7818 3.63916 18.3169 3.63916C17.8521 3.63916 17.3873 3.84213 17.1113 4.26256L10.7487 13.7586H3.79053C2.99158 13.7586 2.33789 14.411 2.33789 15.2083C2.33789 15.3388 2.35242 15.4693 2.396 15.5998L6.08571 29.0392C6.41981 30.257 7.53835 31.1558 8.87478 31.1558H27.7591C29.0955 31.1558 30.2141 30.257 30.5627 29.0392L34.2524 15.5998L34.296 15.2083C34.296 14.411 33.6423 13.7586 32.8434 13.7586ZM18.3169 7.66953L22.3843 13.7586H14.2495L18.3169 7.66953ZM27.7591 28.2563L8.8893 28.2708L5.69349 16.6581H30.9549L27.7591 28.2563ZM18.3169 19.5577C16.719 19.5577 15.4117 20.8624 15.4117 22.4572C15.4117 24.0519 16.719 25.3567 18.3169 25.3567C19.9149 25.3567 21.2222 24.0519 21.2222 22.4572C21.2222 20.8624 19.9149 19.5577 18.3169 19.5577Z"
                                    fill="#8B96A5"/>
                            </svg>
                            154 sold
                        </div>

                    </div>
                </Col>
                <Col lg={4}>
                    <div className="d-flex justify-content-between flex-column h-100 box-boder">
                        <div>
                            <div className="fs-5 fw-medium text-center">
                                Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                            </div>
                            <div className="fs-4 fw-bold text-secondary text-center text-gray mt-3">
                                Important Specifications and Prices
                            </div>
                            <div className="product-price-block mt-3 d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="text-danger fw-medium">
                                        $4.00
                                    </div>
                                    <div className="text-gray">
                                        50-100 pcs
                                    </div>
                                </div>
                                <div className="border-left-1 ps-2">
                                    <div className="fw-medium">
                                        $3.50
                                    </div>
                                    <div className="text-gray">
                                        100-700 pcs
                                    </div>
                                </div>
                                <div className="border-left-1 ps-2">
                                    <div className="text-danger fw-medium">
                                        $3
                                    </div>
                                    <div className="text-gray">
                                        700+ pcs
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <Button variant="outline-primary" onClick={()=>navigate('/cart')}>Add to Cart</Button>
                            <Button variant="outline-primary order-btn-hover" onClick={()=>setShow(!show)}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="27" viewBox="0 0 44 27"
                                         fill="none">
                                        <path
                                            d="M33.8471 5.06543H10.2289C9.22551 5.06543 8.41211 5.55287 8.41211 6.15415V23.5737C8.41211 24.175 9.22551 24.6624 10.2289 24.6624H33.8471C34.8505 24.6624 35.6639 24.175 35.6639 23.5737V6.15415C35.6639 5.55287 34.8505 5.06543 33.8471 5.06543Z"
                                            stroke="#336CCC" stroke-width="1.5" stroke-linejoin="round"/>
                                        <path d="M16.5879 2.88818V6.15435" stroke="#336CCC" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M27.4883 2.88818V6.15435" stroke="#336CCC" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.771 11.0537H29.3053" stroke="#336CCC" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.771 15.4087H25.6717" stroke="#336CCC" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14.771 19.7632H22.0381" stroke="#336CCC" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    Order It Now
                                </div>
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="box-boder h-100 p-5">
                        <div className="fs-4 fw-bold text-center">
                            Group Import it
                        </div>
                        <p className="fs-5 mt-5">
                            Sorry, this Product is not “Group-Import Supported”.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={12}>
                    <Tabs
                        defaultActiveKey="ProductDescription"
                        className="product-tab mb-3"
                    >
                        <Tab eventKey="ProductDescription" title="Product Description">
                            <div className="fs-6 text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                            </div>
                            <Row className="mt-3">
                                <Col lg={3}>
                                    <div>
                                        <Table>
                                            <tbody>
                                            <tr>
                                                <td className="text-gray">Price:</td>
                                                <td>Negotiable</td>
                                            </tr>
                                            <tr className="border-0">
                                                <td className="text-gray border-0">Type:</td>
                                                <td className="border-0">Classic shoes</td>
                                            </tr>
                                            <tr className="border-0">
                                                <td className="text-gray border-0">Material:</td>
                                                <td className="border-0">Plastic material</td>
                                            </tr>
                                            <tr>
                                                <td className="text-gray">Design:</td>
                                                <td>Modern nice</td>
                                            </tr>
                                            <tr className="border-0">
                                                <td className="text-gray border-0">Customization:</td>
                                                <td className="border-0">Customized logo and design custom packages</td>
                                            </tr>
                                            <tr className="border-0">
                                                <td className="text-gray border-0">Protection:</td>
                                                <td className="border-0">Refund Policy</td>
                                            </tr>
                                            <tr>
                                                <td className="text-gray">Warranty:</td>
                                                <td>2 years full warranty</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <Table>
                                        <tbody>
                                        <tr className="border-top">
                                            <td className="table-title">Model</td>
                                            <td>#8786867</td>
                                        </tr>
                                        <tr>
                                            <td className="table-title">Style</td>
                                            <td>Classic style</td>
                                        </tr>
                                        <tr>
                                            <td className="table-title">Certificate</td>
                                            <td>ISO-898921212</td>
                                        </tr>
                                        <tr>
                                            <td className="table-title">Size</td>
                                            <td>34mm x 450mm x 19mm</td>
                                        </tr>
                                        <tr className="border-0">
                                            <td className="table-title border-0">Memory</td>
                                            <td className="border-0">36GB RAM</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <ul className="product-future-list">
                                        <li>
                                            <span className="me-2">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.61449 13.3264L4.53003 9.82888L3.13916 11.0115L8.61449 15.7L20.3683 5.63524L18.9873 4.45264L8.61449 13.3264Z"
                                                        fill="#8B96A5"/>
                                                </svg>
                                            </span>
                                            <span className="text-gray">
                                                Some great feature name here
                                            </span>
                                        </li>
                                        <li>
                                            <span className="me-2">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.61449 13.3264L4.53003 9.82888L3.13916 11.0115L8.61449 15.7L20.3683 5.63524L18.9873 4.45264L8.61449 13.3264Z"
                                                        fill="#8B96A5"/>
                                                </svg>
                                            </span>
                                            <span className="text-gray">
                                                Lorem ipsum dolor sit amet, consectetur
                                            </span>
                                        </li>
                                        <li>
                                            <span className="me-2">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.61449 13.3264L4.53003 9.82888L3.13916 11.0115L8.61449 15.7L20.3683 5.63524L18.9873 4.45264L8.61449 13.3264Z"
                                                        fill="#8B96A5"/>
                                                </svg>
                                            </span>
                                            <span className="text-gray">
                                                Duis aute irure dolor in reprehenderit
                                            </span>
                                        </li>
                                        <li>
                                            <span className="me-2">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.61449 13.3264L4.53003 9.82888L3.13916 11.0115L8.61449 15.7L20.3683 5.63524L18.9873 4.45264L8.61449 13.3264Z"
                                                        fill="#8B96A5"/>
                                                </svg>
                                            </span>
                                            <span className="text-gray">
                                                Some great feature name here
                                            </span>
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={9}>
                                    <div className="fs-4">
                                        Exporter must provide the CARGO DETAILS
                                    </div>
                                    <ol>
                                        <li>Location of the Product/ or address shipping from.</li>
                                        <li>Weight per unit: 3 KG</li>
                                        <li>Dimensions per unit: 0.02x0.01x0.04</li>
                                    </ol>

                                    <Row>
                                        <Col lg={5}>
                                            <div className="fs-5 text-orange fw-medium">
                                                SHIPMENT DETAILS
                                            </div>
                                            <div>
                                                Please Select your the commodity and cargo ready date.
                                            </div>
                                            <div className="mt-2 fs-6 fw-bold text-light-blue">
                                                Select the Commodity you are shipping
                                            </div>
                                            <div className="text-gray">
                                                This is needed to verify Compliance with the carriers. There are some
                                                commodities that we do not ship.
                                            </div>
                                            <div className="mt-2">
                                                <Select
                                                    components={{IndicatorSeparator: null}}
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    placeholder="Select the commodity*"
                                                    onChange={(e) => {
                                                        console.log('---- e', e);
                                                    }}
                                                    isSearchable={true}
                                                    options={[
                                                        {value: '1', label: 'Dry or General Cargo'},
                                                        {value: '2', label: 'Personal or Household Goods (HHG)'},
                                                        {value: '3', label: 'Hazardous Material'},
                                                        {
                                                            value: '4',
                                                            label: 'Fresh products, non-canned vegetable, and fruits'
                                                        },
                                                    ]}
                                                />
                                            </div>
                                        </Col>
                                        <Col lg={7}>
                                            <div className="fs-5 text-orange fw-medium d-flex justify-content-between list-view-card">
                                                ADDITIONAL SERVICES <svg version="1.1" id="Layer_1"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         xlink="http://www.w3.org/1999/xlink" x="0px"
                                                                         y="0px" width="24px" height="24px"
                                                                         viewBox="0 0 122.88 122.88"
                                                                         enable-background="new 0 0 122.88 122.88"
                                                                         space="preserve" fill={"#3AAF3C"}>
                                                <g>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M61.44,0c33.932,0,61.44,27.508,61.44,61.44c0,33.932-27.508,61.439-61.44,61.439 C27.507,122.88,0,95.372,0,61.44C0,27.508,27.507,0,61.44,0L61.44,0z M34.258,63.075c0.824-4.78,6.28-7.44,10.584-4.851 c0.39,0.233,0.763,0.51,1.11,0.827l0.034,0.032c1.932,1.852,4.096,3.778,6.242,5.688l1.841,1.652l21.84-22.91 c1.304-1.366,2.259-2.25,4.216-2.689c6.701-1.478,11.412,6.712,6.663,11.719L59.565,81.108c-2.564,2.735-7.147,2.985-9.901,0.373 c-1.581-1.466-3.297-2.958-5.034-4.467c-3.007-2.613-6.077-5.28-8.577-7.919C34.551,67.595,33.903,65.139,34.258,63.075 L34.258,63.075z"/>
                                                </g>
                                            </svg>
                                            </div>
                                            <div className="fs-5 text-orange fw-medium mt-3">
                                                SHIPMENT DETAILS
                                            </div>
                                            <div>
                                                Please Select your the commodity and cargo ready date.
                                            </div>
                                            <Row>
                                                <Col lg={6}>
                                                    <div className="mt-2 fs-6 fw-bold text-light-blue">
                                                        Select the Commodity you are shipping
                                                    </div>
                                                    <div className="text-gray mt-2">
                                                        This is needed to verify Compliance with the carriers. There are
                                                        some commodities that we do not ship.
                                                    </div>
                                                    <div className="mt-2">
                                                        <Select
                                                            components={{IndicatorSeparator: null}}
                                                            className="basic-single"
                                                            classNamePrefix="select"
                                                            placeholder="Select the commodity*"
                                                            onChange={(e) => {
                                                                console.log('---- e', e);
                                                            }}
                                                            isSearchable={true}
                                                            options={[
                                                                {value: '1', label: 'Dry or General Cargo'},
                                                                {
                                                                    value: '2',
                                                                    label: 'Personal or Household Goods (HHG)'
                                                                },
                                                                {value: '3', label: 'Hazardous Material'},
                                                                {
                                                                    value: '4',
                                                                    label: 'Fresh products, non-canned vegetable, and fruits'
                                                                },
                                                            ]}
                                                        />
                                                    </div>
                                                </Col>
                                                <Col lg={6}>
                                                    <div className="mt-2 fs-6 fw-bold text-light-blue">
                                                        Select the cargo ready date
                                                    </div>
                                                    <div className="text-gray mt-2">
                                                        We will plan the pickup and sailing schedule of your cargo based on this date.
                                                    </div>
                                                    <div>
                                                        <DatePicker selected={new Date()} showIcon onChange={(date) => console.log('---- date', date)} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="OtherProducts" title="Other Products from @HangZhouKuYuan">
                            Tab content for Other Products from @HangZhouKuYuan
                        </Tab>
                        <Tab eventKey="About" title="About @HangZhouKuYuan">
                            Tab content for About @HangZhouKuYuan
                        </Tab>
                        <Tab eventKey="CustomersInteractions" title="Customers Interactions">
                            Tab content for Customers Interactions
                        </Tab>
                        <Tab eventKey="Contact" title="Contact @HangZhouKuYuan">
                            Tab content for Contact @HangZhouKuYuan
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
            <Col md={12} className="mt-4">
                <div className="box-boder">
                <div className="fs-5 fw-bold">
                    Related Products
                </div>
                <Row className="mx-0">
                    {productData.map((item)=>(
                        <Col lg={2}>
                            <Image src={item.image} className="w-100" />
                            <div className="text-secondary mt-2">
                                Xiaomi Redmi 8 Original
                            </div>
                            <div className="text-gray mt-4">
                                $32.00-$40.00
                            </div>
                        </Col>
                    ))}
                </Row>
                </div>
            </Col>
            <GroupImport
                show={show}
                onHide={()=>{
                    setShow(!show);
                    setShowApproval(!showApproval);
                }}
            />
            <GroupApproval
                show={showApproval}
                onHide={()=>{
                    setShowInvitation(!showInvitation);
                    setShowApproval(!showApproval);
                }}
            />
            <GroupInvitation
                show={showInvitation}
                onHide={()=>{
                    setShowInvitation(!showInvitation);
                    setShowImportApproved(!showImportApproved);
                }}
            />
            <GroupImportApproved
                show={showImportApproved}
                onHide={()=>{
                    setShowPaymentComplete(!showPaymentComplete);
                    setShowImportApproved(!showImportApproved);
                }}
            />
            <PaymentComplete
                show={showPaymentComplete}
                onHide={()=>{
                    setShowPaymentComplete(!showPaymentComplete);
                }}
            />
        </Row>
    )
}

export default ProductDetails;