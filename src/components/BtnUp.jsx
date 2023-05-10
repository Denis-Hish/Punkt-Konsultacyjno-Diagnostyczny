import React, { useEffect } from 'react';
import './../css/style.css';

const BtnUp = () => {
   useEffect(() => {
      // Back to top button
      let backtotop = document.querySelector('.back-to-top');
      if (backtotop) {
         const toggleBacktotop = () => {
            if (window.scrollY > 100) {
               backtotop.classList.add('active');
            } else {
               backtotop.classList.remove('active');
            }
         };
         window.addEventListener('load', toggleBacktotop);
         document.addEventListener('scroll', toggleBacktotop);
      }
   }, []);

   return (
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
         <i className="bi bi-arrow-up-short"></i>
      </a>
   );
};

export default BtnUp;
