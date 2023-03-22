import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./base";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import { Button } from "react-bootstrap";
import { Facebook, CheckCircle, InfoCircle, ExclamationCircleFill, PlusCircleFill, Google, FlagFill } from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';

export default function Buttons() {




    return (
        <Base>

            <Container fluid>
                <h1 className="h3 m-4 text-gray-800">Buttons</h1>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Header><h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6></Card.Header>

                            <Card.Body>
                                <Card.Text> <p>Use Font Awesome Icons (included with this theme package) along with the circle
                                    buttons as shown in the examples below!</p></Card.Text>

                                <div className="mb-2"><code>.btn-circle</code></div>

                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link > <Facebook color="royalblue" size={30} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link ><CheckCircle color="green" size={30} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link ><InfoCircle color="blue" size={30} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link><ExclamationCircleFill color="orange" size={30} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link><PlusCircleFill color="red" size={30} /></Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <div className="mb-2"><code>.btn-circle .btn-sm</code></div>

                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link > <Facebook color="royalblue" size={20} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link ><CheckCircle color="green" size={20} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link ><InfoCircle color="blue" size={20} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link><ExclamationCircleFill color="orange" size={20} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link><PlusCircleFill color="red" size={20} /></Nav.Link>
                                    </Nav.Item>
                                </Nav>


                                <div className="mb-2"><code>.btn-circle .btn-lg</code></div>
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link > <Facebook color="royalblue" size={45} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link ><CheckCircle color="green" size={45} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link ><InfoCircle color="blue" size={45} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link><ExclamationCircleFill color="orange" size={45} /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link><PlusCircleFill color="red" size={45} /></Nav.Link>
                                    </Nav.Item>
                                </Nav>


                            </Card.Body>
                        </Card>

                        <br />

                        <Card>

                            <Card.Header><h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6></Card.Header>
                            <Card.Body>
                                <Card.Text> <p>Google and Facebook buttons are available featuring each company's respective
                                    brand color. They are used on the user login and registration pages.</p>
                                    <p>You can create more custom buttons by adding a new color variable in the
                                        <code>_variables.scss</code> file and then using the Bootstrap button variant
                                        mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                                        file.</p></Card.Text>


                                <Nav.Link > <Button id="btn-g" className="btn btn-google btn-block"><Google className="mb-1" /> .btn-google</Button></Nav.Link>

                                <Nav.Link className="mt-2"> <Button id="btn-f" className="btn btn-google btn-block"><Facebook className="mb-1" /> .btn-google</Button></Nav.Link>




                            </Card.Body>

                        </Card>



                    </Col>

                    <Col lg={6}>

                        <Card>
                            <Card.Header><h6 className="m-0 font-weight-bold text-primary">Split Buttons With Icons</h6></Card.Header>

                            <Card.Body>
                                <Card.Text> <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                                    the markup in the examples below. The examples below also use the
                                    <code>.text-white-50</code> helper class on the icons for additional styling,
                                    but it is not required.</p></Card.Text>





                                <Nav.Link > <Button id="btn-split" className="btn btn-primary"><FlagFill className="m-1" /><span className="pl-1">Split Button Primary</span></Button></Nav.Link>
                                <Nav.Link className="my-2"> <Button id="btn-split" className="btn btn-success"><CheckCircle className="m-1" /><span className="pl-1">Split Button Success</span></Button></Nav.Link>
                                <Nav.Link className="my-2"> <Button id="btn-split" className="btn btn-info"><InfoCircle className="m-1" /><span className="pl-1">Split Button Info</span></Button></Nav.Link>
                                <Nav.Link className="my-2"> <Button id="btn-split" className="btn btn-warning"><FlagFill className="m-1" /><span className="pl-1">Split Button Warning</span></Button></Nav.Link>
                                <Nav.Link className="my-2"> <Button id="btn-split" className="btn btn-danger"><ExclamationCircleFill className="m-1" /><span className="pl-1">Split Button Danger</span></Button></Nav.Link>
                                <Nav.Link className="my-2"> <Button id="btn-split" className="btn btn-secondary"><FlagFill className="m-1" /><span className="pl-1">Split Button Secondary</span></Button></Nav.Link>
                                <Nav.Link className="my-2"> <Button id="btn-split" className="btn btn-light"><PlusCircleFill className="m-1" /><span className="pl-1">Split Button Info</span></Button></Nav.Link>

                                <div className="mb-4"></div>
                                    <p>Also works with small and large button classes!</p>
                                    <Nav.Link className="my-2"> <Button id="btn-split" className="btn btn-primary btn-sm"><FlagFill className="m-1" /><span className="pl-1">Split Button Small</span></Button></Nav.Link>
                                    <Nav.Link className="my-2"> <Button id="btn-split" className="btn btn-primary btn-lg"><FlagFill className="m-1" /><span className="pl-1">Split Button Large</span></Button></Nav.Link>


                            </Card.Body>
                        </Card>







                    </Col>
                </Row>

            </Container>


        </Base>



    )
}