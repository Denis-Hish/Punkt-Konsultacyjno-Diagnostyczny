import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/style.css';
import './js/main.js';
import './components/VendorStyles';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import BtnUp from './components/BtnUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Header />
      <Home />
      <Footer />
      <BtnUp />
   </React.StrictMode>
);
