import React from 'react';
import './../css/style.css';
import logo from '../img/logo.png';

const TopBar = () => {
   return (
      <div id="topbar" className="d-flex align-items-center fixed-top">
         <div className="container">
            <div className="contact-info d-flex align-items-center justify-content-between">
               <a href="index.html" className="logo-pkd logo me-auto">
                  <img src={logo} alt="Logo" className="img-fluid" />
               </a>
               <h1 className="logo me-auto">
                  <a href="index.html">Punkt Konsultacyjno-Diagnostyczny</a>
               </h1>
               <a href="tel:+48503147303">
                  <i className="bi bi-telephone"></i> 503 147 303
               </a>
            </div>
         </div>
      </div>
   );
};

export default TopBar;
