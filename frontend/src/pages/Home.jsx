// src/pages/Home.jsx
import React from 'react';
import SEO from '../components/SEO/SEO';

import ProcessSection from '../components/Home/Process';
import Hero from '../components/Home/Hero';
import Service from '../components/Home/Service';
import Choice from '../components/Home/Choice';
import Testimonial from '../components/Home/Testimonial';

import Partner from '../components/Home/Partner';
import MarketingCTA from '../components/Home/MarketingCTA';
import IdeaCTA from '../components/Home/IdeaCTA';

import Youridea from '../components/Home/Youridea';

const Home = () => {
    return (
        <div>
            {/* SEO Implementation for Moin Consultancy Homepage */}
            <SEO
                title="Moin Consultancy | Education, Technology, Immigration & Business Solutions"
                description="Moin Consultancy provides education, technology, immigration, logistics, renewable energy, and manufacturing solutions designed to help individuals and businesses grow."
                keywords="Moin Consultancy, Education Services, Study Abroad, Career Counselling, Technology Services, Web Development, Cyber Security, Digital Marketing, Immigration Services, Logistics Services, Renewable Energy, Manufacturing"
                url="/"
                image="../../assets/Hero1.png"
                siteName="Moin Consultancy"
                type="website"
            />

            <Hero />
            <Service />
            <Choice />
            <MarketingCTA />
            <ProcessSection />

            <Partner />
            <Youridea />
            <Testimonial />

            <IdeaCTA />
            {/* <Join/> */}
            {/* <Client/> */}
        </div>
    );
};

export default Home;