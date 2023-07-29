import React from 'react';
import reg from '../../images/reg.jpg';
import { Link } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
    return (
        <div class="vh-100">
            <div class="container my-5">
                <div class="row">
                    <div class="col-sm-6 text-black bg-light">
                        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                            <form style={{ width: "23rem" }}>

                                <h4 class="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Register Now</h4>

                                <div class="form-outline mb-4">
                                    <input type="text" id='form2Example1' class="form-control form-control-lg" required />
                                    <label class="form-label" for="form2Example1">User Name</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example18" class="form-control form-control-lg" required/>
                                    <label class="form-label" for="form2Example18">Email address</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example28" class="form-control form-control-lg" required/>
                                    <label class="form-label" for="form2Example28">Password</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="form2Example28" class="form-control form-control-lg" required/>
                                    <label class="form-label" for="form2Example28">Confirm Password</label>
                                </div>

                                <div class="pt-1 mb-4">
                                    <button class="btn btn-info btn-lg rounded-0 w-100" type="submit">Sing Up</button>
                                </div>
                                <div class="mb-4 bg-white border p-2">
                                    <span className='me-5'>Sing up by:</span>
                                    <FcGoogle  className='fs-2 me-3'/>
                                    <AiFillFacebook className='fs-2' style={{color: '#3b5998'}}/>
                                </div>
                                <span className='text-danger'>Do you have an account? <Link to="/login" class="link-info">Login here</Link></span>
                            </form>
                        </div>

                    </div>
                    <div class="col-sm-6 px-0 d-none d-sm-block">
                        <img src={reg}
                            alt="Login image" class="w-100 vh-100 opacity-75" style={{ objectFit: "cover", objectPosition: "left" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;