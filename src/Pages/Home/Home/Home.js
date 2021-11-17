import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Faq></Faq>
        </div>
    );
};

export default Home;