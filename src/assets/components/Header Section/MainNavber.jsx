import React, { useState } from 'react';
import Swal from 'sweetalert2'
import './header.css';
import { BiSearchAlt, BiUser, BiCartAlt } from "react-icons/bi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import cartimg1 from '../../images/product_1.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/features/counter/counterSlice';

const MainNavber = () => {

    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const auth = getAuth(app)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleLogout = () => {
        signOut(auth)
            .then(result => {
                Swal.fire(
                    'User',
                    'Logout Successful',
                    'success'
                )
                navigate('/login')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='sticky-top'>
            <nav class="navbar navbar-expand-lg bg-white shadow">
                <div class="container-fluid">
                    <Link class="nav-link" to="/">READY<span className='text-info'>SHOP</span></Link>
                    <button class="navbar-toggler order-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div class="navbar-nav m-auto fw-bold">
                            <Link class="nav-link text-dark me-4 link-hover" to="/"><small>HOME</small></Link>
                            <Link class="nav-link text-dark me-4 link-hover" to="/shop"><small>SHOP</small></Link>
                            <Link class="nav-link text-dark me-4 link-hover" to="#"><small>Dashboard</small></Link>
                            <Link class="nav-link text-dark me-4 link-hover" to="/blogs"><small>BLOG</small></Link>
                            <Link class="nav-link text-dark me-4 link-hover" to='/contact'><small>CONTACT</small></Link>
                        </div>
                    </div>
                    <div class="d-flex order-2 dropdown align-items-center">
                        <a class="nav-link text-dark" to="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                            <BiSearchAlt className='fs-5 me-2 me-lg-5 me-md-5 me-xl-5' />
                        </a>
                        <a class="nav-link text-dark" to="#" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"
                        ><BiUser className='fs-5 me-2 me-lg-5 me-md-5 me-xl-5' /></a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><Link class="dropdown-item" to="/dashboard">My Dashboard</Link></li>
                            {user ?

                                <li><button onClick={handleLogout} class="dropdown-item active btn">Logout</button></li>
                                :
                                <li><Link class="dropdown-item active" to="/login">Login</Link></li>
                            }

                        </ul>
                        <button type="button" class="btn btn-light position-relative rounded-pill p-0 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
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
                        <input type="search" className='form-control w-25 me-1' placeholder='search  items' name="search" />
                        <div><BiSearchAlt className='fs-1' /></div>
                    </div>
                </div>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">My Cart</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className="row align-items-center text-center">
                        <div className="col">
                            <img src={cartimg1} calt="" style={{ height: '100px' }} />
                        </div>
                        <div className="col">
                            <small>Branded Hoddy (coffee color) </small>
                            <div className='d-flex flex-row align-items-center mt-2'>
                                <span onClick={() => dispatch(increment())} >
                                    <AiOutlinePlus className='fs-4' />
                                </span>
                                <input type="text" value={count} className='form-control text-info f text-center mx-1 rounded-pill' style={{ width: '50px' }} />
                                <span onClick={() => dispatch(decrement())} >
                                    <AiOutlineMinus className='fs-4' />
                                </span>
                            </div>
                        </div>
                        <div className="col">
                            <div className='float-end'>
                                <button type="button" class="btn-close" aria-label="Close"></button>
                                <h5 className='text-danger fw-bolder mt-5'>$500</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNavber;