import React from "react";
import {Button, Col, Image, Modal, Row, Table} from "react-bootstrap";

const GroupApproval=({show, onHide})=>{
    return <Modal
        show={show}
        size="lg"
    >
        <Modal.Header className="justify-content-center">
            <Modal.Title className="text-center">
                GroupImport Approval
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={12}>
                    <div className="d-flex">
                        <div className="me-3">
                            Product Name:
                        </div>
                        <div className="fs-5 fw-bold">
                            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                        </div>
                    </div>
                </Col>
                <Col md={5} className="mt-3">
                    <div className="box-boder">
                        <Image src="https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg" className="w-100"/>
                    </div>
                </Col>
                <Col md={7} className="mt-3">
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
                <Col md={12} className="mt-3">
                    <div className="fs-5 mt-5">
                        Specifications and Normal Prices
                    </div>
                    <div className="fs-5 mt-5">
                        Group Import Price
                    </div>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
            <Button variant="primary" className="px-5" onClick={()=>{
                onHide();
            }}>Invite your Business Associates & Friends</Button>
        </Modal.Footer>
    </Modal>
}

export default GroupApproval;