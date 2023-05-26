import React from 'react';
import Banner from './banner/Banner';
import Products from './products/Products';
import GetDiscount from './getDiscountCompo/GetDiscount';
import About from './about/About';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Products></Products>
            <GetDiscount></GetDiscount>
            <About></About>
        </main>
    );
};

export default Home;