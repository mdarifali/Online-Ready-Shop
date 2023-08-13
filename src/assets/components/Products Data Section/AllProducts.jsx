import React from 'react';
import './products.css';
import product1 from '../../images/product_1.png';
import product2 from '../../images/product_2.png';
import product3 from '../../images/product_3.png';
import product4 from '../../images/product_4.png';
import product5 from '../../images/product_5.png';
import product6 from '../../images/product_6.png';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    return (
        <div className='row g-5 text-center'>
            <div className="col-md-4 col-lg-3 col-12">
                <div class="card border-0 card-body-hover">
                    <Link to='/single-poduct' class="nav-link">
                        <img src={product1} class="card-img-top" alt="..." />
                    </Link>
                    <div class="card-body">
                        <p class="card-title">Branded Hoddy (coffee color)</p>
                        <span class="card-text text-danger fw-bolder">$500</span>
                    </div>
                    <button class="btn btn-outline-danger rounded-0">Add to Cart</button>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-12">
                <div class="card border-0 card-body-hover">
                    <img src={product2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Branded Hoddy (coffee color)</p>
                        <span class="card-text text-danger fw-bolder">$500</span>
                    </div>
                    <button class="btn btn-outline-danger rounded-0">Add to Cart</button>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-12">
                <div class="card border-0 card-body-hover">
                    <img src={product3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Branded Hoddy (coffee color)</p>
                        <span class="card-text text-danger fw-bolder">$500</span>
                    </div>
                    <button class="btn btn-outline-danger rounded-0">Add to Cart</button>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-12">
                <div class="card border-0 card-body-hover">
                    <img src={product4} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Branded Hoddy (coffee color)</p>
                        <span class="card-text text-danger fw-bolder">$500</span>
                    </div>
                    <button class="btn btn-outline-danger rounded-0">Add to Cart</button>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-12">
                <div class="card border-0 card-body-hover">
                    <img src={product5} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Branded Hoddy (coffee color)</p>
                        <span class="card-text text-danger fw-bolder">$500</span>
                    </div>
                    <button class="btn btn-outline-danger rounded-0">Add to Cart</button>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-12">
                <div class="card border-0 card-body-hover">
                    <img src={product3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Branded Hoddy (coffee color)</p>
                        <span class="card-text text-danger fw-bolder">$500</span>
                    </div>
                    <button class="btn btn-outline-danger rounded-0">Add to Cart</button>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-12">
                <div class="card border-0 card-body-hover">
                    <img src={product1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Branded Hoddy (coffee color)</p>
                        <span class="card-text text-danger fw-bolder">$500</span>
                    </div>
                    <button class="btn btn-outline-danger rounded-0">Add to Cart</button>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-12">
                <div class="card border-0 card-body-hover">
                    <img src={product6} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title">Branded Sunglash (Black color)</p>
                        <span class="card-text text-danger fw-bolder">$500</span>
                    </div>
                    <button class="btn btn-outline-danger rounded-0">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;