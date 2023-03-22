import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./base";



import { Button, Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";



import { Facebook, Google } from 'react-bootstrap-icons';


import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom";



export default function Register() {
    const history = useHistory();



    return (



        <div className="bg-primary">

            <Container id="login">

                <Row className="justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Create an Account</h1>
                                            </div>



                                            <form className="user">
                                                <div className="form-group row mb-2">
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control form-control-user " id="exampleFirstName"
                                                            placeholder="First Name" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                            placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                        placeholder="Email Address" />
                                                </div>
                                                <div className="mb-1 form-group row">
                                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                                        <input type="password" className="form-control form-control-user"
                                                            id="exampleInputPassword" placeholder="Password" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <input type="password" className="form-control form-control-user"
                                                            id="exampleRepeatPassword" placeholder="Repeat Password" />
                                                    </div>
                                                </div>
                                                <Nav.Link className="mt-4 p-1 w-100"
                                                    onClick={() => history.push("/login")}
                                                > <Button id="btn-f" className="btn btn-primary btn-block mb-1"

                                                >Register Account</Button></Nav.Link>
                                                <hr />
                                                <Nav.Link
                                                    onClick={() => history.push("/")}
                                                > <Button id="btn-g" className="btn btn-google btn-block"><Google className="mb-1" />Register with Google</Button></Nav.Link>

                                                <Nav.Link
                                                    onClick={() => history.push("/")}
                                                    className="mt-2"> <Button id="btn-f" className="btn btn-google btn-block"><Facebook className="mb-1" />Register with Facebook</Button></Nav.Link>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" 
                                                 onClick={()=>history.push("/forgetpassword")}
                                                >Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small"
                                                    onClick={() => history.push("/login")}
                                                >Already have an account? Login!</a>

                                             

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </Row>


        </Container>




</div >

    



    )
}