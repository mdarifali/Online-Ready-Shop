import React from 'react';
import './header.css';
import { BiSearchAlt, BiUser, BiCartAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const MainNavber = () => {
    return (
        <div class="container-fluid p-0 sticky-top" >
            <nav class="navbar navbar-expand-lg bg-white py-3 shadow">
                <div class="container p-0">
                    <Link class="navbar-brand me-0 me-lg-3" to="/">READY<span className='text-info'>SHOP</span></Link>
                    <button class="navbar-toggler order-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto fw-bold">
                            <Link class="nav-link text-dark me-4 link-hover" to="/"><small>HOME</small></Link>
                            <Link class="nav-link text-dark me-4 link-hover" to="/shop"><small>SHOP</small></Link>
                            <a class="nav-link text-dark me-4 link-hover" href="#"><small>PROMOTION</small></a>
                            <Link class="nav-link text-dark me-4 link-hover" to="/blogs"><small>BLOG</small></Link>
                            <Link class="nav-link text-dark me-4 link-hover" to='/contact'><small>CONTACT</small></Link>
                        </div>
                    </div>
                    <div class="fw-bold d-flex order-2 ms-0 ms-md-5 ms-lg-5 ms-xl-5 dropdown">
                        <a class="nav-link text-dark me-1 me-lg-3 fs-5" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                            <BiSearchAlt /></a>
                        <a class="nav-link text-dark me-1 me-lg-3 fs-5" href="#" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"
                        ><BiUser /></a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><Link class="dropdown-item" to="/profile">My Profile</Link></li>
                            <li><Link class="dropdown-item" to="/order">My Order</Link></li>
                            <li><a class="dropdown-item" href="#">My Favorites</a></li>
                            <li><a class="dropdown-item active" href="#">Logout</a></li>
                        </ul>
                        <button type="button" class="btn btn-light position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <BiCartAlt className='fs-5' />
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                2
                            </span>
                        </button>
                    </div>
                </div>
            </nav>
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasTopLabel">Search Items</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className='d-flex justify-content-center align-items-center'>
                        <input type="search" className='form-control w-25 me-1' placeholder='search  items' name="search"/>
                        <div><BiSearchAlt className='fs-1'/></div>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">My Cart</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    No items added
                </div>
            </div>
        </div>
    );
};

export default MainNavber;