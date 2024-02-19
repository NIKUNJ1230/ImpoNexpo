import React from "react";
import {Button, Col, Row} from "react-bootstrap";

const OrderSuccess=()=>{
    return (
        <Row>
            <Col md={12}>
                <div className="order-success-box">
                    <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.2" d="M44 77C62.2254 77 77 62.2254 77 44C77 25.7746 62.2254 11 44 11C25.7746 11 11 25.7746 11 44C11 62.2254 25.7746 77 44 77Z" fill="#2DB324"/>
                        <path d="M59.125 35.75L38.9469 55L28.875 45.375" stroke="#2DB324" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M44 77C62.2254 77 77 62.2254 77 44C77 25.7746 62.2254 11 44 11C25.7746 11 11 25.7746 11 44C11 62.2254 25.7746 77 44 77Z" stroke="#2DB324" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className="fs-4 fw-bold mt-3">
                        Your order is successfully place
                    </div>
                    <div className="text-gray mt-2">
                        Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-3">
                        <Button variant="outline-primary order-btn-hover" className="align-items-center d-flex" size="lg">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_129_4055)">
                                    <path d="M2.5 13.75L10 18.125L17.5 13.75" stroke="#1D5EC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.5 10L10 14.375L17.5 10" stroke="#1D5EC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.5 6.25L10 10.625L17.5 6.25L10 1.875L2.5 6.25Z" stroke="#1D5EC9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_129_4055">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="ms-2">
                                GO TO DASHBOARD
                            </span>
                        </Button>
                        <Button variant="primary" className="ms-3 align-items-center d-flex" size="lg">
                            <span className="me-1">
                                VIEW ORDER
                            </span>
                            <svg className="ms-3" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 12.5H20.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14 5.75L20.75 12.5L14 19.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default OrderSuccess;