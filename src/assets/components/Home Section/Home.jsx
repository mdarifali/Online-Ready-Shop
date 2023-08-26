import React from 'react';
import Banner from './Banner';
import CatagoryBanner from './CatagoryBanner';
import NewArrivals from './NewArrivals';
import DealWeek from './DealWeek';
import BestSellers from './BestSellers';
import Services from './Services';
import Blogs from './Blogs';
import Faq from './Faq';
import NewsLetter from './NewsLetter';


const Home = () => {
    return (
        <div>
            <Banner />
            <CatagoryBanner />
            <NewArrivals />
            <DealWeek />
            <BestSellers />
            <Services />
            {/* <Blogs /> */}
            <Faq />
            <NewsLetter />
        </div>
    );
};

export default Home;