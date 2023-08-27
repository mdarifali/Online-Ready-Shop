import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container-fluid'>
            <div className='bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center'>
                <div className='text-center'>
                    <h3>Page Not Found</h3>
                    <hr />
                    <h1 className='text-danger fw-bold bg-light'>404</h1>
                    <hr />
                    <Link to='/' className='nav-link mt-4'>
                        <button className='btn btn-light btn-lg rounded-0'>Go Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;