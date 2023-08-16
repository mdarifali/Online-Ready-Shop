import React from 'react';
import Carousel, { slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../../images/product_1.png';
import imageTwo from '../../images/product_2.png'
import imageThree from '../../images/product_3.png'

const BestSellers = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <h1 className='text-center mb-4'>Best Sellers</h1>
        <Carousel
          className='py-5'
          plugins={[

            'infinite',

            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 5
              }
            },

            'infinite',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 2000,
              }
            },
          ]}
          animationSpeed={1000}

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
          <img src={imageOne} />
          <img src={imageTwo} />
          <img src={imageThree} />
        </Carousel>
      </div>
    </div >
  );
};

export default BestSellers;