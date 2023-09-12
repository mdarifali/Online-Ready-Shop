import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import useHook from '../Use Hooks/useHook';

const ManageProduct = () => {

    const [products] = useHook();

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    const url = `http://localhost:5000/product/${id}`
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
    }


    return (
        <div className='container my-5 '>
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
                                            <button onClick={() => handleDelete(product._id)} className='btn'>
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