import React from 'react';
import AboutSection from '../components/about/AboutSection';
import Footer from '../components/basic/Footer';
import ResponsiveNavBar from '../components/basic/ResponsiveNavBar';
const About = () => {
    return <div className="about">
        <ResponsiveNavBar/>
        <AboutSection/>
    </div>;
};

export default About;