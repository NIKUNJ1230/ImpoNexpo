import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../Sidebar";
import Footer from "./Footer";

const Layout=({children, isShowSidebar})=>{
    return (
        <Container fluid>
            <Row>
                {isShowSidebar && <Col lg={3} sm={2}>
                    <Sidebar />
                </Col>}
                <Col lg={isShowSidebar ? 9 : 12} sm={isShowSidebar ? 10 : 12}>
                    {children}
                </Col>
                {isShowSidebar && <Col md={12} className="border-top pt-3">
                    <Footer />
                </Col>}
            </Row>
        </Container>
    )
}

export default Layout;