import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Bootstrap } from 'react-bootstrap-icons';

import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navb({children}) {

    const history = useHistory();


    return (

        <div>
            <div className="sidebar mt-4">
                {/* <a href="#home">Home</a>
                <a href="#news">News</a>

                <a href="#contact">Contact</a>
                <a href="#about">About</a> */}


                <Nav.Link className="navlink"
                    onClick={() => history.push("/")}><Bootstrap color="royalblue" size={30} id="boxlogo" />SB Admin <sup>2</sup></Nav.Link>
                <Nav.Link className="navlink"
                    onClick={() => history.push("/")}>DASHBOARD</Nav.Link>
                <div className="sidebar-heading" id="sideheader">
                    Interface
                </div>

                <NavDropdown title="Components" id="navbarScrollingDropdown">
                    <p>Custom Components</p>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                        onClick={() => history.push("/buttons")}
                    >Buttons</NavDropdown.Item>
                    <NavDropdown.Item
                        onClick={() => history.push("/cards")}>Cards</NavDropdown.Item>


                </NavDropdown>
                <NavDropdown title="Utilites" id="navbarScrollingDropdown">
                    <p>Custom Utilities:</p>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                        onClick={() => history.push("/colours")}>Colours</NavDropdown.Item>
                    <NavDropdown.Item
                        onClick={() => history.push("/borders")}>Borders</NavDropdown.Item>
                    <NavDropdown.Item
                        onClick={() => history.push("/animations")}>Animation</NavDropdown.Item>
                    <NavDropdown.Item
                        onClick={() => history.push("/others")}>Others</NavDropdown.Item>
                   
                </NavDropdown>

                <div className="sidebar-heading" id="sideheader">
                        Add ons</div>


                    <NavDropdown title="Pages" id="navbarScrollingDropdown">
                        <p>Login Screens:</p>
                        
                        <NavDropdown.Item
                            onClick={() => history.push("/login")}
                        >Login</NavDropdown.Item>

                        <NavDropdown.Item
                            onClick={() => history.push("/register")}>Register</NavDropdown.Item>
                        <NavDropdown.Item
                            onClick={() => history.push("/forgetpassword")}>Forgot Password</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <p>Other Pages:</p>
                        <NavDropdown.Item
                            onClick={() => history.push("/errors")}>404 Page</NavDropdown.Item>

                        <NavDropdown.Item
                            onClick={() => history.push("/blankpage")}>Blank Page</NavDropdown.Item>


                    </NavDropdown>
                <Nav.Link
                    onClick={() => history.push("/charts")}>Charts</Nav.Link>
                <Nav.Link
                    onClick={() => history.push("/tables")}>Tables</Nav.Link>
            </div>

            <div className="main">

            {children}



            </div>
        </div>





    )
}