import React from 'react';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiYoutubeFill, RiHeartFill } from "react-icons/ri";
import app1 from '../../images/app.png';
import app2 from '../../images/app2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid bg-dark'>
            <nav className='container py-5'>
                <div className="row align-items-center">
                    <div className="col-4 col-lg-4 col-md-4">
                        <div className="navbar navbar-expand-lg navbar-dark ">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/shop">Shop</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/blogs">Blog</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4 col-md-6">
                        <div className='d-lg-flex justify-content-center mt-3'>
                            <div className="me-3 mb-lg-0 mb-4">
                                <Link to='#'>
                                    <img src={app1} alt="" />
                                </Link>
                            </div>
                            <div className="">
                                <Link to='#'>
                                    <img src={app2} alt="" />
                                </Link>
                            </div>
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