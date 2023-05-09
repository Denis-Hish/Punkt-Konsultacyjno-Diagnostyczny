import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/style.css';
import './js/main.js';

// Vendor CSS Files
import './vendor/fontawesome-free/css/all.min.css';
import './vendor/animate.css/animate.min.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/bootstrap-icons/bootstrap-icons.css';
import './vendor/boxicons/css/boxicons.min.css';
import './vendor/glightbox/css/glightbox.min.css';
import './vendor/remixicon/remixicon.css';
import './vendor/swiper/swiper-bundle.min.css';

// Vendor JS Files
import './vendor/purecounter/purecounter_vanilla.js';
import './vendor/bootstrap/js/bootstrap.bundle.min.js';
import './vendor/glightbox/js/glightbox.min.js';
import './vendor/swiper/swiper-bundle.min.js';
import './vendor/php-email-form/validate.js';

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
