import React from 'react';
import './products.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { image, name, price, description } = product;

    return (
        <div className="col-md-4 col-lg-3 col-6 col-ex-sm">
            <div class="card card-body-hover">
                <Link to={`/single-porduct/${product._id}`} class="nav-link">
                    <img src={image} class="card-img-top card-img" alt="product Image" />
                    <div class="card-body">
                        <p class="card-title">{name}</p>
                        <span class="card-text text-danger fw-bolder">${price}</span>
                        <p className='card-text'>{description.slice(0, 50)}..See more</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;