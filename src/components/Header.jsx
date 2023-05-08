import React, { useState } from 'react';
import './../css/style.css';

const Header = () => {
   return (
      <header id="header" className="fixed-top">
         <div className="container d-flex align-items-center">
            <nav id="navbar" className="navbar order-last order-lg-0">
               <ul>
                  <li>
                     <a className="nav-link scrollto active" href="#hero">
                        STRONA GŁÓWNA
                     </a>
                  </li>
                  <li>
                     <a className="nav-link scrollto" href="#about">
                        AKTUALNOŚCI
                     </a>
                  </li>
                  <li>
                     <a className="nav-link scrollto" href="#services">
                        HIV I AIDS
                     </a>
                  </li>
                  <li>
                     <a className="nav-link scrollto" href="#departments">
                        SPOSOBY ZAKAŻENIA
                     </a>
                  </li>
                  <li>
                     <a className="nav-link scrollto" href="#doctors">
                        TEST NA OBECNOŚĆ HIV
                     </a>
                  </li>
                  <li>
                     <a className="nav-link scrollto" href="#contact">
                        LECZENIE HIV/AIDS
                     </a>
                  </li>
                  <li>
                     <a className="nav-link scrollto" href="#contact">
                        INNE ZAKAŻENIA I CHOROBY
                     </a>
                  </li>
                  <li>
                     <a className="nav-link scrollto" href="#contact">
                        MATERIAŁY EDUKACYJNE
                     </a>
                  </li>
               </ul>
               <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
         </div>
      </header>
   );
};

export default Header;
