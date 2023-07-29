import React from 'react';
import deal from '../../images/deal_ofthe_week.png';

const DealWeek = () => {
    return (
        <div className='container-fluid bg-light'>
            <div className='container'>
                <div class="mb-3">
                    <div class="row g-0">
                        <div class="col-md-6 d-flex justify-content-center">
                            <img src={deal} class="img-fluid" alt="..." />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body text-end py-5">
                                <h1 class="card-title my-5">Deal Of The Week</h1>
                                <p class="card-text">This is a wider card with supporting text below as a 
                                    natural lead-in to additional content. This content is a little bit longer.</p>
                                <button className='btn btn-outline-dark btn-lg rounded-0'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealWeek;