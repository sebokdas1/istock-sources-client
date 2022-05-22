import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import GenShow from './GenShow';
import Parts from './Parts';

const Home = () => {
    return (
        <div className='lg:px-12'>
            <Banner />
            <Parts />
            <GenShow />
            <Footer></Footer>
        </div>
    );
};

export default Home;