import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./base";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Calendar2CheckFill, CurrencyRupee, ListCheck, ChatRightFill } from 'react-bootstrap-icons';
import Navb from "./nav";
import BarChart from "./barchart";
import { Bar } from "react-chartjs-2";
import LineChart from "./line";
import DoughnutChart from "./doughnut";
// import Chart from "chart.js/auto";
// import { CategoryScale } from "chart.js";


// Chart.register(CategoryScale);

export default function Admin() {

    return (
        <Navb>

            <Container fluid>
                <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>
                <Row>

                    <Col xl={3} md={6} className="mb-4">

                        <Card className="border-left-primary shadow h-100 py-2">
                            <Card.Body>
                                <Row className=" no-gutters align-items-center">
                                    <Col className="mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Earnings (Monthly)</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                    </Col>
                                    <div className="col-auto">
                                        <i><Calendar2CheckFill color="royalblue" size={30} /></i>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xl={3} md={6} className="mb-4">

                        <Card className="border-left-success shadow h-100 py-2">
                            <Card.Body>
                                <Row className=" no-gutters align-items-center">
                                    <Col className="mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Earnings (Annual)</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                    </Col>
                                    <div className="col-auto">
                                        <i><CurrencyRupee color="gold" size={30} /></i>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>


                    </Col>
                    <Col xl={3} md={6} className="mb-4">

                        <Card className="border-left-primary shadow h-100 py-2">
                            <Card.Body>
                                <Row className=" no-gutters align-items-center">
                                    <Col className="mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Tasks</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">50%</div>
                                    </Col>

                                    <Col>
                                        <div className="progress progress-sm mr-2">
                                            <div className="progress-bar bg-info" role="progressbar"
                                                style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </Col>
                                    <div className="col-auto">
                                        <i><ListCheck color="royalblue" size={30} /></i>
                                    </div>
                                </Row>

                            </Card.Body>
                        </Card>


                    </Col>
                    <Col xl={3} md={6} className="mb-4">


                        <Card className="border-left-primary shadow h-100 py-2">
                            <Card.Body>
                                <Row className=" no-gutters align-items-center">
                                    <Col className="mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Pending Requests</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                    </Col>
                                    <div className="col-auto">
                                        <i><ChatRightFill color="grey" size={30} /></i>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Title className="py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6></Card.Title>


                            <LineChart className="mb-3 "/>
                        </Card>
                    </Col>
                    <Col lg={6}>
                    <Card id="doughnutcard">
                            <Card.Title className="">
                                <h6 className="m-0 font-weight-bold text-primary">Revenue Resourses</h6></Card.Title>
                                <Card.Text>
                                <DoughnutChart  id="doughnut" className="mb-3 "/>
                                </Card.Text>
                        </Card>

                    </Col>
                </Row>
                <Row>

                    <Col lg={6}>

                        <Card className="shadow mb-4">
                            <Card.Header className="py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                            </Card.Header>
                            <Card.Body>
                                <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "20%" }}
                                        aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                                <h4 className="small font-weight-bold">Sales Tracking <span
                                    className="float-right">40%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "40%" }}
                                        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 className="small font-weight-bold">Customer Database <span
                                    className="float-right">60%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar" role="progressbar" style={{ width: "60%" }}
                                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 className="small font-weight-bold">Payout Details <span
                                    className="float-right">80%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "80%" }}
                                        aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 className="small font-weight-bold">Account Setup <span
                                    className="float-right">Complete!</span></h4>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }}
                                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">

                                    </div>
                                </div>
                                <Row>
                                    <Col lg={6} className="mt-4" >
                                        <Card className="bg-primary text-white shadow">

                                            <Card.Body>
                                                Primary
                                                <div className="text-white-50 small">#4e73df</div>
                                            </Card.Body>
                                        </Card>

                                    </Col>
                                    <Col lg={6} className="mt-4">
                                        <Card className="bg-success text-white shadow">

                                            <Card.Body>
                                                Success
                                                <div className="text-white-50 small">#1cc88a</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6} className="mt-2" >
                                        <Card className="bg-info text-white shadow">

                                            <Card.Body>
                                                Info
                                                <div className="text-white-50 small">#36b9cc</div>
                                            </Card.Body>
                                        </Card>

                                    </Col>
                                    <Col lg={6} className="mt-2">
                                        <Card className="bg-warning text-white shadow">

                                            <Card.Body>
                                                Warning
                                                <div className="text-white-50 small">#f6c23e</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6} className="mt-2" >
                                        <Card className="bg-danger text-white shadow">

                                            <Card.Body>
                                                Danger
                                                <div class="text-white-50 small">#e74a3b</div>
                                            </Card.Body>
                                        </Card>

                                    </Col>
                                    <Col lg={6} className="mt-2">
                                        <Card className="bg-secondary text-white shadow">

                                            <Card.Body>
                                                Secondary
                                                <div className="text-white-50 small">#858796</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col lg={6} className="mb-4 mt-2" >
                                        <Card className="bg-light text-black shadow">

                                            <Card.Body>
                                                Light
                                                <div className="text-black-50 small">#1cc88a</div>
                                            </Card.Body>
                                        </Card>

                                    </Col>
                                    <Col lg={6} className="mb-4 mt-2">
                                        <Card className="bg-dark text-white shadow">

                                            <Card.Body>
                                                Dark
                                                <div className="text-white-50 small">#1cc88a</div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>


                            </Card.Body>

                        </Card>


                    </Col>
                    <Col lg={6}>
                        <Card className="shadow mb-4">

                            <Card.Header className="py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                            </Card.Header>
                            <Card.Body>
                                <div className="text-center">
                                    <Image
                                        alt="..."
                                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                        style={{ width: "25rem" }}
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5CVZKHyG1rqDQLoJSNTurg_MXMQ7cUnsU-jXAAKBrOSjOP2Sy" />


                                </div>
                                <p>Add some quality, svg illustrations to your project courtesy of <a
                                    target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                    constantly updated collection of beautiful svg images that you can use
                                    completely free and without attribution!</p>
                                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                    unDraw &rarr;</a>

                            </Card.Body>
                        </Card>

                        <Card className="shadow mb-4">

                            <Card.Header className="py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                            </Card.Header>
                            <Card.Body>
                                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                    CSS bloat and poor page performance. Custom CSS classes are used to create
                                    custom components and custom utility classes.</p>
                                <p className="mb-0">Before working with this theme, you should become familiar with the
                                    Bootstrap framework, especially the utility classes.</p>

                            </Card.Body>
                        </Card>

                    </Col>


                </Row>

            </Container>



        </Navb>

    )
}