import React from 'react';
import product5 from '../../images/product_5.png';
import product6 from '../../images/product_6.png';
import product9 from '../../images/product_9.png';
import product10 from '../../images/product_10.png';

const Men = () => {
    return (
        <div className='row g-3'>
            <div className="col-md-4 col-lg-3 col-6">
                <div class="card shadow rounded-0">
                    <img src={product5} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="#" class="btn btn-danger rounded-0">Add to Cart</a>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-6">
                <div class="card shadow rounded-0">
                    <img src={product6} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="#" class="btn btn-danger rounded-0">Add to Cart</a>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-6">
                <div class="card shadow rounded-0">
                    <img src={product9} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="#" class="btn btn-danger rounded-0">Add to Cart</a>
                </div>
            </div>
            <div className="col-md-4 col-lg-3 col-6">
                <div class="card shadow rounded-0">
                    <img src={product10} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <a href="#" class="btn btn-danger rounded-0">Add to Cart</a>
                </div>
            </div>
        </div>
    );
};

export default Men;