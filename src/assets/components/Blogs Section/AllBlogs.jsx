import React from 'react';
import Blogs from '../Home Section/Blogs';
import Carousel, { slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import blog1 from '../../images/blog-1.jpg'
import blog2 from '../../images/blog-2.jpg'
import blog3 from '../../images/blog-3.jpg'


const AllBlogs = () => {
    return (
        <div className='container my-5'>
            <div className="row">
                <Carousel
                    className='py-5'
                    plugins={[
                        'arrows',

                        'infinite',

                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3
                            }
                        },

                        'infinite',
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 3000,
                            }
                        },
                    ]}
                    animationSpeed={2000}

                    breakpoints={{
                        640: {
                            plugins: [
                                'arrows',
                                'infinite',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 1
                                    }
                                },
                            ]
                        },
                        900: {
                            plugins: [
                                'arrows',
                                'infinite',
                                {
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 2
                                    }
                                },
                            ]
                        }
                    }}
                >
                    <div class="card">
                        <img src={blog1} alt="..." />
                    </div>
                    <div class="card">
                        <img src={blog2} alt="..." />
                    </div>
                    <div class="card">
                        <img src={blog3} alt="..." />
                    </div>
                </Carousel>
            </div>
            
            
            <div className='mt-5'>
                <div className='text-center'>
                    <h2 className='mb-5 d-inline-flex border-bottom border-info border-2clear text-uppercase'>Latest News</h2>
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div class="card ">
                            <img src={blog1} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title'>Fashion hacks</h5>
                                <p className='card-text'>Hacks or unorthodox methods to do things are a very popular topic for readers, so posting simple hacks that people can do at home to their wardrobe will drive organic traffic to your website.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card">
                            <img src={blog2} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title'>Fashion hacks</h5>
                                <p className='card-text'>Hacks or unorthodox methods to do things are a very popular topic for readers, so posting simple hacks that people can do at home to their wardrobe will drive organic traffic to your website.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card">
                            <img src={blog3} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title'>Fashion hacks</h5>
                                <p className='card-text'>Hacks or unorthodox methods to do things are a very popular topic for readers, so posting simple hacks that people can do at home to their wardrobe will drive organic traffic to your website.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                    <div className="col-lg-4">
                        <div class="card ">
                            <img src={blog1} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title'>Fashion hacks</h5>
                                <p className='card-text'>Hacks or unorthodox methods to do things are a very popular topic for readers, so posting simple hacks that people can do at home to their wardrobe will drive organic traffic to your website.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card">
                            <img src={blog2} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title'>Fashion hacks</h5>
                                <p className='card-text'>Hacks or unorthodox methods to do things are a very popular topic for readers, so posting simple hacks that people can do at home to their wardrobe will drive organic traffic to your website.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div class="card">
                            <img src={blog3} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title'>Fashion hacks</h5>
                                <p className='card-text'>Hacks or unorthodox methods to do things are a very popular topic for readers, so posting simple hacks that people can do at home to their wardrobe will drive organic traffic to your website.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div >
    );
};

export default AllBlogs;