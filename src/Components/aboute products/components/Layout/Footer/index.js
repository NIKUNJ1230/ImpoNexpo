import React from "react";
import {Col, InputGroup, Row, Form, Image, Button} from "react-bootstrap";
import './index.css';
import footerImag from '../footer-img.png';

const Footer=()=>{

    return <Row className="p-4">
        <Col md={12}>
            <div className="mb-4">Related searches for Electronics for sale</div>
            <Row>
                {Array.from({ length: 9 }).map(()=>
                    <Col md={4}>
                        <InputGroup className="mb-3 footer-search-bar">
                            <Form.Control className="border-right-0 footer-search-bar-input"/>
                            <InputGroup.Text className="bg-white footer-search-bar-addon border-left-0">
                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="33" height="38" viewBox="0 0 33 38" fill="none">
                                    <rect x="0.5" y="0.523438" width="31.7883" height="37" fill="url(#pattern0)"/>
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use href="#image0_129_1603" transform="matrix(0.0208333 0 0 0.0178988 0 -0.019065)"/>
                                        </pattern>
                                        <image id="image0_129_1603" width="48" height="58" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA6CAYAAAD2mdrhAAAC0klEQVRoBe2Xz2sTQRTHe+nFkxf/AM9e/XHxIG0CIrRVlIJevLegFyv4A0VrFLG1x6p4iFJtVVTUFkWrEYuiYg5qEGy1qFHbJiFJ02yyye7mKxOdSdIkxtmZUYrzYJjpzJs37/N9k6XThCVuTUs8f2iAf11BXQFdAUEF9BUSFFB4u66AsISCAXQFBAUU3q4rICyhYADpFQiFHey6kEFbX7rYyJjMqTKpAIF3FjzH02jxVTYyR9ZUmDQAIwd09FcmXg6y+XQaxEe2SQN48cGuUr4cgIyJj2yTBuB/kmsIcPlpXnb+8l5kfwJAfGTbX62ABqhRPl0BKor+DVAlOHt9hahg+gpRJTj7/+8KOZ/6YY03F5sz2cP0uh20Gv4rQXyoLQwOINK6ptgy14fpNHfPXYHCzBADsN90sgPfzzgNAT7Old4F84f3MgAz8IDF4R1wAyAVZABWYDngGOzMg1ezdSGO3jCZHxwb0fYNDMCeniqtcY74AQBYEysZhDN9jB2ZNIC+MbPiUUMeM6dGTcxnmBuyYzdZ8rEd7aUFFyNXAE54kAFYD5ehEH9ccTQBuf/WKjYyLjf7WxjRLR4GYFw8X77MPXYFgIIN69mqnxD3mpHobkXm1rWGh9vhz4htb2PJx7ZtBLLZhvt+5+AOgEQ0JmE9WoFE93qWUPJQD0iSi82Z/Y60/wyiHS3MN+JZi3zw5WJX7r/dAwCwpyZAVKSfQ9rHOjchdfIIUgMnEO/aWbUe8a6DOX6XO9laG4QASMBCIo7kvt3VSf76xlMo2hO4fOh1rVxczQkD0FNzr54jsaerLghJPO0/C5hln1O6WaCXBkBzcOZmMTrUC98BL3z7vbhzqRf21y90WXovHYBkeC50BatHthYbGas0DVBLXV2BWqrUmVNyheqcpWRaAyiRlSOorgCHWEpcdQWUyMoRVFeAQywlrroCSmTlCKorwCGWEtcfoE/2cacM0n4AAAAASUVORK5CYII="/>
                                    </defs>
                                </svg>
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                )}
                <Col md={12}>
                    <div className="d-flex justify-content-between align-items-center">
                        <Image src={footerImag} height={205} />
                        <div>
                            <div className="footer-title">
                                Can't find the Product you want?
                            </div>
                            <div className="mt-3">
                                Tell suppliers what you need and get quotations sent to you instead!
                            </div>
                        </div>
                        <Button className="quotation-btn">
                            Get Quotations now
                        </Button>
                    </div>
                </Col>
            </Row>
        </Col>
    </Row>
}

export default Footer;