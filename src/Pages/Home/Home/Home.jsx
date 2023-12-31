import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Hobbies from '../Hobbies/Hobbies';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Hobbies></Hobbies>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;