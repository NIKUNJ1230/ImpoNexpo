import React from "react";
import {Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    address: Yup.string().required('Required'),
    country: Yup.string().required('country'),
    state: Yup.string().required('state'),
    city: Yup.string().required('city'),
    zipcode: Yup.string().required('zipcode'),
    mobile: Yup.number().required('mobile'),
    cardname: Yup.number().required('cardname'),
    email: Yup.string().email('Invalid email').required('Required'),
    cardNumber: Yup.number().required('Required'),
    expire: Yup.number().required('Required'),
    cvc: Yup.number().required('cvc'),
});

const Payment = () => {
    const navigate = useNavigate();

    return (
        <Row>
            <Col md={8}>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        address: '',
                        country: '',
                        state: '',
                        city: '',
                        zipcode: '',
                        mobile: '',
                        cardname: '',
                        cardNumber: '',
                        expire: '',
                        cvc: '',
                        companyName: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        // same shape as initial values
                        console.log(values);
                    }}
                >
                    {({errors, touched, getFieldProps}) => (
                        <Form>
                            <Row>
                                <Col md={3} className="mb-3">
                                    <div>
                                        User name
                                    </div>
                                    <Form.Control type="text" size="lg" name="firstName"
                                                  placeholder="First Name" {...getFieldProps("firstName")} />
                                    <ErrorMessage
                                        component="span"
                                        name={"firstName"}
                                        className={`text-danger`}
                                    />
                                </Col>
                                <Col md={3} className="mb-3">
                                    <div className="opacity-0">
                                        Last name
                                    </div>
                                    <Form.Control type="text" size="lg" name="lastName"
                                                  placeholder="Last Name" {...getFieldProps("lastName")} />
                                    <ErrorMessage
                                        component="span"
                                        name={"lastName"}
                                        className={`text-danger`}
                                    />
                                </Col>
                                <Col md={6} className="mb-3">
                                    <div>
                                        Company Name<span className="text-gray ms-2">(Optional)</span>
                                    </div>
                                    <Form.Control type="text" size="lg"
                                                  name="companyName" {...getFieldProps("companyName")} />
                                </Col>
                                <Col md={12} className="mb-3">
                                    <div>
                                        Address
                                    </div>
                                    <Form.Control type="text" size="lg" name="address" {...getFieldProps("address")} />
                                    <ErrorMessage
                                        component="span"
                                        name={"address"}
                                        className={`text-danger`}
                                    />
                                </Col>
                                <Col md={3} className="mb-3">
                                    <div>
                                        Country
                                    </div>
                                    <Form.Select type="text" size="lg" name="country" {...getFieldProps("country")} >
                                        <option value="1">
                                            India
                                        </option>
                                        <option value="2">
                                            USA
                                        </option>
                                        <option value="3">
                                            Canada
                                        </option>
                                    </Form.Select>
                                    <ErrorMessage
                                        component="span"
                                        name={"country"}
                                        className={`text-danger`}
                                    />
                                </Col>
                                <Col md={3} className="mb-3">
                                    <div>
                                        Region/State
                                    </div>
                                    <Form.Select type="text" size="lg" name="state" {...getFieldProps("state")}>
                                        <option value="1">
                                            Gujarat
                                        </option>
                                        <option value="2">
                                            Maharashtra
                                        </option>
                                        <option value="3">
                                            Madhya Pradesh
                                        </option>
                                    </Form.Select>
                                    <ErrorMessage
                                        component="span"
                                        name={"state"}
                                        className={`text-danger`}
                                    />
                                </Col>
                                <Col md={3} className="mb-3">
                                    <div>
                                        City
                                    </div>
                                    <Form.Select type="text" size="lg" name="city" {...getFieldProps("city")}>
                                        <option value="1">Ahmedabad</option>
                                        <option value="2">Surat</option>
                                        <option value="3">Rajkot</option>
                                        <option value="4">Bhavnagar</option>
                                    </Form.Select>
                                    <ErrorMessage
                                        component="span"
                                        name={"city"}
                                        className={`text-danger`}
                                    />
                                </Col>
                                <Col md={3} className="mb-3">
                                    <div>
                                        Zip Code
                                    </div>
                                    <Form.Control type="text" size="lg" name="zipcode" {...getFieldProps("zipcode")} />
                                    <ErrorMessage
                                        component="span"
                                        name={"zipcode"}
                                        className={`text-danger`}
                                    />
                                </Col>
                                <Col md={6} className="mb-3">
                                    <div>
                                        Email
                                    </div>
                                    <Form.Control type="email" size="lg" name="email" {...getFieldProps("email")} />
                                    <ErrorMessage
                                        component="span"
                                        name={"email"}
                                        className={`text-danger`}
                                    />
                                </Col>
                                <Col md={6} className="mb-3">
                                    <div>
                                        Phone Number
                                    </div>
                                    <Form.Control type="number" size="lg" name="mobile" {...getFieldProps("mobile")} />
                                    <ErrorMessage
                                        component="span"
                                        name={"mobile"}
                                        className={`text-danger`}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3 mt-4 px-2">
                                <Col md={12} className="payment-option-header">
                                    <div className="fs-5 fw-medium">
                                        Payment Option
                                    </div>
                                </Col>
                                <Col md={12} className="payment-option-box">
                                    <Row className="d-flex justify-content-center align-items-center">
                                        <Col lg={3} className="text-center payment-option">
                                            <div className="ms-5">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 3V29" stroke="#FA8232" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                <path
                                                    d="M23 11C23 10.3434 22.8707 9.69321 22.6194 9.08658C22.3681 8.47996 21.9998 7.92876 21.5355 7.46447C21.0712 7.00017 20.52 6.63188 19.9134 6.3806C19.3068 6.12933 18.6566 6 18 6H13.5C12.1739 6 10.9021 6.52678 9.96447 7.46447C9.02678 8.40215 8.5 9.67392 8.5 11C8.5 12.3261 9.02678 13.5979 9.96447 14.5355C10.9021 15.4732 12.1739 16 13.5 16H19C20.3261 16 21.5979 16.5268 22.5355 17.4645C23.4732 18.4021 24 19.6739 24 21C24 22.3261 23.4732 23.5979 22.5355 24.5355C21.5979 25.4732 20.3261 26 19 26H13C11.6739 26 10.4021 25.4732 9.46447 24.5355C8.52678 23.5979 8 22.3261 8 21"
                                                    stroke="#FA8232" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                            </svg>
                                            <div className="option-title">
                                                Bank Wire
                                            </div>
                                            <Form.Check name="bankOption" type="radio"/>
                                            </div>
                                        </Col>
                                        <Col lg={2} className="text-center payment-option">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg" className="opacity-0">
                                                <path d="M16 3V29" stroke="#FA8232" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                <path
                                                    d="M23 11C23 10.3434 22.8707 9.69321 22.6194 9.08658C22.3681 8.47996 21.9998 7.92876 21.5355 7.46447C21.0712 7.00017 20.52 6.63188 19.9134 6.3806C19.3068 6.12933 18.6566 6 18 6H13.5C12.1739 6 10.9021 6.52678 9.96447 7.46447C9.02678 8.40215 8.5 9.67392 8.5 11C8.5 12.3261 9.02678 13.5979 9.96447 14.5355C10.9021 15.4732 12.1739 16 13.5 16H19C20.3261 16 21.5979 16.5268 22.5355 17.4645C23.4732 18.4021 24 19.6739 24 21C24 22.3261 23.4732 23.5979 22.5355 24.5355C21.5979 25.4732 20.3261 26 19 26H13C11.6739 26 10.4021 25.4732 9.46447 24.5355C8.52678 23.5979 8 22.3261 8 21"
                                                    stroke="#FA8232" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                            </svg>
                                            <div className="option-title">
                                                Imponexpo Pay
                                            </div>
                                            <Form.Check name="bankOption" type="radio"/>
                                        </Col>
                                        <Col  lg={2} className="text-center payment-option">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 xlink="http://www.w3.org/1999/xlink">
                                                <rect width="32" height="32" fill="url(#pattern0)"/>
                                                <defs>
                                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox"
                                                             width="1" height="1">
                                                        <use href="#image0_129_3915"
                                                             transform="translate(-0.125 -0.125) scale(0.00555556)"/>
                                                    </pattern>
                                                    <image id="image0_129_3915" width="225" height="225"
                                                           href="data:image/png;base64,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"/>
                                                </defs>
                                            </svg>
                                            <div className="option-title">
                                                Imponexpo Wallet
                                            </div>
                                            <Form.Check name="bankOption" type="radio"/>
                                        </Col>
                                        <Col lg={2} className="text-center payment-option">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_129_3921)">
                                                    <path
                                                        d="M27.5481 25.8352C14.5946 31.9999 6.55544 26.842 1.40935 23.7092C1.09091 23.5118 0.549678 23.7554 1.01927 24.2948C2.73369 26.3736 8.35221 31.384 15.686 31.384C23.0249 31.384 27.3908 27.3796 27.937 26.681C28.4794 25.9884 28.0962 25.6063 27.548 25.8352H27.5481ZM31.1861 23.8261C30.8382 23.3731 29.0709 23.2886 27.9586 23.4253C26.8446 23.558 25.1726 24.2388 25.3179 24.6476C25.3925 24.8007 25.5448 24.732 26.3101 24.6632C27.0774 24.5866 29.2271 24.3153 29.675 24.9009C30.125 25.4905 28.9894 28.2992 28.782 28.7522C28.5816 29.2052 28.8585 29.322 29.235 29.0203C29.6062 28.7187 30.2783 27.9377 30.7293 26.8324C31.1772 25.7212 31.4504 24.171 31.186 23.8261H31.1861Z"
                                                        fill="#FF9900"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M18.8383 13.256C18.8383 14.8735 18.8791 16.2225 18.0615 17.659C17.4017 18.827 16.3564 19.5452 15.1885 19.5452C13.5942 19.5452 12.6657 18.3306 12.6657 16.5378C12.6657 12.999 15.8365 12.3567 18.8383 12.3567V13.256ZM23.0252 23.3761C22.7507 23.6213 22.3536 23.6389 22.0442 23.4753C20.666 22.3308 20.4207 21.7994 19.6616 20.7073C17.3842 23.0315 15.7724 23.7264 12.8176 23.7264C9.32549 23.7264 6.60419 21.5716 6.60419 17.2561C6.60419 13.8867 8.4321 11.5917 11.0306 10.4705C13.2847 9.47768 16.4323 9.30252 18.8383 9.02815V8.49086C18.8383 7.50391 18.9141 6.33602 18.336 5.48348C17.8279 4.71847 16.8586 4.40311 16.0059 4.40311C14.4235 4.40311 13.0102 5.21478 12.6657 6.89658C12.5955 7.2704 12.3212 7.63833 11.9475 7.6558L7.91807 7.22375C7.57944 7.14768 7.20574 6.87331 7.29916 6.3535C8.22764 1.47168 12.6364 0 16.584 0C18.6045 0 21.244 0.537295 22.8382 2.06732C24.8588 3.95346 24.666 6.47031 24.666 9.2091V15.6794C24.666 17.624 25.4719 18.4765 26.231 19.5277C26.4996 19.9014 26.5581 20.3512 26.2193 20.6314C25.3726 21.3379 23.8659 22.6519 23.0368 23.3878L23.0251 23.3761"
                                                          fill="black"/>
                                                    <path
                                                        d="M27.5481 25.8352C14.5946 31.9999 6.55544 26.842 1.40935 23.7092C1.09091 23.5118 0.549678 23.7554 1.01927 24.2948C2.73369 26.3736 8.35221 31.384 15.686 31.384C23.0249 31.384 27.3908 27.3796 27.937 26.681C28.4794 25.9884 28.0962 25.6063 27.548 25.8352H27.5481ZM31.1861 23.8261C30.8382 23.3731 29.0709 23.2886 27.9586 23.4253C26.8446 23.558 25.1726 24.2388 25.3179 24.6476C25.3925 24.8007 25.5448 24.732 26.3101 24.6632C27.0774 24.5866 29.2271 24.3153 29.675 24.9009C30.125 25.4905 28.9894 28.2992 28.782 28.7522C28.5816 29.2052 28.8585 29.322 29.235 29.0203C29.6062 28.7187 30.2783 27.9377 30.7293 26.8324C31.1772 25.7212 31.4504 24.171 31.186 23.8261H31.1861Z"
                                                        fill="#FF9900"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M18.8383 13.256C18.8383 14.8735 18.8791 16.2225 18.0615 17.659C17.4017 18.827 16.3564 19.5452 15.1885 19.5452C13.5942 19.5452 12.6657 18.3306 12.6657 16.5378C12.6657 12.999 15.8365 12.3567 18.8383 12.3567V13.256ZM23.0252 23.3761C22.7507 23.6213 22.3536 23.6389 22.0442 23.4753C20.666 22.3308 20.4207 21.7994 19.6616 20.7073C17.3842 23.0315 15.7724 23.7264 12.8176 23.7264C9.32549 23.7264 6.60419 21.5716 6.60419 17.2561C6.60419 13.8867 8.4321 11.5917 11.0306 10.4705C13.2847 9.47768 16.4323 9.30252 18.8383 9.02815V8.49086C18.8383 7.50391 18.9141 6.33602 18.336 5.48348C17.8279 4.71847 16.8586 4.40311 16.0059 4.40311C14.4235 4.40311 13.0102 5.21478 12.6657 6.89658C12.5955 7.2704 12.3212 7.63833 11.9475 7.6558L7.91807 7.22375C7.57944 7.14768 7.20574 6.87331 7.29916 6.3535C8.22764 1.47168 12.6364 0 16.584 0C18.6045 0 21.244 0.537295 22.8382 2.06732C24.8588 3.95346 24.666 6.47031 24.666 9.2091V15.6794C24.666 17.624 25.4719 18.4765 26.231 19.5277C26.4996 19.9014 26.5581 20.3512 26.2193 20.6314C25.3726 21.3379 23.8659 22.6519 23.0368 23.3878L23.0251 23.3761"
                                                          fill="black"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_129_3921">
                                                        <rect width="32" height="32" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <div className="option-title">
                                                Amazon Pay
                                            </div>
                                            <Form.Check name="bankOption" type="radio"/>
                                        </Col>
                                        <Col lg={3} className="text-center payment-option  border-0">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path opacity="0.2" d="M4 13.1123H28V23.9998L4 23.9998L4 13.1123Z"
                                                      fill="#FA8232" stroke="#FA8232" stroke-width="2"/>
                                                <path
                                                    d="M28 7H4C3.44772 7 3 7.44772 3 8V24C3 24.5523 3.44772 25 4 25H28C28.5523 25 29 24.5523 29 24V8C29 7.44772 28.5523 7 28 7Z"
                                                    stroke="#FA8232" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                                <path d="M21 21H25" stroke="#FA8232" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M15 21H17" stroke="#FA8232" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M3 12.1123H29" stroke="#FA8232" stroke-width="2"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            <div className="option-title">
                                                Debid/Credit Card
                                            </div>
                                            <Form.Check name="bankOption" type="radio" color="#C9CFD2"/>
                                        </Col>
                                    </Row>
                                    <hr className="payment-option-hr"/>
                                    <Row className="mt-3">
                                        <Col md={12} className="mb-3">
                                            <div>
                                                Name on Card
                                            </div>
                                            <Form.Control type="text" size="lg"
                                                          name="cardname" {...getFieldProps("cardname")} />
                                            <ErrorMessage
                                                component="span"
                                                name={"cardname"}
                                                className={`text-danger`}
                                            />
                                        </Col>
                                        <Col md={12} className="mb-3">
                                            <div>
                                                Card Number
                                            </div>
                                            <Form.Control type="number" size="lg"
                                                          name="cardNumber" {...getFieldProps("cardNumber")} />
                                            <ErrorMessage
                                                component="span"
                                                name={"cardNumber"}
                                                className={`text-danger`}
                                            />
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <div>
                                                Expire Date
                                            </div>
                                            <Form.Control type="text" size="lg" placeholder="DD/YY"
                                                          name="expire" {...getFieldProps("expire")} />
                                            <ErrorMessage
                                                component="span"
                                                name={"expire"}
                                                className={`text-danger`}
                                            />
                                        </Col>
                                        <Col md={6} className="mb-3">
                                            <div>
                                                CVC
                                            </div>
                                            <Form.Control type="text" size="lg" name="cvc" {...getFieldProps("cvc")} />
                                            <ErrorMessage
                                                component="span"
                                                name={"cvc"}
                                                className={`text-danger`}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Col>
            <Col md={4} className="p-4 overflow-hidden box-boder mb-3">
                <div className="fs-5 fw-bold">
                    Order Summery
                </div>
                <div className="d-flex align-items-center mb-4">
                    <Image src={"https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg"} width={80}/>
                    <div>
                        <div className="product-desc">
                            Canon EOS 1500D DSLR Camera Body Canon EOS 1500D DSLR Camera Body
                        </div>
                        <div className="d-flex align-items-center">
                            <span>
                                1 X
                            </span>
                            <span className="ms-2 text-light-blue">$70</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                    <Image src={"https://m.media-amazon.com/images/I/414g9UxZ7YL._SX300_SY300_QL70_FMwebp_.jpg"} width={80}/>
                    <div>
                        <div className="product-desc">
                            Canon EOS 1500D DSLR Camera Body Canon EOS 1500D DSLR Camera Body
                        </div>
                        <div className="d-flex align-items-center">
                            <span>
                                1 X
                            </span>
                            <span className="ms-1 text-light-blue">$70</span>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-gray">
                            Product Total
                        </div>
                        <div>
                            $320
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-gray">
                            Shipping
                        </div>
                        <div>
                            Free
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-gray">
                            Discount
                        </div>
                        <div>
                            $24
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="text-gray">
                            Tax
                        </div>
                        <div>
                            $61.99
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-2 py-1">
                        <div className="text-gray">
                            Quality Control
                        </div>
                        <div>
                            $320
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-1 pb-2">
                        <div className="text-gray">
                            Customs Clearance
                        </div>
                        <div>
                            $320
                        </div>
                    </div>
                    <div className="border-top d-flex justify-content-between align-items-center py-2">
                        <div className="text-gray">
                            Total
                        </div>
                        <div>
                            $465
                        </div>
                    </div>
                </div>
                <Button className="cart-button px-5 mt-2 py-3 w-100 fw-bold" onClick={()=>navigate('/order-success')}>
                    PLACE ORDER
                    <svg className="ms-3" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.25 12.5H20.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 5.75L20.75 12.5L14 19.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Button>
            </Col>
        </Row>
    )
}

export default Payment;