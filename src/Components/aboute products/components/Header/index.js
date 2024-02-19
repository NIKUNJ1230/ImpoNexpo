import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './index.css';
import Stepper from "./Stepper";

const Header = ()=>{
return <Container fluid className="header_block">
    <Row>
        <Col sm={10}>
            <Stepper/>
        </Col>
        <Col sm={2}>
            <div className="d-flex flex-column">
                <span className="balance_title">
                    Your Total Balance:
                </span>
                <span className="balance_price mt-2">
                    PKR35, 095.74
                </span>
            </div>
        </Col>
    </Row>
</Container>
}

export default Header;