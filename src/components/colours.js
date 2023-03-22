import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./base";
import { Button, Card, Col, Container, Row } from "react-bootstrap";


export default function Colours() {




    return (
        <Base>


            <Container fluid>
                <h1 className="h3 m-4 text-gray-800">Color Utilities</h1>
                <p className="mb-4">Bootstrap's default utility classes can be found on the official <a
                    href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                    below were created to extend this theme past the default utility classes built into Bootstrap's
                    framework.</p>

                <Row>

                    <Col lg={4}>
                    <div className="mb-4 py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                        </div>

                        <div>
                            <p className="text-gray-100 p-3 bg-dark m-0" id="grey">.text-gray-100</p>

                            <p className="text-gray-200 p-3 bg-dark m-0" id="grey">.text-gray-200</p>
                            <p className="text-gray-300 p-3 bg-dark m-0" id="grey">.text-gray-300</p>
                            <p className="text-gray-400 p-3 bg-dark m-0" id="grey">.text-gray-400</p>
                            <p className="text-gray-500 p-3 m-0">.text-gray-500</p>
                            <p className="text-gray-600 p-3 m-0">.text-gray-600</p>
                            <p className="text-gray-700 p-3 m-0">.text-gray-700</p>
                            <p className="text-gray-800 p-3 m-0">.text-gray-800</p>
                            <p className="text-gray-900 p-3 m-0">.text-gray-900</p>

                        </div>

                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
                            </div>
                            <div className="card-body">
                                <p className="text-xs">.text-xs</p>
                                <p class="text-lg mb-0">.text-lg</p>
                            </div>
                        </div>

                    </Col>
                    <Col lg={4}>
                        <div className="mb-4 py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities</h6>
                        </div>

                        <div className="px-3 py-5 bg-primary text-white">.bg-gradient-primary</div>
                        <div className="px-3 py-5 bg-secondary text-white">.bg-gradient-secondary</div>
                        <div className="px-3 py-5 bg-success text-white">.bg-gradient-success</div>
                        <div className="px-3 py-5 bg-info text-white">.bg-gradient-info</div>
                        <div className="px-3 py-5 bg-warning text-white">.bg-gradient-warning</div>
                        <div className="px-3 py-5 bg-danger text-white">.bg-gradient-danger</div>
                        <div className="px-3 py-5 bg-light text-dark">.bg-gradient-light</div>
                        <div className="px-3 py-5 bg-dark text-white">.bg-gradient-dark</div>




                    </Col>
                    <Col lg={4}>

                        <div className="mb-4 py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities</h6>
                        </div>

                        <div className="p-3 bg-gray-100" id="grey100">.bg-gray-100</div>
                        <div className="p-3 bg-gray-200">.bg-gray-200</div>
                        <div className="p-3 bg-gray-300">.bg-gray-300</div>
                        <div className="p-3 bg-gray-400">.bg-gray-400</div>
                        <div className="p-3 bg-gray-500 text-white">.bg-gray-500</div>
                        <div className="p-3 bg-gray-600 text-white">.bg-gray-600</div>
                        <div className="p-3 bg-gray-700 text-white">.bg-gray-700</div>
                        <div className="p-3 bg-gray-800 text-white">.bg-gray-800</div>
                        <div className="p-3 bg-gray-900 text-white">.bg-gray-900</div>


                    </Col>




                </Row>
            </Container>
        </Base >



    )
}