import React, { useEffect } from 'react';

const NavBarActive = () => {
   useEffect(() => {
      const navbarlinksActive = () => {
         let position = window.scrollY + 200;
         const navbarlinks = Array.from(document.querySelectorAll('#navbar .scrollto'));
         navbarlinks.forEach((navbarlink) => {
            if (!navbarlink.hash) return;
            let section = document.querySelector(navbarlink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
               navbarlink.classList.add('active');
            } else {
               navbarlink.classList.remove('active');
            }
         });
      };

      const handleLoad = () => {
         navbarlinksActive();
      };

      const handleScroll = () => {
         navbarlinksActive();
      };

      window.addEventListener('load', handleLoad);
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('load', handleLoad);
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);
};

export default NavBarActive;
