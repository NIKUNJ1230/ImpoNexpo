import React from "react";
import {Button, Col, Form, Image, Modal, Row, Table} from "react-bootstrap";

const GroupImportApproved=({show, onHide})=>{
    return <Modal
        show={show}
        size="lg"
    >
        <Modal.Header className="justify-content-center">
            <Modal.Title className="text-center">
                Join a Group Import
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={12} className="fs-5">
                    Congratulations! The seller has approved a GroupImport on this product
                </Col>
                <Col md={7} className="mt-4">
                    <div>
                        Group Name
                    </div>
                    <div>
                        Product Name
                    </div>
                    <div>
                        Group Order Qty: 10, 000 Psc
                    </div>
                    <div>
                        Created by
                    </div>
                </Col>
                <Col md={5} className="mt-4">
                    <div>
                        Product ID:
                    </div>
                    <div>
                        Total Amt:
                    </div>
                    <div>
                        his Group’s
                    </div>
                </Col>
                <Col md={12} className="mt-3">
                    <div>
                        Date
                    </div>
                    <div className="mt-3">
                        Participants
                    </div>
                    <div>
                        <Table striped>
                            <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Specifications/</th>
                                <th>Qty/</th>
                                <th>Shipping to</th>
                                <th>Decision</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td />
                                    <td/>
                                    <td/>
                                    <td/>
                                    <td/>
                                    <td/>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col md={12} className="mt-2">
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
            }}>Pay & Join Now!</Button>
        </Modal.Footer>
    </Modal>
}

export default GroupImportApproved;