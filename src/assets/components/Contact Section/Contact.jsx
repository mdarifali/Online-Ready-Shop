import React from 'react';
import Map from './Map';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoYoutube } from 'react-icons/io';


const Contact = () => {
    return (
        <div>
            <div class="">
                <div class="container my-5">
                    <div class="mb-5">
                        <Map />
                    </div>
                    <div class="row">
                        <div className="col-6">
                            <h4 className='text-center'>Contact Us</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, earum quisquam veritatis perspiciatis ipsam magni?</p>
                            <div className='my-5'>
                                <span>Email: readyshop@gmail.com</span> <br />
                                <span>Phone Number: 001122339999</span> <br />
                                <span>Open hours: 8.00-18.00 Mon-Fri</span> <br />
                                <span>Sunday: Closed</span>
                            </div>
                            <div>
                                <h4>Follow Us</h4>
                                <FcGoogle  className='fs-2 me-3'/>
                                <AiFillFacebook className='fs-2 me-3' style={{color: '#3b5998'}}/>
                                <IoLogoYoutube className='fs-2' style={{color: '#c4302b'}}/>
                            </div>
                        </div>
                        <div class="col-6 text-black">
                            <form>
                                <h4 class="fw-normal mb-3 pb-3 text-center" style={{ letterSpacing: "1px" }}>
                                    Get In Touch With Us!
                                </h4>
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