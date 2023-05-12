import React from 'react';

const About = () => {
   return (
      <section id="about" className="about">
         <div className="container-fluid">
            <div className="row">
               <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                  <a href="#" className="glightbox play-btn mb-4"></a>
               </div>

               <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                  <h3>
                     Działalność naszego Punktu jest finansowana ze środków{' '}
                     <a href="https://aids.gov.pl/" target="_blank" rel="noopener noreferrer">
                        Krajowego Centrum ds. AIDS
                     </a>
                     , obecnie w ramach realizacji projektu na lata 2022-2024
                  </h3>
                  <p></p>

                  <div className="icon-box">
                     <div className="icon">
                        <i className="bi bi-alarm"></i>
                     </div>
                     <h4 className="title">Godziny otwarcia:</h4>
                     <p className="description no-mb">wtorek: 16:00 - 19.00</p>
                     <p className="description">czwartek: 09.00 - 11.00</p>
                  </div>

                  <div className="icon-box">
                     <div className="icon">
                        <i className="bi bi-person"></i>
                     </div>
                     <h4 className="title">Uwaga!</h4>
                     <p className="description">
                        W celu zapewnienia wysokiej jakości poradnictwa, ostatni pacjent przyjmowany jest pół godziny
                        przed zamknięciem Punktu.
                     </p>
                  </div>

                  <div className="icon-box">
                     <div className="icon">
                        <i className="bi bi-phone"></i>
                     </div>
                     <h4 className="title">Zapraszamy do kontaktu telefonicznego</h4>
                     <p className="description">z doradcami HIV/AIDS</p>
                     <a className="btn-tel description" href="tel:+48503147303">
                        <i className="bi bi-telephone"></i>503 147 303
                     </a>
                  </div>

                  <div className="icon-box">
                     <div className="icon">
                        <i className="bi bi-file-text"></i>
                     </div>
                     <h4 className="title">Uwaga!</h4>
                     <p className="description">
                        Rejestracja NZOZ nie udziela informacji na temat testowania w kierunku zakażenia wirusem HIV,
                        HCV i kiły. Informacja o tym co warto wiedzieć, zanim podejmiesz decyzję o zrobieniu testu na
                        HIV jest poniżej.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
