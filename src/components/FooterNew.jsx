import React from 'react';
import logoSnr from './../img/logo-snr.png';
import logoNzoz from './../img/logo-nzoz.png';

const FooterNew = () => {
   return (
      <footer>
         <div className="container">
            <div className="row footer-container align-items-center">
               <div className="logo-box col border-line">
                  <div className="row mb-3 flex-container">
                     <div className="logo-img col">
                        <a href="https://nzoz.nadziejarodzinie.org.pl/" target="_blank" rel="noopener noreferrer">
                           <img src={logoNzoz} alt="Logo" />
                        </a>
                     </div>
                     <p className="text-center col align-self-center">
                        Punkt Konsultacyjno-Diagnostyczny <br /> działa w ramach Poradni NZOZ "Nadzieja Rodzinie"
                     </p>
                  </div>

                  <div className="row flex-container">
                     <div className="logo-img col">
                        <a href="https://nadziejarodzinie.org.pl/" target="_blank" rel="noopener noreferrer">
                           <img src={logoSnr} alt="Logo" />
                        </a>
                     </div>
                     <p className="text-center col align-self-center">
                        prowadzonej przez Stowarzyszenie "Nadzieja Rodzinie"
                     </p>
                  </div>
               </div>

               <div className="contacts-box col">
                  <div className="card-contact">
                     <i className="bi bi-clock"></i>
                     <div className="me-3">
                        <p className="text-center">wtorek</p>
                        <p className="text-center">od 16:00 do 19:00</p>
                     </div>
                     <div>
                        <p className="text-center">czwartek</p>
                        <p className="text-center">od 09:00 do 11:00</p>
                     </div>
                  </div>

                  <a className="card-contact" href="tel:+48503147303">
                     <i className="bi bi-telephone"></i>
                     <p className="align-self-center">503-147-303</p>
                  </a>

                  <a className="card-contact" href="mailto:rejestracja@snr.org.pl">
                     <i className="bi bi-envelope-at"></i>
                     <p className="align-self-center">rejestracja@snr.org.pl</p>
                  </a>

                  <a
                     className="card-contact"
                     href="https://goo.gl/maps/aWWFrQvb7QWLpdQd8"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <i className="bi bi-geo-alt"></i>
                     <p className="align-self-center">Karczówkowska 36 25-711 Kielce</p>
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default FooterNew;
