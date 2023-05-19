import React from 'react';

const WhyUs = () => {
   return (
      <section id="why-us" className="why-us">
         <div className="container">
            <div className="row">
               <section className="section-title">
                  <h2 data-aos="fade-down">Badania wykonywane w naszym punkcie są:</h2>
               </section>

               <div className="col-lg d-flex align-items-stretch">
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                     <div className="row">
                        <div data-aos="fade-down" data-aos-delay="100" className="col-lg-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-xl-0">
                              <i className="bi bi-person-lock"></i>
                              <h4>Anonimowe</h4>
                              <p>
                                 Nikt nie będzie Cię pytał o imię ani nazwisko - otrzymasz jedynie hasło, którym
                                 oznaczony będzie Twój test. Przy odbiorze wyników badań doradca wyjaśni Twoje
                                 wątpliwości
                              </p>
                           </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="200" className="col-lg-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-xl-0">
                              <i className="bi bi-piggy-bank"></i>
                              <h4>Bezpłatne</h4>
                              <p>
                                 Nie nakładamy żadnych opłat za pobranie próbek potrzebnych do badania, ani za wykonanie
                                 testów. Wszystko jest całkowicie darmowe
                              </p>
                           </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="300" className="col-lg-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-xl-0">
                              <i className="bi bi-file-earmark-text"></i>
                              <h4>Nie wymagają skierowania</h4>
                              <p>
                                 Możesz zarejestrować się przez telefon i przyjść bez potrzeby uprzedniej konsultacji z
                                 innym lekarzem czy to specjalistą, czy pierwszego kontaktu
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default WhyUs;
