import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/style.css';
import '../src/js/main.js';
import '../src/components/VendorStyles';
import 'animate.css';

import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Footer from '../src/components/Footer';
import BtnUp from '../src/components/BtnUp';
import WhyUs from '../src/components/WhyUs';
import About from '../src/components/About';
import Preloader from '../src/components/Preloader';
import NavBarActive from '../src/components/NavBarActive';
import Invite from '../src/components/Invite';
import Home from '../src/pages/Home';
import What_Is from './pages/What_Is';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Header />
      <What_Is />

      {/* <Hero /> */}
      {/* <WhyUs /> */}
      {/* <About /> */}
      {/* <Invite /> */}

      {/* <Footer /> */}

      <BtnUp />
      <NavBarActive />
      <Preloader />
   </React.StrictMode>
);
