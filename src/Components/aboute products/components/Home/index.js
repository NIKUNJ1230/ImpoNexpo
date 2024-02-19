import React, { useState } from "react";
import {
    Col,
    Container,
    DropdownButton,
    Row,
    Dropdown,
    Form,
    ButtonGroup,
    Button,
    Pagination
} from "react-bootstrap";
import './index.css';
import Product from "./Product";
import ListView from "./Product/ListView";
import Breadcrumbs from "./Breadcrumbs";

const ProductHome = () => {
    const [viewType, setViewType] = useState("list"); // Default view type is list

    const BreadcrumbsList = ["Home", "Clothings", "Men’s wear", "Summer clothing"]
    const handleViewChange = (type) => {
        setViewType(type);
    };

    return <Container fluid>
        <Row>
            {viewType == 'list' && <Col md={12} className="mb-3">
                <Breadcrumbs list={BreadcrumbsList} />
            </Col>}
            <Col md={12}>
                <div className="filter-box">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <DropdownButton variant="outline-dark" title="Source In">
                                <Dropdown.Item>Showcase</Dropdown.Item>
                                <Dropdown.Item>Channel</Dropdown.Item>
                                <Dropdown.Item>Livestream</Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton variant="outline-dark" className="ms-3" title="Availability">
                                <Dropdown.Item>ReadyMade</Dropdown.Item>
                                <Dropdown.Item>OEM</Dropdown.Item>
                                <Dropdown.Item>ODM</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div>
                            <Form.Check
                                checked={true}
                                type={'checkbox'}
                                label={`Verify only`}
                            />
                        </div>
                        <div>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="light" onClick={() => handleViewChange("grid")}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7344 3.48828H3.73438V11.4883H11.7344V3.48828Z" fill="#1C1C1C" />
                                        <path d="M11.7344 13.4883H3.73438V21.4883H11.7344V13.4883Z" fill="#1C1C1C" />
                                        <path d="M21.7344 3.48828H13.7344V11.4883H21.7344V3.48828Z" fill="#1C1C1C" />
                                        <path d="M21.7344 13.4883H13.7344V21.4883H21.7344V13.4883Z" fill="#1C1C1C" />
                                    </svg>
                                </Button>
                                <Button variant="light" onClick={() => handleViewChange("list")}>
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.9219 8.48828H3.92188V4.48828H21.9219V8.48828ZM21.9219 10.4883H3.92188V14.4883H21.9219V10.4883ZM21.9219 16.4883H3.92188V20.4883H21.9219V16.4883Z" fill="#1C1C1C" />
                                    </svg>
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={12} className="mt-4">{viewType === 'list' ? <div>
                <ListView />
            </div> : <div>
                <Product />
            </div>}
                <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item active>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Ellipsis className="ellipsis" />
                    <Pagination.Item>{15}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </Col>
        </Row>
    </Container>
}

export default ProductHome;