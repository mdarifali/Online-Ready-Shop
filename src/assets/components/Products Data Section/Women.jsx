import React from 'react';
import product2 from '../../images/product_2.png';
import product3 from '../../images/product_3.png';
import product4 from '../../images/product_4.png';
import product7 from '../../images/product_7.png';


const Women = () => {
    return (
        <div className='row g-3'>
            <div className="col-md-4 col-lg-3 col-6">
                <div class="card shadow rounded-0">
                    <img src={product2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="#" class="btn btn-outline-danger rounded-0">Add to Cart</a>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-6">
                <div class="card shadow rounded-0">
                    <img src={product3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="#" class="btn btn-outline-danger rounded-0">Add to Cart</a>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-6">
                <div class="card shadow rounded-0">
                    <img src={product4} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="#" class="btn btn-outline-danger rounded-0">Add to Cart</a>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-6">
                <div class="card shadow rounded-0">
                    <img src={product7} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="#" class="btn btn-outline-danger rounded-0">Add to Cart</a>
                </div>
            </div>
        </div>
    );
};

export default Women;