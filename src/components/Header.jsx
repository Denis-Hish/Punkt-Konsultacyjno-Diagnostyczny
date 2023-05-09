import React, { useEffect } from 'react';
import './../css/style.css';
import logo from '../img/logo.png';

const Header = () => {
   useEffect(() => {
      let selectHeader = document.querySelector('#header');
      let selectTopbar = document.querySelector('#topbar');
      if (selectHeader) {
         const headerScrolled = () => {
            if (window.scrollY > 100) {
               selectHeader.classList.add('header-scrolled');
               if (selectTopbar) {
                  selectTopbar.classList.add('topbar-scrolled');
               }
            } else {
               selectHeader.classList.remove('header-scrolled');
               if (selectTopbar) {
                  selectTopbar.classList.remove('topbar-scrolled');
               }
            }
         };
         window.addEventListener('load', headerScrolled);
         document.addEventListener('scroll', headerScrolled);
      }
   }, []);

   const index = 'index.html';

   return (
      <>
         <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container">
               <div className="contact-info d-flex align-items-center justify-content-between">
                  <a href={index} className="logo-pkd logo me-auto">
                     <img src={logo} alt="Logo" className="img-fluid" />
                  </a>
                  <h1 className="logo me-auto">
                     <a href={index}>Punkt Konsultacyjno-Diagnostyczny</a>
                  </h1>
                  <a href="tel:+48503147303">
                     <i className="bi bi-telephone"></i> 503 147 303
                  </a>
               </div>
            </div>
         </div>

         <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
               <nav id="navbar" className="navbar order-last order-lg-0">
                  <ul>
                     <li>
                        <a className="nav-link scrollto active" href="#">
                           STRONA GŁÓWNA
                        </a>
                     </li>
                     <li>
                        <a className="nav-link scrollto" href="#">
                           AKTUALNOŚCI
                        </a>
                     </li>
                     <li>
                        <a className="nav-link scrollto" href="#">
                           HIV I AIDS
                        </a>
                     </li>
                     <li>
                        <a className="nav-link scrollto" href="#">
                           SPOSOBY ZAKAŻENIA
                        </a>
                     </li>
                     <li>
                        <a className="nav-link scrollto" href="#">
                           TEST NA OBECNOŚĆ HIV
                        </a>
                     </li>
                     <li>
                        <a className="nav-link scrollto" href="#">
                           LECZENIE HIV/AIDS
                        </a>
                     </li>
                     <li>
                        <a className="nav-link scrollto" href="#">
                           INNE ZAKAŻENIA I CHOROBY
                        </a>
                     </li>
                     <li>
                        <a className="nav-link scrollto" href="#">
                           MATERIAŁY EDUKACYJNE
                        </a>
                     </li>
                  </ul>
                  <i className="bi bi-list mobile-nav-toggle"></i>
               </nav>
            </div>
         </header>
      </>
   );
};

export default Header;
