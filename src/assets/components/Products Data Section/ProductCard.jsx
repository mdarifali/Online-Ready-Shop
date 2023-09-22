import React from 'react';
import './products.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleAddToCart } from "../../redux/features/cart/cartSlice";

const ProductCard = ({ product }) => {
    const { image, name, price, description } = product;
    const dispatch = useDispatch();

    return (
        <div className="col-md-4 col-lg-3 col-6 col-ex-sm">
            <div class="card-main shadow">
                <img src={image} class="w-100" alt="product Image" />
                <div className='card-details'>
                    <Link to={`/single-porduct/${product._id}`} class="nav-link">
                        <div className='text-light'>
                            <h6>{name}</h6>
                            <small>{description.slice(0, 90)}...</small>
                        </div>
                    </Link>
                    <button onClick={() => dispatch(handleAddToCart(product))}
                        className='btn btn-danger btn-sm w-100 mt-5'>Add to Cart</button>
                    </div>
                    <div class="text-center">
                        <p class="card-title">{name}</p>
                        <span class="card-text fw-bolder">${price}</span>
                    </div>
            </div>
        </div>
    );
};

export default ProductCard;