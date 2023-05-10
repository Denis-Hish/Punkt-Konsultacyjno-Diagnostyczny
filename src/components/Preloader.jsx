import React, { useEffect } from 'react';

const Preloader = () => {
   useEffect(() => {
      let preloader = document.querySelector('#preloader');

      if (preloader) {
         window.addEventListener('load', () => {
            preloader.remove();
         });
      }
   }, []);

   return <div id="preloader"></div>;
};

export default Preloader;
