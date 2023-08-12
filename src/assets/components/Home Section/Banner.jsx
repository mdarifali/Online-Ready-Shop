import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='container-fluid' id='banner-bg'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className="col mt-5 text-uppercase">
                        <p className='text-light'>SPRING / SUMMER COLLECTION 2023</p>
                        <h1 className=' mt-4'>Get up-to <span className='text-danger fw-bold'>30%</span> Off</h1>
                        <h1>New Arrivals</h1>
                        <Link className='btn px-4 btn-danger mt-2 rounded-0' to='/shop'>SHOP NOW</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;