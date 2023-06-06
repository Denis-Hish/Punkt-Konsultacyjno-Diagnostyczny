import React, { useEffect } from 'react';

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
      <button
         className="back-to-top d-flex align-items-center justify-content-center"
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
         <i className="bi bi-arrow-up-short"></i>
      </button>
   );
};

export default BtnUp;
