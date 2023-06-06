import React from 'react';
import logoSnr from './../img/logo-snr.png';
import logoNzoz from './../img/logo-nzoz.png';

const FooterNew = () => {
   return (
      <footer>
         <div className="container">
            <a
               className="logo-img"
               href="https://nzoz.nadziejarodzinie.org.pl/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <img src={logoNzoz} alt="Logo" />
            </a>

            <p>
               Punkt Konsultacyjno-Diagnostyczny <br /> działa w ramach Poradni NZOZ "Nadzieja Rodzinie"
            </p>

            <a className="logo-img" href="https://nadziejarodzinie.org.pl/" target="_blank" rel="noopener noreferrer">
               <img src={logoSnr} alt="Logo" />
            </a>

            <p>prowadzonej przez Stowarzyszenie "Nadzieja Rodzinie"</p>

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
      </footer>
   );
};

export default FooterNew;
