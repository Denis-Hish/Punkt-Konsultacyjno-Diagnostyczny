import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import App from './App';
import Footer from './components/Footer';
import BtnUp from './components/BtnUp';
import Preloader from './components/Preloader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Header />

         {/* <App /> */}

         {/* <Footer /> */}
         <BtnUp />
         <Preloader />
      </BrowserRouter>
   </React.StrictMode>
);
