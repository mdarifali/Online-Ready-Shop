import React from 'react';
import blog1 from '../../images/blog_1.jpg';
import blog2 from '../../images/blog_2.jpg';
import blog3 from '../../images/blog_3.jpg';
import './home.css';

const Blogs = () => {

    return (
        <div className='container mt-5'>
            <h1 className='text-center my-5'>Latest Blogs</h1>
            <div className="row g-5">
                <div className="col-lg-4">
                    <div class="card bg-dark text-white border-0">
                        <img src={blog1} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                            </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div class="card bg-dark text-white border-0">
                        <img src={blog2} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                            </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div class="card bg-dark text-white border-0 ">
                        <img src={blog3} class="card-img" alt="..." />
                            <div class="card-img-overlay img-hover img-title-hover">
                                <h4 className='img-title'>Here are the trends I see coming this fall</h4>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;