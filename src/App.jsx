import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './css/style.css';
import './js/main.js';
import './components/VendorStyles';
import 'animate.css';

import Header from './components/Header';

import Home from './pages/Home';
import News from './pages/News';
import WhatIs from './pages/WhatIs';
import HowCan from './pages/HowCan';
import HivTest from './pages/HivTest';
import Treatments from './pages/Treatments';
import Diseases from './pages/Diseases';
import Materials from './pages/Materials';

import Notfoundpage from './pages/Notfoundpage';
import Footer from './components/Footer';
import FooterNew from './components/FooterNew';
import BtnUp from './components/BtnUp';
import Preloader from './components/Preloader';

const App = () => {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/what" element={<WhatIs />} />
            <Route path="/how" element={<HowCan />} />
            <Route path="/hiv" element={<HivTest />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/materials" element={<Materials />} />

            <Route path="*" element={<Notfoundpage />} />
         </Routes>
         {/* <Footer /> */}
         <FooterNew />
         <BtnUp />
         <Preloader />
      </BrowserRouter>
   );
};

export default App;
