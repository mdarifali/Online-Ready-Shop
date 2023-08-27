import React from 'react';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiYoutubeFill, RiHeartFill } from "react-icons/ri";
import app1 from '../../images/app.png';
import app2 from '../../images/app2.png';
import payment from '../../images/payment getway.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid p-0 bg-dark'>
            <div className='container pt-5'>
                <div className="d-flex justify-content-between">
                    <div className="">
                        <Link class="nav-link text-light" to="/">READY<span className='text-info'>SHOP</span></Link>
                        <div className="navbar navbar-dark ">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">News</Link>
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

                    <div className=''>
                        <p className='text-light'>Download App</p>
                        <div className=" mb-2">
                            <Link to='#'>
                                <img src={app1} alt="" style={{ width: '130px', height: 'auto' }} />
                            </Link>
                        </div>
                        <div>
                            <Link to='#'>
                                <img src={app2} alt="" style={{ width: '130px', height: 'auto' }} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src={payment} alt="" className='img-fluid' />
                </div>
                <div className="mt-3">
                    <div className=" text-center">
                        <p className='text-info'>©2023 All Rights Reserverd. Made with by <RiHeartFill className='text-danger fs-5' /> <span className='text-danger'>Md Arif</span></p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center bg-white text-danger py-2'>
                <a class="nav-link me-4" to="#">
                    <RiFacebookFill className='fs-4' />
                </a>
                <a class="nav-link me-4" to="#">
                    <RiTwitterFill className='fs-4' />
                </a>
                <a class="nav-link me-4" to="#">
                    <RiInstagramFill className='fs-4' />
                </a>
                <a class="nav-link me-4" to='/'>
                    <RiYoutubeFill className='fs-4' />
                </a>
            </div>
        </div>
    );
};

export default Footer;