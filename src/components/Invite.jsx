import React from 'react';

const Invite = () => {
   return (
      <section id="invite" className="invite section-bg">
         <div className="container">
            <div className="section-title">
               <h2 data-aos="fade-down">SERDECZNIE ZAPRASZAMY!</h2>
               <p>
                  Po szczegółowe informacje zapraszamy na stronę{' '}
                  <a href="https://aids.gov.pl/" target="_blank" rel="noopener noreferrer">
                     Krajowego Centrum ds. AIDS
                  </a>
               </p>
               <h5>Szukasz odpowiedzi na trudne pytania, potrzebujesz informacji?</h5>
            </div>

            <div className="row">
               <div className="col-lg-4 mt-4">
                  <a href="https://aids.gov.pl/poradnia_internetowa/" target="_blank" rel="noopener noreferrer">
                     <div data-aos="flip-left" className="card-invite d-flex align-items-center">
                        <div className="icon">
                           <i className="bi bi-globe"></i>
                        </div>
                        <div className="card-invite-info">
                           <span>
                              <h4>Napisz na stronie internetowej</h4>
                           </span>
                           <div className="card-hover">
                              <p>aids.gov.pl/poradnia_internetowa</p>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>

               <div className="col-lg-4 mt-4">
                  <a href="mailto:poradnia@aids.gov.pl">
                     <div data-aos="flip-left" className="card-invite d-flex align-items-center">
                        <div className="icon">
                           <i className="bi bi-envelope-at"></i>
                        </div>
                        <div className="card-invite-info">
                           <span>
                              <h4>Lub wyślij e-mailem</h4>
                           </span>
                           <div className="card-hover">
                              <p>poradnia@aids.gov.pl</p>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>

               <div className="col-lg-4 mt-4">
                  <a href="tel:+4800888448">
                     <div data-aos="flip-left" className="card-invite d-flex align-items-center">
                        <div className="icon">
                           <i className="bi bi-phone-vibrate"></i>
                        </div>
                        <div className="card-invite-info">
                           <span>
                              <h4>Lub zadzwoń</h4>
                           </span>
                           <div className="card-hover">
                              <p>800 888 448</p>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>

               <div className="telephone-time mt-5">
                  <i className="bi bi-info-circle"></i>
                  <p className="mb-0 fst-italic">
                     Ogólnopolski telefon zaufania HIV/AIDS czynny w dni robocze w godzinach 9:00 – 21:00 (połączenie
                     bezpłatne)
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Invite;
