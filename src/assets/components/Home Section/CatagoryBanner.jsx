import React from 'react';
import './home.css';
import banner1 from '../../images/banner_1.jpg';
import banner2 from '../../images/banner_2.jpg';
import banner3 from '../../images/banner_3.jpg';
import { Link } from 'react-router-dom';

const CatagoryBanner = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-4 mb-4 mb-lg-0">
                    <div id='banner-1'>
                        <div>
                            <Link to='/shop/men' class="btn btn-light btn-lg rounded-0 px-4 fw-bold">Women's</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 mb-lg-0">
                    <div id='banner-2'>
                        <div>
                            <Link to='/shop/accessories' class="btn btn-light btn-lg rounded-0 px-4 fw-bold">Accessories's</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5 mb-lg-0">
                    <div id='banner-3'>
                        <div>
                            <Link to='/shop/men' class="btn btn-light btn-lg rounded-0 px-4 fw-bold">Men's</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatagoryBanner;