import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./base";

import { Facebook, Google } from 'react-bootstrap-icons';

import { Button, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom";




export default function Login() {

   
    const history = useHistory();

    return (

       

        <div className="bg-primary">

            <Container id="login">

                <Row className="justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="m-2 form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control m-2 form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        <label className="m-2 custom-control-label" for="customCheck">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                <Nav.Link 
                                                 onClick={()=>history.push("/")}
                                                className=" w-100"> <Button id="btn-f" className="btn btn-primary btn-block mb-1"

                                                >Login</Button></Nav.Link>

                                                <Nav.Link 
                                                 onClick={()=>history.push("/")}
                                                > <Button id="btn-g" className="btn btn-google btn-block"><Google className="mb-1" />Login with Google</Button></Nav.Link>

                                                <Nav.Link 
                                                 onClick={()=>history.push("/")}
                                                className="mt-2"> <Button id="btn-f" className="btn btn-google btn-block"><Facebook className="mb-1" />Login with Facebook</Button></Nav.Link>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small"
                                                onClick={()=>history.push("/forgetpassword")}
                                                >Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" 
                                                 onClick={()=>history.push("/register")}
                                                >Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </Row>


            </Container>




        </div>




    )
}