import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./base";

import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
export default function Errorpage() {

    const history = useHistory();


    return (
        <Base>


            <div className="container-fluid">

               
                <div className="text-center">
                    <div className="error mx-auto" id="error" data-text="404">404</div>
                    <p className="lead text-gray-800 mb-5">Page Not Found</p>
                    <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                      <Nav.Link 
                            onClick={()=>history.push("/")}>&larr; Back to Dashboard</Nav.Link>
                </div>

            </div>

        </Base >



    )
}