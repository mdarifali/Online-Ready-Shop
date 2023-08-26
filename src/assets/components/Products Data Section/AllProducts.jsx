import React, { useEffect } from 'react';
import './products.css';
import product1 from '../../images/product_1.png';
import product2 from '../../images/product_2.png';
import product3 from '../../images/product_3.png';
import product4 from '../../images/product_4.png';
import product5 from '../../images/product_5.png';
import product6 from '../../images/product_6.png';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useState } from 'react';

const AllProducts = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const url = 'http://localhost:5000/product';
        fetch(url)
            .then(res => res.json())
            .then(data => {setProducts(data)});

    }, [products]);

    return (
        <div className='row g-5'>
            {
                products.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })
            }
        </div>
    );
};

export default AllProducts;