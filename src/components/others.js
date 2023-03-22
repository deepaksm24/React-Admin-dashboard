import React from "react";


import Base from "./base";



import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export default function Others() {




    return (
        <Base>


            <Container fluid>

                <h1 className="h3 m-4 text-gray-800">Other Utilities</h1>
                <p className="mb-4">Bootstrap's default utility classes can be found on the official <a
                    href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                    below were created to extend this theme past the default utility classes built into Bootstrap's
                    framework.</p>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <div> <h6 className="m-3 font-weight-bold text-primary">Overflow Hidden Utilty</h6></div>
                            <div className="m-3">Use <code>.o-hidden</code> to set the overflow property of any element to hidden.</div>
                            <div><h6 className="m-3 font-weight-bold text-primary">Progress Small Utility</h6></div>

                            <div className="card-body">
                                <div className="mb-1 small">Normal Progress Bar</div>
                                <div className="progress mb-4">
                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }}
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="mb-1 small">Small Progress Bar</div>
                                <div className="progress progress-sm mb-2">
                                    <div className="progress-bar" role="progressbar" style={{ width: "75%", height: "0.5rem" }}
                                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                Use the <code>.progress-sm</code> class along with <code>.progress</code>
                            </div>
                        </Card>


                    </Col>
                    <Col lg={6}>


                        <div className="card">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Rotation Utilities</h6>
                            </div>
                            <div className="card-body text-center">
                                <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">.rotate-15
                                </div>
                                <hr />
                                <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">.rotate-n-15
                                </div>
                            </div>
                        </div>

                    </Col>

                </Row>


            </Container>

        </Base >



    )
}