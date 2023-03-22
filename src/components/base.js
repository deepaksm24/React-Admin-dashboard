import React from "react";

import { useHistory } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Footer from "./footer";



export default function Base({children}) {

    const history = useHistory();

    return (
        <div>



            <div className="container-fluid">
                <div className="row" id="baserow">
                    <div className=" col col-xl-2 col-lg-2 col-md-2 col-sm-2"id="sidebar">
                        <div id="wrapper">

                            
<ul>
                         <li><Nav.Link 
                            onClick={()=>history.push("/")}>SB Admin <sup>2</sup></Nav.Link> </li>     
                           

                         <li>    <Nav.Link 
                            onClick={()=>history.push("/")}>DASHBOARD</Nav.Link></li>
                                



                                <div className="sidebar-heading" id="sidehead">
                                    Interface
                                </div>

                               

                                <li >
                                    <NavDropdown title="Components" id="navbarScrollingDropdown">
                                        <p>Custom Components</p>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                         onClick={()=>history.push("/buttons")}
                                        >Buttons</NavDropdown.Item>
                                        <NavDropdown.Item
                                         onClick={()=>history.push("/cards")}>Cards</NavDropdown.Item>


                                    </NavDropdown>

                                </li>
                            



                                <li >
                                    <NavDropdown title="Utilites" id="navbarScrollingDropdown">
                                        <p>Custom Utilities:</p>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item 
                                        onClick={()=>history.push("/colours")}>Colours</NavDropdown.Item>
                                        <NavDropdown.Item 
                                         onClick={()=>history.push("/borders")}>Borders</NavDropdown.Item>
                                        <NavDropdown.Item 
                                        onClick={()=>history.push("/animations")}>Animation</NavDropdown.Item>
                                        <NavDropdown.Item 
                                        onClick={()=>history.push("/others")}>Others</NavDropdown.Item>


                                    </NavDropdown>

                                </li>
                               

                                <div className="sidebar-heading" id="sidehead">
                                    Add ons</div>
                                    <li >
                                    <NavDropdown title="Pages" id="navbarScrollingDropdown">
                                        <p>Login Screens:</p>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item 
                                         onClick={()=>history.push("/login")}
                                        >Login</NavDropdown.Item>

                                        <NavDropdown.Item 
                                         onClick={()=>history.push("/register")}>Register</NavDropdown.Item>
                                        <NavDropdown.Item 
                                         onClick={()=>history.push("/forgetpassword")}>Forgot Password</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <p>Other Pages:</p>
                                        <NavDropdown.Item 
                                        onClick={()=>history.push("/errors")}>404 Page</NavDropdown.Item>

                                        <NavDropdown.Item
                                        onClick={()=>history.push("/blankpage")}>Blank Page</NavDropdown.Item>


                                    </NavDropdown>

                                </li>
                              
                            <li>    <Nav.Link
                            onClick={()=>history.push("/charts")}>Charts</Nav.Link> </li>
                           

                            <li>   <Nav.Link 
                            onClick={()=>history.push("/tables")}>Tables</Nav.Link></li>

                        

</ul>

                        </div>
                    </div>
                    <div className="col col-xl-10 col-lg-10 col-md-10 col-sm-10" >
                    {children}
                    </div>
                </div>
            </div>

        </div>

    )
}