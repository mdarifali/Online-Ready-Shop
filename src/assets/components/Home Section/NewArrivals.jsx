import React from 'react';
import './home.css';
import AllProducts from '../Products Data Section/AllProducts';
import Women from '../Products Data Section/Women';
import Men from '../Products Data Section/Men';
import './home.css';

const NewArrivals = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <h1 className='text-center'>New Arrivals</h1>
                <div className='col mt-5 text-lg-center text-md-center'>
                    <ul class="nav nav-pills mb-5 d-inline-flex  align-items-left align-items-md-center justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item border" role="presentation">
                            <button class="nav-link rounded-0 active " id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">ALL</button>
                        </li>
                        <li class="nav-item border" role="presentation">
                            <button class="nav-link rounded-0" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">WOMEN'S</button>
                        </li>
                        <li class="nav-item border" role="presentation">
                            <button class="nav-link rounded-0" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">MEN'S</button>
                        </li>
                        <li class="nav-item border" role="presentation">
                            <button class="nav-link rounded-0" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact2" type="button" role="tab" aria-controls="pills-contact2" aria-selected="false">ACCESSORIES'S</button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <AllProducts />
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <Women/>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <Men />                
                        </div>
                        <div class="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact2-tab">
                            <Men />                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;