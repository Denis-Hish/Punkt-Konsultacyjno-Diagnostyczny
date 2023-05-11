import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/style.css';
import './js/main.js';
import './components/VendorStyles';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BtnUp from './components/BtnUp';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Services from './components/Services';
import Preloader from './components/Preloader';
import NavBarActive from './components/NavBarActive';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Header />

      <Hero />
      <WhyUs />
      <About />
      <Services />

      <Footer />

      <BtnUp />
      <NavBarActive />
      <Preloader />
   </React.StrictMode>
);
