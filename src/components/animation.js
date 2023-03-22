import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./base";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button, Col, Container, Row } from "react-bootstrap";
import Navb from "./nav";


export default function Animations() {




    return (
        <Navb>

            <h1 className="h3 m-4 text-gray-800">Animation Utilities</h1>
            <p className="mb-4">Bootstrap's default utility classes can be found on the official <a
                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework.</p>
            <Container fluid>
                <Row>

                    <Col lg={6}>

                        <div className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <code>.animated--grow-in</code>
                            </div>
                        </div>
                        <div class="small mb-1">Navbar Dropdown Example:</div>



                        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">NavBar</Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                    </Col>

                    <Col lg={6}>
                    <div className="py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <code>.animated--fade-in</code>
                            </div>
                        </div>
                        <div class="small mb-1">Navbar Dropdown Example:</div>



                        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">NavBar</Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div class="small mb-1">Dropdown Button Example:</div>    
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>   
                    </Col>




                </Row>







            </Container>
            </Navb>



    )
}