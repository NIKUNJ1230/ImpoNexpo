import React from "react";
import './index.css';
import {Badge, Breadcrumb, Button, Col, Container, Dropdown, Image, NavDropdown, Row} from "react-bootstrap";
import Breadcrumbs from "../Home/Breadcrumbs";
import PolarCargo from './Polar-Air-Cargo.png';

const QuoteResult = () => {

    const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
        <div
            ref={ref}
            className="d-flex align-items-center border rounded-2 p-2"
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            &#x25bc;
        </div>
    ));

    const BreadcrumbsList = ["SZX, Shenzhen Bao'an International Airport", "TPE", "LAX, Los Angeles"]

    return (
        <Container fluid>
        <Row>
            <Col md={12} className="p-4 border-bottom">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-4 fw-bold">
                        Quote Results (21 Results Found)
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="text-light-blue">
                            Looking for assistance?
                        </div>
                        <div className="ms-3">
                            <NavDropdown
                                className="language-drop-down"
                                title={
                                    <div className="d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}
                                             shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
                                             image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"
                                             viewBox="0 0 512 352.427">
                                            <path
                                                d="M279.489 15.177L466.214.125c24.994-2.015 48.139 20.654 45.593 45.592l-15.052 147.386c-2.546 24.936-20.527 45.588-45.592 45.588h-49.425l-70.849 57.68 5.121-57.68h-44.105v3.584c0 28.873-23.633 52.494-52.498 52.494H188.4l4.428 49.869a6.883 6.883 0 01-11.167 6.245l-68.927-56.114H67.732c-14.135 0-26.321-5.651-35.447-14.776-9.431-9.431-15.525-22.607-16.997-37.017L.236 95.59a44.051 44.051 0 01-.098-8.022c1.866-23.151 21.602-42.55 44.527-45.017l.227-.028a45.733 45.733 0 018.327-.105l180.838 14.577c1.949-23.143 21.709-39.905 45.432-41.818zm-1.395 223.491c-24.431-.744-44.198-20.957-44.198-45.565V70.827L52.14 56.176a32.117 32.117 0 00-5.845.051l-.156.014c-16.353 1.735-30.91 15.863-32.244 32.406a30.561 30.561 0 00.044 5.54l15.052 147.386c1.147 11.225 5.829 21.424 13.06 28.655 6.626 6.626 15.457 10.729 25.681 10.729h47.423c1.849 0 3.528.727 4.768 1.911l57.789 47.046-3.681-41.457a6.878 6.878 0 016.851-7.471v-.029h58.525c21.271 0 38.687-17.406 38.687-38.682v-3.607zM91.539 115.33h42.066v-11.853h18.792v11.853h42.22v19.46h-8.668c-1.563 12.293-4.999 22.422-10.839 33.339-4.941 9.222-11.319 18.106-18.726 26.62 11.821 14.139 26.498 26.439 43.971 37.651l-9.666 15.066c-18.344-11.77-33.924-24.73-46.727-39.658-11.453 11.079-24.464 21.399-38.092 30.825l-10.16-14.704c13.487-9.331 26.298-19.523 37.322-30.39-10.16-14.865-17.94-31.548-23.325-50.733l17.241-4.834c4.414 15.737 10.604 29.589 18.561 41.987 5.427-6.571 10.12-13.314 13.828-20.238 4.548-8.506 6.991-15.541 8.531-24.931H91.539v-19.46zm309.049 41.128h-56.383l-7.376 25.17h-27.78c12.027-31.83 25.914-70.051 37.946-101.897 4.332-11.503 9.264-30.564 25.023-30.564 16.336 0 21.761 17.464 26.306 29.529l38.523 103.452h-28.654l-7.605-25.69zm-6.019-24.476L372.46 74.279l-22.17 57.703h44.279z"/>
                                        </svg>
                                        <div className="ms-2">
                                            English
                                        </div>
                                    </div>
                                }
                            >
                                <NavDropdown.Item>English</NavDropdown.Item>
                                <NavDropdown.Item>Gujarati</NavDropdown.Item>
                                <NavDropdown.Item>Hindi</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className="user-icon">
                            S
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={12}>
                <Breadcrumb className="pt-3">
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Quote Results
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Col>
            <Col md={12} className="d-flex">
                <div className="d-flex align-items-center quote-result-tab-box p-0">
                    <div className="d-flex align-items-center h-100 small-screen-result-box">
                        <div className="d-flex flex-column justify-content-center text-center quote-result-tab">
                            <svg height={24} width={24} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                 xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 112.63"
                                 style={{enableBackground: "new 0 0 122.88 112.63"}} space="preserve">
                                <g>
                                    <path
                                        d="M35.58,24.13h3.6v-3.28v0h0.02c0-1.21,0.49-2.31,1.28-3.1l-0.01-0.01c0.78-0.78,1.87-1.27,3.09-1.27h0.01v-0.02h0h6.74 V5.84v0h0.02c0-1.61,0.66-3.07,1.71-4.12c1.05-1.05,2.5-1.69,4.1-1.7V0h0h10.2l0,0v0.02c1.61,0,3.07,0.66,4.12,1.71 c1.04,1.05,1.69,2.5,1.7,4.1h0.01v0v10.63h6.74h0v0.02c1.21,0,2.31,0.49,3.1,1.29c0.78,0.78,1.27,1.87,1.27,3.07v0.01h0.01v0v3.28 h3.6v-0.02l0,0v0.02c1.31,0,2.49,0.53,3.35,1.38l0.01-0.01c0.85,0.85,1.37,2.03,1.38,3.35h0.02v0v18.88v0h-0.02 c0,0.46-0.07,0.91-0.19,1.34l13.62,6.62L91.17,69.84v14.12c2.13-1.07,3.81-2.66,5.39-4.16c3.19-3.02,6.1-5.78,11.13-5.84 c5.66-0.06,7.49,2.86,11.39,5.86c0.63,0.49,1.28,0.99,2.15,1.62l0.1,0.07c1.67,1.21,2.05,3.55,0.83,5.22 c-1.21,1.68-3.55,2.05-5.23,0.84l-0.1-0.07c-0.65-0.47-1.49-1.12-2.32-1.76c-2.86-2.21-3.68-4.34-6.77-4.31 c-2.06,0.02-3.96,1.82-6.03,3.79c-3.91,3.71-8.26,7.83-16.81,7.44c-7.23,0.33-11.45-2.57-14.95-5.72H51.79 c-3.66,2.75-7.64,5.25-13.43,5.18c-6.62,0.08-10.88-3.2-15-6.38c-2.86-2.21-5.63-4.34-8.72-4.31c-2.06,0.02-3.96,1.82-6.03,3.79 c-0.77,0.73-1.56,1.48-2.44,2.23C4.6,88.8,2.24,88.61,0.9,87.04c-1.34-1.57-1.16-3.93,0.41-5.27c0.72-0.62,1.44-1.3,2.15-1.97 c3.19-3.02,6.1-5.78,11.13-5.84c5.66-0.06,9.44,2.86,13.34,5.86c1.76,1.36,3.55,2.73,5.5,3.67V69.38L21.6,55.46l9.9-5.32 c-0.41-0.7-0.65-1.52-0.65-2.39h-0.01v0V28.86l0,0h0.01c0-1.32,0.53-2.51,1.38-3.36c0.15-0.15,0.31-0.28,0.47-0.4 C33.49,24.5,34.49,24.14,35.58,24.13l0-0.02h0V24.13L35.58,24.13z M38.36,104.59h0.04c4.05,0.06,7.27-2.42,10.39-4.83 c3.9-3.01,7.68-5.93,13.34-5.86c5.03,0.05,7.94,2.81,11.13,5.84c2.83,2.69,5.98,5.67,11.46,5.39c0.07,0,0.13,0,0.2,0 c0.07,0,0.13,0,0.2,0c5.47,0.29,8.62-2.7,11.46-5.39c3.19-3.02,6.1-5.78,11.13-5.84c5.66-0.06,7.49,2.85,11.39,5.86 c0.63,0.49,1.28,0.99,2.15,1.62l0,0l0.09,0.07c1.67,1.2,2.05,3.54,0.85,5.21c-1.21,1.67-3.54,2.05-5.21,0.85l-0.1-0.07l-0.01-0.01 l-0.01,0.01c-0.65-0.47-1.49-1.12-2.32-1.76c-2.86-2.21-3.68-4.34-6.77-4.31c-2.06,0.02-3.96,1.82-6.03,3.79 c-3.91,3.71-8.26,7.83-16.81,7.44c-8.54,0.39-12.89-3.73-16.81-7.44c-2.08-1.97-3.97-3.76-6.03-3.79 c-3.08-0.03-5.86,2.11-8.72,4.31c-4.12,3.18-8.38,6.46-15,6.38c-6.62,0.08-10.88-3.2-15-6.38c-2.86-2.21-5.63-4.34-8.72-4.31 c-2.06,0.02-3.96,1.82-6.03,3.79c-0.77,0.73-1.56,1.48-2.44,2.23c-1.57,1.34-3.93,1.16-5.27-0.41c-1.34-1.57-1.16-3.93,0.41-5.27 c0.72-0.62,1.44-1.3,2.15-1.97c3.19-3.02,6.1-5.78,11.13-5.84c5.66-0.06,9.44,2.85,13.34,5.86c3.12,2.4,6.34,4.89,10.39,4.83H38.36 L38.36,104.59z M41.08,44.99L61,34.28l22.05,10.71h1.12V31.6h-4.27c-0.11,0.01-0.22,0.01-0.34,0.01c-2.07,0-3.75-1.68-3.75-3.75 v-3.9h-7.38c-2.07,0-3.75-1.68-3.75-3.75V7.5h-6.88v12.72c0,2.07-1.68,3.75-3.75,3.75h-7.38v3.9h-0.01c0,2.06-1.67,3.73-3.73,3.73 h-4.6v13.39H41.08L41.08,44.99z"/>
                                </g>
                            </svg>
                            Ocean FCL
                        </div>
                        <div className="d-flex flex-column justify-content-center text-center quote-result-tab">
                            <svg height={22} width={22} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                 xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 112.07"
                                 style={{enableBackground: "new 0 0 122.88 112.07"}} space="preserve">
                                <g>
                                    <path className="st0" style={{fillRule: "evenodd", clipRule: 'evenodd'}}
                                          d="M61.44,0L0,60.18l14.99,7.87L61.04,19.7l46.85,48.36l14.99-7.87L61.44,0L61.44,0z M18.26,69.63L18.26,69.63 L61.5,26.38l43.11,43.25h0v0v42.43H73.12V82.09H49.49v29.97H18.26V69.63L18.26,69.63L18.26,69.63z"/>
                                </g>
                            </svg>
                            Ocean LCL
                        </div>
                        <div className="d-flex flex-column justify-content-center text-center quote-result-tab air">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 viewBox="0 0 122.88 116.02" style={{enableBackground: "new 0 0 122.88 116.02"}}
                                 space="preserve">
                                <g>
                                    <path className="st0" style={{fillRule: "evenodd", clipRule: "evenodd"}}
                                          d="M38.14,115.91c0-10.58,5.81-15.56,13.46-21.3l0-27.68L1.37,89.25c0-19.32-6.57-17.9,9.05-27.72l0.15-0.09 V49.37h11.22v5.08l8.24-5.13V35.8h11.22v6.54l10.36-6.45V7.3c0-4.02,4.37-7.3,9.7-7.3l0,0c5.34,0,9.7,3.29,9.7,7.3v28.58 l10.47,6.52V35.8l11.22,0v13.59l8.24,5.13v-5.15l11.21,0v12.14c15.56,9.67,9.61,7.78,9.61,27.74L71.01,66.91v27.58 c8.14,5.43,13.46,9.6,13.46,21.43l-12.81,0.11c-2.93-2.3-4.96-4.05-6.52-5.26c-1.18,0.39-2.48,0.6-3.83,0.6h0 c-1.53,0-2.99-0.27-4.28-0.76c-1.68,1.22-3.9,3.04-7.21,5.42L38.14,115.91L38.14,115.91L38.14,115.91z"/>
                                </g>
                            </svg>
                            Air
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2 small-screen-result-box-2">
                        <div className="quote-result-tab">
                            <div className="d-flex align-items-center">
                                <svg height={15} className="m-0" width={15} version="1.1" id="Layer_1"
                                     xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 116.02"
                                     style={{enableBackground: "new 0 0 122.88 116.02"}} space="preserve">
                                    <g>
                                        <path className="st0" style={{fillRule: "evenodd", clipRule: "evenodd"}}
                                              d="M38.14,115.91c0-10.58,5.81-15.56,13.46-21.3l0-27.68L1.37,89.25c0-19.32-6.57-17.9,9.05-27.72l0.15-0.09 V49.37h11.22v5.08l8.24-5.13V35.8h11.22v6.54l10.36-6.45V7.3c0-4.02,4.37-7.3,9.7-7.3l0,0c5.34,0,9.7,3.29,9.7,7.3v28.58 l10.47,6.52V35.8l11.22,0v13.59l8.24,5.13v-5.15l11.21,0v12.14c15.56,9.67,9.61,7.78,9.61,27.74L71.01,66.91v27.58 c8.14,5.43,13.46,9.6,13.46,21.43l-12.81,0.11c-2.93-2.3-4.96-4.05-6.52-5.26c-1.18,0.39-2.48,0.6-3.83,0.6h0 c-1.53,0-2.99-0.27-4.28-0.76c-1.68,1.22-3.9,3.04-7.21,5.42L38.14,115.91L38.14,115.91L38.14,115.91z"/>
                                    </g>
                                </svg>
                                <div className="fs-6 fw-bold ms-2">
                                    Origin
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <svg version="1.1" width={24} height={24} id="Layer_1"
                                     xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 55.2 38.4"
                                     style={{enableBackground: "new 0 0 55.2 38.4"}} space="preserve">
                                    <g>
                                        <path className="st0" fill="#DE2910"
                                              d="M3.01,0h49.17c1.66,0.01,3.01,1.37,3.01,3.03v32.33c0,1.66-1.35,3.02-3.01,3.03L3,38.4 c-1.65-0.02-3-1.38-3-3.03V3.03C0,1.37,1.35,0.01,3.01,0L3.01,0z"/>
                                        <polygon className="st1" fill="#FFDE00"
                                                 points="8.4,3.84 11.79,14.26 2.92,7.82 13.88,7.82 5.01,14.26 8.4,3.84"/>
                                        <polygon className="st1" fill="#FFDE00"
                                                 points="18.75,2.07 18.43,5.71 16.55,2.58 19.91,4.01 16.35,4.83 18.75,2.07"/>
                                        <polygon className="st1" fill="#FFDE00"
                                                 points="23.22,6.34 21.51,9.57 20.99,5.96 23.54,8.58 19.94,7.95 23.22,6.34"/>
                                        <polygon className="st1" fill="#FFDE00"
                                                 points="23.64,12.78 20.77,15.03 21.77,11.52 23.02,14.95 19.99,12.91 23.64,12.78"/>
                                        <polygon className="st1" fill="#FFDE00"
                                                 points="18.68,15.48 18.51,19.13 16.5,16.08 19.92,17.37 16.4,18.34 18.68,15.48"/>
                                    </g>
                                </svg>
                                <div className="ms-2">
                                    Chengdu Shuangliu International Airport
                                </div>
                            </div>
                        </div>
                        <div className="quote-result-tab">
                            <div className="d-flex align-items-center">
                                <div>
                                    <div className="d-flex align-items-center">
                                        <svg height={24} width={24} id="Layer_1" data-name="Layer 1"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 106.35">
                                            <title>residential-apartments</title>
                                            <path
                                                d="M35.57,103.26H26.06V88.52a1,1,0,0,0-1-1H13.09a1.06,1.06,0,0,0-1.06,1v14.74H10.34v3.09h102.2v-3.09h-1.69V88.52a1.06,1.06,0,0,0-1.06-1H97.87a1,1,0,0,0-1.05,1v14.74H74.44V82.42A1.41,1.41,0,0,0,73,81H49.75a1.41,1.41,0,0,0-1.41,1.41v20.84H32.49V32.87H3v70.39h7.39v3.09H1.41A1.41,1.41,0,0,1,0,104.94V32a2,2,0,0,1,.61-1.46h0a2,2,0,0,1,1.45-.6H32.49V2.25A2.47,2.47,0,0,1,33.21.73h0A2.45,2.45,0,0,1,35,0H87.83a2.42,2.42,0,0,1,1.74.72l.11.12a2.45,2.45,0,0,1,.63,1.63V29.92h30.5a2,2,0,0,1,1.45.6h0a2,2,0,0,1,.61,1.46v73a1.41,1.41,0,0,1-1.41,1.41h-8.93v-3.09h7.39V32.87H90.3v70.39H87.21V3.08H35.57V103.26ZM16.43,39H8.81c-.06,0-.12.08-.12.18v4.94c0,.1.06.19.12.19h7.62c.06,0,.12-.08.12-.19V39.13c0-.1-.06-.18-.12-.18Zm0,34.27H8.81c-.06,0-.12.09-.12.18v4.94c0,.09.06.19.12.19h7.62c.06,0,.12-.09.12-.19V73.4c0-.09-.06-.18-.12-.18Zm12.86,0H21.67c-.07,0-.12.09-.12.18v4.94c0,.09.05.19.12.19h7.62c.06,0,.11-.09.11-.19V73.4c0-.09,0-.18-.11-.18ZM16.43,61.79H8.81c-.06,0-.12.09-.12.19v4.94c0,.1.06.19.12.19h7.62c.06,0,.12-.08.12-.19V62c0-.11-.06-.19-.12-.19Zm0-11.42H8.81c-.06,0-.12.08-.12.19V55.5c0,.09.06.19.12.19h7.62c.06,0,.12-.09.12-.19V50.56c0-.11-.06-.19-.12-.19ZM29.29,39H21.67c-.07,0-.12.08-.12.18v4.94c0,.1.05.19.12.19h7.62c.06,0,.11-.08.11-.19V39.13c0-.1,0-.18-.11-.18Zm0,22.84H21.67c-.07,0-.12.09-.12.19v4.94c0,.1.05.19.12.19h7.62c.06,0,.11-.08.11-.19V62c0-.11,0-.19-.11-.19Zm0-11.42H21.67c-.07,0-.12.08-.12.19V55.5c0,.09.05.19.12.19h7.62c.06,0,.11-.09.11-.19V50.56c0-.11,0-.19-.11-.19ZM106.45,39h7.62c.06,0,.12.08.12.18v4.94c0,.1-.06.19-.12.19h-7.62c-.06,0-.12-.08-.12-.19V39.13c0-.1.06-.18.12-.18Zm0,34.27h7.62c.06,0,.12.09.12.18v4.94c0,.09-.06.19-.12.19h-7.62c-.06,0-.12-.09-.12-.19V73.4c0-.09.06-.18.12-.18Zm-12.86,0h7.62c.07,0,.12.09.12.18v4.94c0,.09,0,.19-.12.19H93.59c-.06,0-.11-.09-.11-.19V73.4c0-.09,0-.18.11-.18Zm12.86-11.43h7.62c.06,0,.12.09.12.19v4.94c0,.1-.06.19-.12.19h-7.62c-.06,0-.12-.08-.12-.19V62c0-.11.06-.19.12-.19Zm0-11.42h7.62c.06,0,.12.08.12.19V55.5c0,.09-.06.19-.12.19h-7.62c-.06,0-.12-.09-.12-.19V50.56c0-.11.06-.19.12-.19ZM93.59,39h7.62c.07,0,.12.08.12.18v4.94c0,.1,0,.19-.12.19H93.59c-.06,0-.11-.08-.11-.19V39.13c0-.1,0-.18.11-.18Zm0,22.84h7.62c.07,0,.12.09.12.19v4.94c0,.1,0,.19-.12.19H93.59c-.06,0-.11-.08-.11-.19V62c0-.11,0-.19.11-.19Zm0-11.42h7.62c.07,0,.12.08.12.19V55.5c0,.09,0,.19-.12.19H93.59c-.06,0-.11-.09-.11-.19V50.56c0-.11,0-.19.11-.19ZM43,10.84h8.29a.24.24,0,0,1,.24.23v8.3a.24.24,0,0,1-.24.23H43a.23.23,0,0,1-.23-.23v-8.3a.23.23,0,0,1,.23-.23Zm28.51,0h8.29a.24.24,0,0,1,.24.23v8.3a.24.24,0,0,1-.24.23H71.5a.24.24,0,0,1-.24-.23v-8.3a.24.24,0,0,1,.24-.23Zm-14.26,0h8.3a.23.23,0,0,1,.23.23v8.3a.23.23,0,0,1-.23.23h-8.3a.24.24,0,0,1-.23-.23v-8.3a.24.24,0,0,1,.23-.23ZM43,28.8h8.29a.24.24,0,0,1,.24.24v8.29a.24.24,0,0,1-.24.24H43a.23.23,0,0,1-.23-.24V29A.23.23,0,0,1,43,28.8Zm28.51,0h8.29A.24.24,0,0,1,80,29v8.29a.24.24,0,0,1-.24.24H71.5a.24.24,0,0,1-.24-.24V29a.24.24,0,0,1,.24-.24Zm-14.26,0h8.3a.23.23,0,0,1,.23.24v8.29a.23.23,0,0,1-.23.24h-8.3a.24.24,0,0,1-.23-.24V29a.24.24,0,0,1,.23-.24ZM43,64.73h8.29a.24.24,0,0,1,.24.24v8.29a.24.24,0,0,1-.24.24H43a.23.23,0,0,1-.23-.24V65a.23.23,0,0,1,.23-.24Zm28.51,0h8.29A.24.24,0,0,1,80,65v8.29a.24.24,0,0,1-.24.24H71.5a.24.24,0,0,1-.24-.24V65a.24.24,0,0,1,.24-.24Zm-14.26,0h8.3a.23.23,0,0,1,.23.24v8.29a.23.23,0,0,1-.23.24h-8.3a.24.24,0,0,1-.23-.24V65a.24.24,0,0,1,.23-.24ZM43,46.77h8.29a.24.24,0,0,1,.24.23v8.3a.23.23,0,0,1-.24.23H43a.23.23,0,0,1-.23-.23V47a.23.23,0,0,1,.23-.23Zm28.51,0h8.29A.24.24,0,0,1,80,47v8.3a.23.23,0,0,1-.24.23H71.5a.23.23,0,0,1-.24-.23V47a.24.24,0,0,1,.24-.23Zm-14.26,0h8.3a.23.23,0,0,1,.23.23v8.3a.23.23,0,0,1-.23.23h-8.3A.23.23,0,0,1,57,55.3V47a.24.24,0,0,1,.23-.23Z"/>
                                        </svg>
                                        <div className="ms-2 fs-6 fw-bold">
                                            Destination
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <svg version="1.1" className="m-0" width={20} height={20} id="Layer_1"
                                             xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 55.2 38.4"
                                             style={{enableBackground: "new 0 0 55.2 38.4"}} space="preserve">
                                            <g>
                                                <path className="st0" fill="#DE2910"
                                                      d="M3.01,0h49.17c1.66,0.01,3.01,1.37,3.01,3.03v32.33c0,1.66-1.35,3.02-3.01,3.03L3,38.4 c-1.65-0.02-3-1.38-3-3.03V3.03C0,1.37,1.35,0.01,3.01,0L3.01,0z"/>
                                                <polygon className="st1" fill="#FFDE00"
                                                         points="8.4,3.84 11.79,14.26 2.92,7.82 13.88,7.82 5.01,14.26 8.4,3.84"/>
                                                <polygon className="st1" fill="#FFDE00"
                                                         points="18.75,2.07 18.43,5.71 16.55,2.58 19.91,4.01 16.35,4.83 18.75,2.07"/>
                                                <polygon className="st1" fill="#FFDE00"
                                                         points="23.22,6.34 21.51,9.57 20.99,5.96 23.54,8.58 19.94,7.95 23.22,6.34"/>
                                                <polygon className="st1" fill="#FFDE00"
                                                         points="23.64,12.78 20.77,15.03 21.77,11.52 23.02,14.95 19.99,12.91 23.64,12.78"/>
                                                <polygon className="st1" fill="#FFDE00"
                                                         points="18.68,15.48 18.51,19.13 16.5,16.08 19.92,17.37 16.4,18.34 18.68,15.48"/>
                                            </g>
                                        </svg>
                                        <div className="ms-2">
                                            Keelar
                                        </div>
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <div className="fs-6 fw-bold">
                                        Zip Code
                                    </div>
                                    <div>
                                        93530
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="quote-result-tab border-0">
                            <div className="d-flex align-items-center">
                                <svg width="12" height="12" className="m-0" viewBox="0 0 12 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_129_4183)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M0.282152 2.39258L5.90715 0.142578L6 0.374697L6.09285 0.142578L11.7178 2.39258C11.8128 2.43055 11.875 2.52248 11.875 2.6247C11.875 2.72693 11.8128 2.81885 11.7178 2.85682L6.09285 5.10682C6.03325 5.13066 5.96675 5.13066 5.90715 5.10682L0.282152 2.85682C0.187238 2.81885 0.125 2.72693 0.125 2.6247C0.125 2.52248 0.187238 2.43055 0.282152 2.39258ZM6 0.643956L1.04815 2.6247L6 4.60544L10.9519 2.6247L6 0.643956Z"
                                              fill="#13171C"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M0.467848 2.39258L6.09285 4.64258C6.18776 4.68055 6.25 4.77248 6.25 4.8747V11.6247C6.25 11.7077 6.20885 11.7853 6.14016 11.8318C6.07146 11.8783 5.98417 11.8877 5.90715 11.8569L0.282152 9.60682C0.187238 9.56886 0.125 9.47693 0.125 9.3747V2.6247H0.375L0.467848 2.39258ZM0.625 2.99396V9.20544L5.75 11.2555V5.04396L0.625 2.99396Z"
                                              fill="#13171C"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M6.25 5.04396V11.2555L11.375 9.20544V2.99396L6.25 5.04396ZM11.625 2.6247L11.5322 2.39258L5.90715 4.64258C5.81224 4.68055 5.75 4.77248 5.75 4.8747V11.6247C5.75 11.7077 5.79115 11.7853 5.85984 11.8318C5.92854 11.8783 6.01583 11.8877 6.09285 11.8569L11.7178 9.60682C11.8128 9.56886 11.875 9.47693 11.875 9.3747V2.6247H11.625Z"
                                              fill="#13171C"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3.23621 1.29491C3.28749 1.16671 3.43298 1.10436 3.56118 1.15564L9.18618 3.40564C9.31437 3.45692 9.37673 3.60241 9.32545 3.73061C9.27417 3.8588 9.12868 3.92116 9.00048 3.86988L3.37548 1.61988C3.24728 1.5686 3.18493 1.42311 3.23621 1.29491Z"
                                              fill="#13171C"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M10.5447 8.15722C10.596 8.28541 10.5336 8.43091 10.4054 8.48219L9.46791 8.85719C9.33972 8.90846 9.19423 8.84611 9.14295 8.71791C9.09167 8.58972 9.15402 8.44423 9.28222 8.39295L10.2197 8.01795C10.3479 7.96667 10.4934 8.02902 10.5447 8.15722Z"
                                              fill="#13171C"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_129_4183">
                                            <rect width="12" height="12" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div className="fs-6 fw-bold ms-2">
                                    Cargo
                                </div>
                            </div>
                            <div>
                                10pcs - Charg. Wt. 30kg - 2X1X4cm
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-button search-btn me-auto">
                    SEARCH RATES
                </div>
            </Col>
            <Col md={12} className="mt-4">
                <div className="d-flex align-items-center justify-content-end">
                    <div className="fs-5 fw-bold text-light-blue">
                        Transparent Pricing Policy
                    </div>
                    <Dropdown className="ms-3">
                        <Dropdown.Toggle as={CustomToggle}>
                            <div className="text-gray">Currency:</div>
                            <div className="mx-2">USD</div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">USD</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Rupees</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="ms-3">
                        <Dropdown.Toggle as={CustomToggle}>
                            <div className="text-gray">Sort by:</div>
                            <div className="mx-2">Closest to Destination</div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="1">USD</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Rupees</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Col>
            <Col md={12} className="mt-3">
                {Array.from({length: 4}).map((i,index)=>(
                <Row className="list-view-card mb-3">
                    <Col md={7}>
                    <Breadcrumbs list={BreadcrumbsList} className="text-ellips"/>
                    <Row className="mt-2">
                        <Col md={6}>
                        <div className="d-flex align-items-center">
                            <svg version="1.1" width={24} height={24} id="Layer_1"
                                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 55.2 38.4"
                                 style={{enableBackground: "new 0 0 55.2 38.4"}} space="preserve">
                                <g>
                                    <path className="st0" fill="#DE2910"
                                          d="M3.01,0h49.17c1.66,0.01,3.01,1.37,3.01,3.03v32.33c0,1.66-1.35,3.02-3.01,3.03L3,38.4 c-1.65-0.02-3-1.38-3-3.03V3.03C0,1.37,1.35,0.01,3.01,0L3.01,0z"/>
                                    <polygon className="st1" fill="#FFDE00"
                                             points="8.4,3.84 11.79,14.26 2.92,7.82 13.88,7.82 5.01,14.26 8.4,3.84"/>
                                    <polygon className="st1" fill="#FFDE00"
                                             points="18.75,2.07 18.43,5.71 16.55,2.58 19.91,4.01 16.35,4.83 18.75,2.07"/>
                                    <polygon className="st1" fill="#FFDE00"
                                             points="23.22,6.34 21.51,9.57 20.99,5.96 23.54,8.58 19.94,7.95 23.22,6.34"/>
                                    <polygon className="st1" fill="#FFDE00"
                                             points="23.64,12.78 20.77,15.03 21.77,11.52 23.02,14.95 19.99,12.91 23.64,12.78"/>
                                    <polygon className="st1" fill="#FFDE00"
                                             points="18.68,15.48 18.51,19.13 16.5,16.08 19.92,17.37 16.4,18.34 18.68,15.48"/>
                                </g>
                            </svg>
                            <div className="text-gray fw-medium ms-2">
                                CHINA
                            </div>
                        </div>
                        </Col>
                        <Col md={6}>
                            <div className="flight-timing text-end">
                            <div className="d-flex align-items-center">
                                <svg version="1.1" width={24} height={24} id="Layer_1"
                                     xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 55.2 38.4"
                                     style={{enableBackground: "new 0 0 55.2 38.4"}} space="preserve">
                                    <g>
                                        <path className="st0" fill="#DE2910"
                                              d="M3.01,0h49.17c1.66,0.01,3.01,1.37,3.01,3.03v32.33c0,1.66-1.35,3.02-3.01,3.03L3,38.4 c-1.65-0.02-3-1.38-3-3.03V3.03C0,1.37,1.35,0.01,3.01,0L3.01,0z"/>
                                        <polygon className="st1" fill="#FFDE00"
                                                 points="8.4,3.84 11.79,14.26 2.92,7.82 13.88,7.82 5.01,14.26 8.4,3.84"/>
                                        <polygon className="st1" fill="#FFDE00"
                                                 points="18.75,2.07 18.43,5.71 16.55,2.58 19.91,4.01 16.35,4.83 18.75,2.07"/>
                                        <polygon className="st1" fill="#FFDE00"
                                                 points="23.22,6.34 21.51,9.57 20.99,5.96 23.54,8.58 19.94,7.95 23.22,6.34"/>
                                        <polygon className="st1" fill="#FFDE00"
                                                 points="23.64,12.78 20.77,15.03 21.77,11.52 23.02,14.95 19.99,12.91 23.64,12.78"/>
                                        <polygon className="st1" fill="#FFDE00"
                                                 points="18.68,15.48 18.51,19.13 16.5,16.08 19.92,17.37 16.4,18.34 18.68,15.48"/>
                                    </g>
                                </svg>
                                <div className="text-gray fw-medium ms-2">
                                    UNITED STATES
                                </div>
                            </div>
                            <Badge bg="warning" className="mt-2" text="dark">
                                261km away
                            </Badge>
                            </div>
                        </Col>
                    </Row>
                    </Col>
                    <Col md={5} className="justify-content-end">
                        <div className="flight-timing">
                        <div className="d-flex align-items-center">
                            <div className="text-gray me-2">
                                Valid Untile:
                            </div>
                            <div className="fw-bold">
                                10 Jan 2024 <span className="fw-bold text-secondary">ⓘ</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="text-gray me-2">
                                Estd.Transit Time:
                            </div>
                            <div className="fw-bold">
                                1 day
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="text-gray me-2">
                                Departs:
                            </div>
                            <div className="fw-bold">
                                Sat, Sun <span className="fw-bold text-secondary">ⓘ</span>
                            </div>
                        </div>
                        </div>
                        <div className="mt-3 text-end">
                            <div className="text-light-blue fs-5">
                                USD <span className="fw-bold">700.48</span>
                            </div>
                            <div className="text-gray">
                                (Freight: USD 15.18/KG)
                            </div>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className="d-flex align-items-center justify-content-between">
                        <div>
                        <div>
                        <Badge bg="secondary" className="px-4 py-2" pill>AIR</Badge>
                        <Badge bg="info" pill className="px-4 py-2 ms-2">
                            Fatest
                        </Badge>
                        <Badge bg="secondary" pill className="px-4 py-2 ms-2">Direct</Badge>
                        </div>
                        <div className="mt-2">
                            <Image height={45} src={PolarCargo} />
                        </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <a className="" href={'#'}>Show Details & Charges</a>
                            <Button className="ms-2">
                                SELECT
                            </Button>
                        </div>
                        </div>
                    </Col>
                </Row>
                ))}
            </Col>
        </Row>
        </Container>
    )
}

export default QuoteResult;