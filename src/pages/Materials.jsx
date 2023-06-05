import React from 'react';

const Materials = () => {
   return (
      <section className="materials">
         <div className="container">
            <div className="section-title mt-10">
               <h2 data-aos="fade-down">MATERIAŁY EDUKACYJNE i WAŻNE STRONY</h2>
            </div>

            <div className="links-blocks">
               <div className="links-block">
                  <p className="text-center fst-italic">Zapraszamy na strony:</p>

                  <div className="materials-buttons">
                     <div className="materials-btn" data-aos="fade-down" data-aos-delay="200">
                        <a href="https://www.netplus.pl/" target="_blank" rel="noopener noreferrer">
                           <div>
                              <span>
                                 <p>www.netplus.pl</p>
                              </span>
                           </div>
                           <div>
                              <span>
                                 <p>Przejdź</p>
                              </span>
                           </div>
                        </a>
                     </div>

                     <div className="materials-btn" data-aos="fade-down" data-aos-delay="300">
                        <a href="https://aids.gov.pl/" target="_blank" rel="noopener noreferrer">
                           <div>
                              <span>
                                 <p>www.aids.gov.pl</p>
                              </span>
                           </div>
                           <div>
                              <span>
                                 <p>Przejdź</p>
                              </span>
                           </div>
                        </a>
                     </div>

                     <div className="materials-btn" data-aos="fade-down" data-aos-delay="400">
                        <a href="https://polistrefa.pl/" target="_blank" rel="noopener noreferrer">
                           <div>
                              <span>
                                 <p>www.polistrefa.pl</p>
                              </span>
                           </div>
                           <div>
                              <span>
                                 <p>Przejdź</p>
                              </span>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>

               <div className="links-block">
                  <p className="text-center fst-italic">
                     Zachęcamy do zapoznania się z informacjami, publikacjami, broszurami do pobrania ze strony{' '}
                     <a href="https://www.aids.gov.pl" target="_blank" rel="noopener noreferrer">
                        www.aids.gov.pl
                     </a>
                  </p>

                  <div className="materials-buttons">
                     <div className="materials-btn" data-aos="fade-down" data-aos-delay="500">
                        <a
                           href="https://aids.gov.pl/_publikacje/wersja_papierowa_i_elektroniczna/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <div>
                              <span>
                                 <p>Wersja papierowa i elektroniczna</p>
                              </span>
                           </div>
                           <div>
                              <span>
                                 <p>Przejdź</p>
                              </span>
                           </div>
                        </a>
                     </div>

                     <div className="materials-btn" data-aos="fade-down" data-aos-delay="600">
                        <a
                           href="https://aids.gov.pl/_publikacje/wersja_elektroniczna/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <div>
                              <span>
                                 <p>Wersja elektroniczna</p>
                              </span>
                           </div>
                           <div>
                              <span>
                                 <p>Przejdź</p>
                              </span>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Materials;
