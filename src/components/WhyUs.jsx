import React from 'react';

const WhyUs = () => {
   return (
      <section id="why-us" className="why-us">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="content">
                     <h3>Badania są:</h3>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et.
                        Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                     </p>
                     <div className="text-center">
                        <a href="#" className="more-btn">
                           Learn More <i className="bx bx-chevron-right"></i>
                        </a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-8 d-flex align-items-stretch">
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                     <div className="row">
                        <div className="col-xl-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-xl-0">
                              <i className="bi bi-person-lock"></i>
                              <h4>Anonimowe</h4>
                              <p>
                                 Nikt nie będzie Cię pytał o imię ani nazwisko – otrzymasz jedynie hasło, którym
                                 oznaczony będzie twój test. Przy odbiorze wyników badań doradca wyjaśni Twoje
                                 wątpliwości
                              </p>
                           </div>
                        </div>
                        <div className="col-xl-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-xl-0">
                              <i className="bi bi-piggy-bank"></i>
                              <h4>Bezpłatne</h4>
                              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                           </div>
                        </div>
                        <div className="col-xl-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-xl-0">
                              <i className="bi bi-file-earmark-text"></i>
                              <h4>Nie wymagają skierowania</h4>
                              <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
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
