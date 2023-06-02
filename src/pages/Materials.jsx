import React from 'react';

const Materials = () => {
   return (
      <section className="materials">
         <div className="container">
            <div className="section-title mt-10">
               <h2 data-aos="fade-down">MATERIAŁY EDUKACYJNE i WAŻNE STRONY</h2>
            </div>

            <p>Zapraszamy na strony:</p>

            {/* ------------------------------------------------------ */}

            <div className="materials-btn">
               <a href="https://www.netplus.pl/" target="_blank" rel="noopener noreferrer">
                  <div className="materials-card">
                     <div className="icon me-2">
                        <i className="bi bi-globe"></i>
                     </div>
                     <div className="context">
                        <p>netplus.pl</p>
                        <p>Iść</p>
                     </div>
                  </div>
               </a>
            </div>

            {/* ------------------------------------------------------ */}

            <ul>
               <li>
                  <a href="www.netplus.pl" target="_blank" rel="noopener noreferrer">
                     www.netplus.pl
                  </a>
               </li>
               <li>
                  <a href="www.aids.gov.pl" target="_blank" rel="noopener noreferrer">
                     www.aids.gov.pl
                  </a>
               </li>
               <li>
                  <a href="www.polistrefa.pl" target="_blank" rel="noopener noreferrer">
                     www.polistrefa.pl
                  </a>
               </li>
            </ul>

            <p>
               Zachęcamy do zapoznania się z informacjami, publikacjami, broszurami do pobrania ze strony{' '}
               <a href="www.aids.gov.pl" target="_blank" rel="noopener noreferrer">
                  www.aids.gov.pl
               </a>
            </p>

            <ul>
               <li>
                  <a
                     href="https://aids.gov.pl/_publikacje/wersja_papierowa_i_elektroniczna/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     https://aids.gov.pl/_publikacje/wersja_papierowa_i_elektroniczna/
                  </a>
               </li>
               <li>
                  <a
                     href="https://aids.gov.pl/_publikacje/wersja_elektroniczna/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     https://aids.gov.pl/_publikacje/wersja_elektroniczna/
                  </a>
               </li>
            </ul>
         </div>
      </section>
   );
};

export default Materials;
