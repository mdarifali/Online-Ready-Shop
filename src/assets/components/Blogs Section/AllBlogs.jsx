import React from 'react';
import Blogs from '../Home Section/Blogs';
import Carousel, { slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../../images/blog_1.jpg'
import imageTwo from '../../images/blog_2.jpg'
import imageThree from '../../images/blog_3.jpg'


const AllBlogs = () => {
    return (
        <div className='container mt-5'>
            <div className='text-center'>
                <h1 className='mb-5 fw-bold d-inline-flex border-bottom border-info border-3 text-uppercase'>Latest News</h1>
            </div>
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
                    <div class="card bg-dark text-white">
                        <img src={imageOne} class="opacity-50" alt="..." />
                        <div class="card-img-overlay mt-5">
                            <h5 class="card-title">Latest One</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div class="card bg-dark text-white">
                        <img src={imageTwo} class="opacity-50" alt="..." />
                        <div class="card-img-overlay mt-5">
                            <h5 class="card-title">Latest One</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div class="card bg-dark text-white">
                        <img src={imageThree} class="opacity-50" alt="..." />
                        <div class="card-img-overlay mt-5">
                            <h5 class="card-title">Latest One</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </Carousel>
            </div>
            <Blogs />
        </div >
    );
};

export default AllBlogs;