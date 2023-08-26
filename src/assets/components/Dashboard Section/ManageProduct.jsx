import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const url = 'http://localhost:5000/product';
        fetch(url)
            .then(res => res.json())
            .then(data => { setProducts(data) });

    }, [products]);


    return (
        <div className='container-fluid my-5 '>
            <h3 className='mb-5 text-center'>Manage Product</h3>
            <hr />
            <div className='table-responsive'>
                <table class="table table-striped mt-5">
                    <thead className='bg-info'>
                        <tr>
                            <th scope="col">Sl</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Update</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((product, index) => {
                                return <>
                                    <tr key={product._id}>
                                        <th scope="row">{index + 1}</th>
                                        <td><img src={product.image} alt="" style={{ height: '50px', width: '50px', borderRadius: '50%' }} /></td>
                                        <td>{product.name}</td>
                                        <td>${product.price}</td>
                                        <td className='text-danger'>
                                            <button className='btn'>
                                                <span className='badge bg-primary'>Edit</span>
                                            </button>
                                        </td>
                                        <td>
                                            <button className='btn'>
                                                <span className='badge bg-danger'>Delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;