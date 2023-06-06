import React from 'react';
import logoSnr from './../img/logo-snr.png';
import logoNzoz from './../img/logo-nzoz.png';

const Footer = () => {
   return (
      <footer>
         <div className="top-footer">
            <div className="container">
               <div className="contact-cards">
                  <a className="contact-card" href="tel:+48503147303">
                     <i className="bi bi-telephone"></i>
                     <p className="text-center">503-147-303</p>
                  </a>

                  <a className="contact-card" href="mailto:rejestracja@snr.org.pl">
                     <i className="bi bi-envelope-at"></i>
                     <p className="text-center">rejestracja@snr.org.pl</p>
                  </a>

                  <a
                     className="contact-card"
                     href="https://goo.gl/maps/aWWFrQvb7QWLpdQd8"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <i className="bi bi-geo-alt"></i>
                     <p className="text-center">
                        Karczówkowska 36 <br /> 25-711 Kielce
                     </p>
                  </a>
               </div>
            </div>
         </div>

         <div className="bottom-footer">
            <div className="container">
               <div className="logo-cards">
                  <div className="logo-card">
                     <a
                        className="logo-img"
                        href="https://nzoz.nadziejarodzinie.org.pl/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <div className="img-box">
                           <img src={logoNzoz} alt="Logo" />
                        </div>
                        <p className="text-center">
                           Punkt Konsultacyjno-Diagnostyczny <br /> działa w ramach Poradni NZOZ "Nadzieja Rodzinie"
                        </p>
                     </a>
                  </div>

                  <div className="logo-card">
                     <a
                        className="logo-img"
                        href="https://nadziejarodzinie.org.pl/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <div className="img-box">
                           <img src={logoSnr} alt="Logo" />
                        </div>
                        <p className="text-center">
                           Prowadzonej przez <br /> Stowarzyszenie "Nadzieja Rodzinie"
                        </p>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
