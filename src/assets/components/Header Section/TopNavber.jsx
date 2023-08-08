import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const TopNavber = () => {
    return (
        <div class="container-fluid p-0 d-none d-lg-block d-xl-block d-xxl-block">
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container bg-dark">
                    <small className='text-light'>FREE SHIPPING ON ALL U.S ORDERS OVER $50</small>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item dropdown me-3">
                                <a class="nav-link text-light dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <small>USD</small>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ zIndex: '1025' }}>
                                    <li><a class="dropdown-item" href="#"><small>GBP</small></a></li>
                                    <hr />
                                    <li><a class="dropdown-item" href="#"><small>AUD</small></a></li>
                                    <hr />
                                    <li><a class="dropdown-item" href="#"><small>EUR</small></a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown me-3">
                                <a class="nav-link text-light dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <small>English</small>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ zIndex: '1025' }}>
                                    <li><a class="dropdown-item" href="#"><small>Spanish</small></a></li>
                                    <hr />
                                    <li><a class="dropdown-item" href="#"><small>French</small></a></li>
                                    <hr />
                                    <li><a class="dropdown-item" href="#"><small>Italian</small></a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown me-3">
                                <a class="nav-link text-light dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <small>My Account</small>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{ zIndex: '1025' }}>
                                    <li>
                                        <Link class="dropdown-item" to="/login">Sing In</Link>
                                    </li>
                                    <hr />
                                    <li>
                                        <Link class="dropdown-item" to="/register">Sing Up</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TopNavber;