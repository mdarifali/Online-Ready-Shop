import React from 'react';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiYoutubeFill, RiHeartFill } from "react-icons/ri";
import app1 from '../../images/app.png';
import app2 from '../../images/app2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid p-0 bg-dark'>
            <nav className='container py-5'>
                <div className="row align-items-center">
                    <div className="col">
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
                    <div className="col">
                        <div className='mt-3'>
                            <div className=" mb-4">
                                <Link to='#'>
                                    <img src={app1} alt="" />
                                </Link>
                            </div>
                            <div>
                                <Link to='#'>
                                    <img src={app2} alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className=" text-center">
                        <p className='text-info'>©2023 All Rights Reserverd. Made with by <RiHeartFill className='text-danger fs-5' /> <span className='text-danger'>Md Arif</span></p>
                    </div>
                </div>
            </nav>
            <div className='d-flex justify-content-center bg-white text-danger py-2'>
                <a class="nav-link me-4" href="#">
                    <RiFacebookFill className='fs-4' />
                </a>
                <a class="nav-link me-4" href="#">
                    <RiTwitterFill className='fs-4' />
                </a>
                <a class="nav-link me-4" href="#">
                    <RiInstagramFill className='fs-4' />
                </a>
                <a class="nav-link me-4" href='/'>
                    <RiYoutubeFill className='fs-4' />
                </a>
            </div>
        </div>
    );
};

export default Footer;