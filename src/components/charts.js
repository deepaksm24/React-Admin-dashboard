import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./base";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Doughnut } from "react-chartjs-2";
import DoughnutChart from "./doughnut";
import LineChart from "./line";

export default function Charts() {




    return (
        <Base>
            <Container fluid>

                <h1 class="h3 mt-4 text-gray-800">Charts</h1>
                <p class="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
                    The charts below have been customized - for further customization options, please visit the <a
                        target="_blank" href="https://www.chartjs.org/docs/latest/">official Chart.js
                        documentation</a>.</p>
                <Row>

                    <Col xl={4} lg={4}>


                        <Card id="doughnutcard">
                            <Card.Title className="">
                                <h6 className="m-0 font-weight-bold text-primary">Doughnut Chart</h6></Card.Title>
                            <Card.Text>
                                <DoughnutChart id="doughnut" className="mb-3 " />
                            </Card.Text>
                        </Card>




                    </Col>

                    <Col xl={4} lg={4}>

                        <Card id="doughnutcard">
                            <Card.Title className="py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Line Graph</h6></Card.Title>


                            <LineChart className="mb-3 " />
                        </Card>





                    </Col>

 <Col xl={4} lg={4}>

                     





                    </Col>
                </Row>





            </Container>



        </Base >



    )
}