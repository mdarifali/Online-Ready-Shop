import React from 'react';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiYoutubeFill, RiHeartFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className='container-fluid bg-dark mt-5'>
            <nav className='container py-5'>
                <div className="row align-items-baseline">
                    <div className="col-4 col-lg-4 col-md-4">
                        <div className="navbar navbar-expand-lg navbar-dark ">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href='/'>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 col-md-6">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Subscribe Your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button class="btn btn-danger" type="button" id="button-addon2">Send</button>  
                        </div>
                    </div>
                    <div className="col-2 col-lg-4 col-md-2">
                        <div className="navbar navbar-expand-lg navbar-dark ">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">
                                        <RiFacebookFill className='fs-5' />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <RiTwitterFill className='fs-5' />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <RiInstagramFill className='fs-5' />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href='/'>
                                        <RiYoutubeFill className='fs-5' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <p className='text-info'>©2023 All Rights Reserverd. Made with by <RiHeartFill className='text-danger fs-5' /> <span className='text-danger'>Md Arif</span></p>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Footer;