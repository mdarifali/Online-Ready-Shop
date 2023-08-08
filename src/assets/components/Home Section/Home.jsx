import React from 'react';
import Banner from './Banner';
import CatagoryBanner from './CatagoryBanner';
import NewArrivals from './NewArrivals';
import DealWeek from './DealWeek';
import BestSellers from './BestSellers';
import Services from './Services';
import Blogs from './Blogs';


const Home = () => {
    return (
        <div>
            <Banner />
            <CatagoryBanner />
            <NewArrivals />
            <DealWeek />
            <BestSellers />
            <Services />
            <Blogs />
        </div>
    );
};

export default Home;