import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { image, name, price, rating, category} = product;
    
    return (
        <div className="col-md-4 col-lg-3 col-6 col-ex-sm">
            <div class="card border-0 card-body-hover">
                <Link to={`/single-porduct/${product._id}`} class="nav-link">
                    <img src={image} class="card-img-top" alt="product Image" />
                </Link>
                <div class="card-body">
                    <p class="card-title">{name}</p>
                    <span class="card-text text-danger fw-bolder">${price}</span>
                </div>
                <button class="btn btn-outline-danger rounded-0">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;