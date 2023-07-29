import React from 'react';
import './home.css';
import banner1 from '../../images/banner_1.jpg';
import banner2 from '../../images/banner_2.jpg';
import banner3 from '../../images/banner_3.jpg';

const CatagoryBanner = () => {
    return (
        <div className='container my-5'>
            <div className="row g-4">
                <div className="col-md-4">
                    <div id='banner-1'>
                        <div>
                            <button class="btn btn-outline-light btn-lg rounded-0 px-4 fw-bold">Women's</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div id='banner-2'>
                        <div>
                            <button class="btn btn-outline-light btn-lg rounded-0 px-4 fw-bold">Accessories's</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div id='banner-3'>
                        <div>
                            <button class="btn btn-outline-light btn-lg rounded-0 px-4 fw-bold">Men's</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatagoryBanner;