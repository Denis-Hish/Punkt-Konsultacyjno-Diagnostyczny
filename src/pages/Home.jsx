import React from 'react';

import Hero from './../components/Hero';
import WhyUs from '../components/WhyUs';
import About from '../components/About';
import Invite from '../components/Invite';

const Home = () => {
   return (
      <>
         <Hero />
         <WhyUs />
         <About />
         <Invite />
      </>
   );
};

export default Home;
