import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/style.css';
import './js/main.js';
import './components/VendorStyles';
import 'animate.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BtnUp from './components/BtnUp';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Preloader from './components/Preloader';
import NavBarActive from './components/NavBarActive';
import Invite from './components/Invite';
import Home from './pages/Home';
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
