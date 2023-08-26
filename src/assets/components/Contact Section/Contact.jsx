import React from 'react';
import Map from './Map';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoYoutube } from 'react-icons/io';
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <div>
            <div class="">
                <div class="container my-5">
                    <div class="mb-5">
                        <Map />
                    </div>
                    <div class="row">
                        <div className="col-xl-6 col-lg-6 col-12 mb-5 mb-lx-0 mb-lg-0 mb-md-0">
                            <h4 className='text-info fw-bold mb-5'>Contact Us</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, earum quisquam veritatis perspiciatis ipsam magni?</p>
                            <div className='mb-4'>
                                <span>Email: readyshop@gmail.com</span> <br />
                                <span>Phone Number: 001122339999</span> <br />
                                <span>Open hours: 8.00-18.00 Mon-Fri</span> <br />
                                <span>Sunday: Closed</span>
                            </div>
                            <div  className='d-flex'>
                                <h5 className='text-danger me-3'>Follow Us:</h5>
                                <Link to='#' ><FcGoogle  className='fs-3 me-3'/></Link>
                                <AiFillFacebook className='fs-3 me-3' style={{color: '#3b5998'}}/>
                                <IoLogoYoutube className='fs-3' style={{color: '#c4302b'}}/>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-12">
                            <form>
                                <h4 class="fw-bold text-info mb-5">Get In Touch With Us!</h4>
                                <div className="row">
                                    <div className="col-6">
                                        <div class="form-outline mb-4">
                                            <input type="text" class="form-control" placeholder='Name' required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div class="form-outline mb-4">
                                            <input type="number" class="form-control" placeholder='Phone Number' required />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="email" id="form2Example18" class="form-control" placeholder='Your Email' required />
                                </div>
                                <div class="form-outline mb-4">
                                    <textarea className='form-control' rows="5" placeholder='Your Massage'></textarea>
                                </div>
                                <div class="pt-1 text-center">
                                    <button class="btn btn-success w-100 rounded-0" type="submit">Send Massage</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;