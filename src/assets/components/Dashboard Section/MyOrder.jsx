import React from 'react';

const MyOrder = () => {



    return (
        <div className='my-5 '>
            <h3 className='mb-5 text-center'>My Orders</h3>
            <hr />
            <div className='table-responsive'>
                <table class="table table-striped mt-5"> 
                    <thead className='bg-info'>
                        <tr>
                            <th scope="col">Sl</th>
                            <th scope="col">Order info</th>
                            <th scope="col">Date</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Payment Status</th>
                            <th scope="col">Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Order#1</td>
                            <td>Mar 2, 2023 9:17 pm</td>
                            <td>500$</td>
                            <td className='text-danger'>Pending</td>
                            <td>
                                <span className='badge bg-warning text-dark'>Pending</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Order#2</td>
                            <td>Mar 2, 2023 9:17 pm</td>
                            <td>500$</td>
                            <td className='text-success'>Success</td>
                            <td>
                                <span className='badge bg-danger'>Delivered</span>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Order#3</td>
                            <td>Mar 2, 2023 9:17 pm</td>
                            <td>500$</td>
                            <td className='text-success'>Success</td>
                            <td>
                                <span className='badge bg-danger'>Delivered</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;