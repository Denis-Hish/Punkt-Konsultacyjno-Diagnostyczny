import React from 'react';
import logoSnr from './../img/logo-snr.png';
import logoNzoz from './../img/logo-nzoz.png';

const Footer = () => {
   return (
      <footer id="footer">
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-4">
                  <p>Punkt Konsultacyjno-Diagnostyczny działa w ramach Poradni NZOZ "Nadzieja Rodzinie"</p>
                  <img src={logoNzoz} alt="Logo" />
                  <p>prowadzonej przez Stowarzyszenie "Nadzieja Rodzinie"</p>
                  <img src={logoSnr} alt="Logo" />
               </div>

               <div className="col-12 col-lg-8">
                  <div className="row">
                     <div className="col-12 col-lg-6">
                        <i className="bi bi-clock"></i>
                        <p>Zapraszamy w godzinach:</p>
                        <div className="row">
                           <div className="col">
                              <p>wtorek</p>
                           </div>
                           <div className="col">
                              <p>od 16:00 do 19:00</p>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col">
                              <p>czwartek</p>
                           </div>
                           <div className="col">
                              <p>od 09:00 do 11:00</p>
                           </div>
                        </div>
                     </div>

                     <div className="col-12 col-lg-6">
                        <a href="tel:+48503147303">
                           <i className="bi bi-telephone"></i>
                           <p>tel. 503-147-303</p>
                        </a>
                     </div>
                  </div>

                  <div className="row">
                     <div className="col-12 col-lg-6">
                        <a href="mailto:rejestracja@snr.org.pl">
                           <i className="bi bi-envelope-at"></i>
                           <p>e-mail: rejestracja@snr.org.pl</p>
                        </a>
                     </div>

                     <div className="col-12 col-lg-6">
                        <a href="https://goo.gl/maps/aWWFrQvb7QWLpdQd8" target="_blank" rel="noopener noreferrer">
                           <i className="bi bi-geo-alt"></i>
                           <p>Karczówkowska 36 25-711 Kielce Polska</p>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
