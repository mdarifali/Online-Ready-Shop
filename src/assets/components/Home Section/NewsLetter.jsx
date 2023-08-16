import React from 'react';

const NewsLetter = () => {
    return (
        <div className='container-fluid mt-5' style={{ backgroundColor: '#ecf0f1' }}>
            <div className="container py-4">
                <div className='row align-items-center'>
                    <div className="col-lg-6 mb-lg-0 mb-4">
                        <h2>Newsletter</h2>
                        <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                    </div>
                    <div className="col-lg-6">
                        <div className='d-lg-flex d-md-flex '>
                            <input type="text" className='form-control rounded-0 py-2' placeholder='Your Email'/>
                            <button className='btn btn-danger rounded-0 px-4 mt-lg-0 mt-4'>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;