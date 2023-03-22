import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./base";



import { Button, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Nav from 'react-bootstrap/Nav';
import { useHistory } from "react-router-dom";



export default function Forget() {
    const history = useHistory();



    return (

        <div className="bg-primary">

            <Container id="login">

                <Row className="justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                                <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                                    and we'll send you a link to reset your password!</p>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."/>
                                                </div>
                                                <Nav.Link 
                                                 onClick={()=>history.push("/")}
                                                className=" w-100"> <Button id="btn-f" className="btn btn-primary btn-block mb-1"

                                                >Reset Password</Button></Nav.Link>
                                            </form>

                                            <hr/>
                                                <div className="text-center">
                                                    <a className="small"  onClick={()=>history.push("/register")}>Create an Account!</a>
                                                </div>
                                                <div className="text-center">
                                                    <a className="small" onClick={()=>history.push("/login")}>Already have an account? Login!</a>
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