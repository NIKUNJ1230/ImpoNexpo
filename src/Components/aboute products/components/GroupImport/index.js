import React, {useState} from "react";
import {Button, Col, Image, Modal, Row, Table, Form} from "react-bootstrap";

const GroupImport=({show, onHide})=>{
    return <Modal
        show={show}
        size="lg"
    >
        <Modal.Header className="justify-content-center">
            <Modal.Title className="text-center">
                Create a Group Import
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={5}>
                    <div className="box-boder">
                        <Image src="https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg" className="w-100"/>
                    </div>
                </Col>
                <Col md={7}>
                    <div className="fs-5 fw-bold">
                        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                    </div>
                    <div>
                        <Table>
                            <tbody>
                            <tr className="border-0">
                                <td className="text-gray border-0">Price:</td>
                                <td className="border-0">Negotiable</td>
                            </tr>
                            <tr className="border-0">
                                <td className="text-gray border-0">Type:</td>
                                <td className="border-0">Classic shoes</td>
                            </tr>
                            <tr className="border-0">
                                <td className="text-gray border-0">Material:</td>
                                <td className="border-0">Plastic material</td>
                            </tr>
                            <tr className="border-0">
                                <td className="text-gray border-0">Design:</td>
                                <td className="border-0">Modern nice</td>
                            </tr>
                            <tr className="border-0">
                                <td className="text-gray border-0">Customization:</td>
                                <td className="border-0">Customized logo and design custom packages</td>
                            </tr>
                            <tr className="border-0">
                                <td className="text-gray border-0">Protection:</td>
                                <td className="border-0">Refund Policy</td>
                            </tr>
                            <tr className="border-0">
                                <td className="text-gray border-0">Warranty:</td>
                                <td className="border-0">2 years full warranty</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="fs-6">
                        Group Name
                    </div>
                    <div className="fs-6">
                        Product Name
                    </div>
                    <div className="fs-6">
                        Shipping: Groupage or Individualage
                    </div>
                    <div className="fs-6">
                        Duration Countdown:
                    </div>
                </Col>
                <Col md={6}>
                    <div className="fs-6">
                        Created by
                    </div>
                    <div className="fs-6">
                        Product ID:
                    </div>
                </Col>
                <Col md={12}>
                    <div className="d-flex align-items-center">
                    <div className="fs-6 me-2">
                        Initial Price Range:
                    </div>
                    <div className="w-75 product-price-block mt-3 d-flex justify-content-between align-items-center">
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
                    <div>

                    <div className="fs-6">
                        Group Order Qty: 10, 000 Psc
                    </div>
                        <div className="fs-6">
                            Total Amt: $780,000
                        </div>
                    </div>
                    <div className="fs-6">
                        The Initiator Country:  Pakistan
                    </div>
                    <div className="fs-6 fw-bold">
                        @thisBuyer Specifications/
                    </div>
                    <div className="fs-6 mt-2">
                        <div className="ms-5">
                            Color
                        </div>
                        <Table>
                            <tbody className="border-top">
                            <tr className="border-0">
                                <td className="border-0 text-center">Size</td>
                                <td className="border-0 text-center">Price</td>
                                <td className="border-0 text-center">-1000+</td>
                            </tr>
                            <tr>
                                <td className="text-center">Green</td>
                                <td className="text-center">78</td>
                                <td className="text-center">Sub-Total: 78000</td>
                            </tr>
                            </tbody>
                        </Table>
                        <div className="d-flex">
                            <div className="ms-3">
                                Shipping
                            </div>
                            <div className="ms-3">
                                Shipping Method
                            </div>
                            <div className="ms-3">
                                Country: Search & Dropdown
                            </div>
                            <div className="ms-3">
                                City: Search & Dropdown
                            </div>
                            <div className="ms-3">
                                Address: Automatically or Manually
                            </div>
                            <div className="ms-3">
                                Shipping Fare:
                            </div>
                        </div>
                        <div className="d-flex mt-2">
                            <div className="ms-5">
                                Sea Freight
                            </div>
                            <div className="ms-3 fw-bold">
                                Nigeria
                            </div>
                            <div className="ms-3 fw-bold">
                                Lagos
                            </div>
                        </div>
                        <div className="border-top pt-2 mt-2 d-flex">
                            <div>
                                Customs Clearance Duty:
                            </div>
                            <div className="ms-3">
                                Alone <br /> Groupage
                            </div>
                        </div>
                        <div className="fs-5 fw-bold mt-2">
                            Net Total:
                        </div>
                        <div className="d-flex mt-2">
                            <div className="w-25">
                                Your Comment
                            </div>
                            <Form.Control as="textarea" rows={3} />
                        </div>
                    </div>
                </Col>
                <Col md={12} className="mt-3">
                    <Form.Check
                        className="mb-2"
                        type={"checkbox"}
                        label={`I agree with Imponexpo Group Buy Rules`}
                    />
                    <Form.Check
                        type={"checkbox"}
                        label={`I agree with this Group’s and Sellers’ Group Buy Rules`}
                    />
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
            <Button variant="primary" className="px-5" onClick={()=>{
                onHide();
            }}>Request, Join and Pay</Button>
        </Modal.Footer>
    </Modal>
}

export default GroupImport;