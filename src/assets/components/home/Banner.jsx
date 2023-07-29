import React from 'react';
import './home.css';

const Banner = () => {
    return (
        <div className='container-fluid' id='banner-bg'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className="col mt-5 text-uppercase">
                        <small>SPRING / SUMMER COLLECTION 2023</small>
                        <h1 className=' mt-4'>Get up-to <span className='text-danger fw-bold'>30%</span> Off</h1>
                        <h1>New Arrivals</h1>
                        <button className='btn btn-outline-danger mt-2 rounded-0'>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;