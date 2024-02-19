import React from "react";
import {Button, Col, Modal, Row} from "react-bootstrap";

const PaymentComplete =({show, onHide})=>{
    return <Modal
        show={show}
        size="lg"
    >
        <Modal.Header className="justify-content-center" closeButton>
            <Modal.Title className="text-center text-orange">
                Complete Payment
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={12} className="border-bottom pb-2">
                    <div className="text-light-blue fs-5 fw-bold">
                        <span className="payment-complete-title">
                            Wire Transfer
                        </span>
                    </div>
                </Col>
                <Col md={12} className="mt-3">
                    <div className="text-light-blue fs-5">
                        Details del banco
                    </div>
                    <Row className="mt-3">
                        <Col md={6}>
                            <div className="text-gray fs-6 fw-bold">
                                Beneficiary Name
                            </div>
                            <div className="fw-bold">
                                Icontainers (USA) Inc
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="text-gray fs-6 fw-bold">
                                Description
                            </div>
                            <div className="fw-bold">
                                2085018
                            </div>
                        </Col>
                        <Col md={12} className="mt-3">
                            <div className="text-gray fs-6 fw-bold">
                                Beneficiary Address
                            </div>
                            <div className="fw-bold">
                                901 Ponce De Leon Blvd, Suite 504 33143, Coral Gables, Florida United States of America
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={12}className="mt-4">
                    <div className="text-light-blue fs-5">
                        Wire Transfer (USD)
                    </div>
                    <Row className="mt-3">
                        <Col md={6}>
                            <div className="text-gray fs-6 fw-bold">
                                Bank Name
                            </div>
                            <div className="fw-bold">
                                Citibank N.A.
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="text-gray fs-6 fw-bold">
                                Business Identifier Code
                            </div>
                            <div className="fw-bold">
                                CITI US 33
                            </div>
                        </Col>
                        <Col md={12} className="mt-3">
                            <div className="text-gray fs-6 fw-bold">
                                Account Number
                            </div>
                            <div className="fw-bold">
                                9138574328
                            </div>
                        </Col>
                        <Col md={12} className="mt-3">
                            <div className="text-gray fs-6 fw-bold">
                                ABA/ACH Routing number for wire transfers within the USA
                            </div>
                            <div className="fw-bold">
                                266086554
                            </div>
                        </Col>
                        <Col md={12} className="mt-3">
                            <div className="text-gray fs-6 fw-bold">
                                Bank Address
                            </div>
                            <div className="fw-bold">
                                BISCAYNE, 2001 Biscayne Bivd, Miami, FL, 331337
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={12} className="mt-4">
                    <div className="text-light-blue fs-5">
                        Informacion Fiscal
                    </div>
                    <Row className="mt-3">
                        <Col md={12}>
                            <div className="text-gray fs-6 fw-bold">
                                Address
                            </div>
                            <div className="fw-bold">
                                Icontainers (USA) Inc, 901 Ponce De Leon Blvd, Suite 504 33143, Coral Gables, Florida United States of America
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={12} className="mt-4">
                    <div className="text-light-blue fs-5">
                        Payment Details
                    </div>
                    <Row className="mt-3">
                        <Col md={6}>
                            <div className="text-gray fs-6 fw-bold">
                                Amount
                            </div>
                            <div className="fw-bold">
                                USD 924.49
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
            <Button variant="primary" className="px-5" onClick={()=>{
                onHide();
            }}>Ok</Button>
        </Modal.Footer>
    </Modal>
}

export default PaymentComplete;