import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import logo from '../img/logo.png';

const Header = () => {
   useEffect(() => {
      // Toggle .header-scrolled class to #header when page is scrolled
      const selectHeader = document.querySelector('#header');
      const selectTopbar = document.querySelector('#topbar');

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

      // Mobile nav toggle
      const handleMobileNavToggle = (e) => {
         const navBar = document.querySelector('#navbar');
         navBar.classList.toggle('navbar-mobile');
         e.target.classList.toggle('bi-list');
         e.target.classList.toggle('bi-x');
      };

      const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
      mobileNavToggle.addEventListener('click', handleMobileNavToggle);

      return () => {
         mobileNavToggle.removeEventListener('click', handleMobileNavToggle);
      };
   }, []);

   useEffect(() => {
      // Scrolls to an element with header offset
      const scrollto = (el) => {
         let header = document.querySelector('#header');
         let offset = header.offsetHeight;

         let element = document.querySelector(el);
         if (!element) return; // Проверка наличия элемента

         let elementPos = element.offsetTop;
         window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth',
         });
      };

      // Scroll with offset on links with a class name .scrollto
      // const handleLinkClick = (e) => {
      //    if (e.target.hash) {
      //       e.preventDefault();

      //       let navbar = document.querySelector('#navbar');
      //       if (navbar.classList.contains('navbar-mobile')) {
      //          navbar.classList.remove('navbar-mobile');
      //          let navbarToggle = document.querySelector('.mobile-nav-toggle');
      //          navbarToggle.classList.toggle('bi-list');
      //          navbarToggle.classList.toggle('bi-x');
      //       }
      //       scrollto(e.target.hash);
      //    }
      // };

      // Scroll with offset on page load with hash links in the url
      const handleLoad = () => {
         if (window.location.hash) {
            let element = document.querySelector(window.location.hash);
            if (element) {
               scrollto(window.location.hash);
            }
         }
      };

      // document.addEventListener('click', handleLinkClick, true);
      window.addEventListener('load', handleLoad);

      return () => {
         // document.removeEventListener('click', handleLinkClick, true);
         window.removeEventListener('load', handleLoad);
      };
   }, []);

   const location = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location.pathname]);

   // Close mobile menu on click
   const handleMobileNavItemClick = () => {
      const navBar = document.querySelector('#navbar');
      navBar.classList.remove('navbar-mobile');
      const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
      mobileNavToggle.classList.remove('bi-x');
      mobileNavToggle.classList.add('bi-list');
   };

   const index = 'index.html';

   return (
      <>
         <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container">
               <div className="contact-info d-flex align-items-center justify-content-between">
                  <a href={index} className="logo-pkd logo me-auto">
                     <img src={logo} alt="Logo" className="img-fluid" />
                  </a>
                  <h1 className="title logo me-auto">
                     <a href={index}>Punkt Konsultacyjno-Diagnostyczny</a>
                  </h1>
                  <a className="btn-tel" href="tel:+48503147303">
                     <i className="bi bi-telephone"></i>503 147 303
                  </a>
               </div>
            </div>
         </div>

         <header id="header" className="fixed-top">
            <div className="container d-flex align-items-center">
               <nav id="navbar" className="navbar order-last order-lg-0">
                  <ul>
                     <li>
                        <NavLink className="nav-link scrollto" to="/" onClick={handleMobileNavItemClick}>
                           STRONA GŁÓWNA
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="nav-link scrollto" to="/news" onClick={handleMobileNavItemClick}>
                           AKTUALNOŚCI
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="nav-link scrollto" to="/what" onClick={handleMobileNavItemClick}>
                           HIV I AIDS
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="nav-link scrollto" to="/how" onClick={handleMobileNavItemClick}>
                           SPOSOBY ZAKAŻENIA
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="nav-link scrollto" to="/hiv" onClick={handleMobileNavItemClick}>
                           TEST NA OBECNOŚĆ HIV
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="nav-link scrollto" to="/treatments" onClick={handleMobileNavItemClick}>
                           LECZENIE HIV/AIDS
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="nav-link scrollto" to="/diseases" onClick={handleMobileNavItemClick}>
                           INNE ZAKAŻENIA I CHOROBY
                        </NavLink>
                     </li>
                     <li>
                        <NavLink className="nav-link scrollto" to="/materials" onClick={handleMobileNavItemClick}>
                           MATERIAŁY EDUKACYJNE
                        </NavLink>
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
