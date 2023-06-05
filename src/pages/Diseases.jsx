import React from 'react';

import Leaflets1 from './../doc/7/1-HBV-i-HCV.pdf';
import Leaflets2 from './../doc/7/2-Kila.pdf';
import Leaflets3 from './../doc/7/3-Rzesistkowica.pdf';
import Leaflets4 from './../doc/7/4-swierzb-i-wszawica.pdf';
import Leaflets5 from './../doc/7/5-chamydia-i-mycoplasma.pdf';
import Leaflets6 from './../doc/7/6-HIV.pdf';
import Leaflets7 from './../doc/7/7-Rzezaczka.pdf';
import Leaflets8 from './../doc/7/8-Ziarniniak.pdf';
import Leaflets9 from './../doc/7/9-Zakazenia-przewodu-pokarmowego.pdf';

const Diseases = () => {
   return (
      <section className="leaflets services">
         <div className="container">
            <div className="section-title mt-10">
               <h2 data-aos="fade-down">INNE ZAKAŻENIA I CHOROBY PRZENOSZONE DROGĄ PŁCIOWĄ</h2>
               <p>
                  W związku z potrzebą podnoszenia poziomu świadomości i wiedzy społeczeństwa, Krajowe Centrum ds. AIDS,
                  we współpracy z dr Bartoszem Szetelą i dr Łukaszem Łapińskim, opracowało teksty ulotek, które dotyczą
                  najważniejszych zakażeń przenoszonych drogą płciową (STIs). Każdą z nich konsultowała merytorycznie
                  prof. dr hab. n. med. Joanna Narbutt, konsultant krajowy w dziedzinie dermatologii i wenerologii.
               </p>
            </div>

            <h4 className="subtitle text-center mb-5">
               Opracowano 9 ulotek w ramach serii POWIEDZ STOP WIRUSOM, które dotyczą:
            </h4>

            <div className="row leaflets-cards">
               <div
                  className="leaflets-card col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-anchor-placement="top-bottom"
               >
                  <a href={Leaflets1} target="_blank" rel="noopener noreferrer">
                     <div className="icon-box">
                        <div className="icon">
                           <i className="bi bi-file-earmark-text"></i>
                        </div>
                        <h5>HCV i HBV</h5>
                        <p></p>
                     </div>
                  </a>
               </div>

               <div
                  className="leaflets-card col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-anchor-placement="top-bottom"
               >
                  <a href={Leaflets2} target="_blank" rel="noopener noreferrer">
                     <div className="icon-box">
                        <div className="icon">
                           <i className="bi bi-file-earmark-text"></i>
                        </div>
                        <h5>Kiły</h5>
                        <p></p>
                     </div>
                  </a>
               </div>

               <div
                  className="leaflets-card col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-anchor-placement="top-bottom"
               >
                  <a href={Leaflets3} target="_blank" rel="noopener noreferrer">
                     <div className="icon-box">
                        <div className="icon">
                           <i className="bi bi-file-earmark-text"></i>
                        </div>
                        <h5>Rzęsistkowicy</h5>
                        <p></p>
                     </div>
                  </a>
               </div>

               <div
                  className="leaflets-card col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-anchor-placement="top-bottom"
               >
                  <a href={Leaflets4} target="_blank" rel="noopener noreferrer">
                     <div className="icon-box">
                        <div className="icon">
                           <i className="bi bi-file-earmark-text"></i>
                        </div>
                        <h5>Świerzbu i wszawicy</h5>
                        <p></p>
                     </div>
                  </a>
               </div>

               <div
                  className="leaflets-card col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-anchor-placement="top-bottom"
               >
                  <a href={Leaflets5} target="_blank" rel="noopener noreferrer">
                     <div className="icon-box">
                        <div className="icon">
                           <i className="bi bi-file-earmark-text"></i>
                        </div>
                        <h5>Chlamydia trachomatis i Mycoplasma genitalium</h5>
                        <p></p>
                     </div>
                  </a>
               </div>

               <div
                  className="leaflets-card col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-anchor-placement="top-bottom"
               >
                  <a href={Leaflets6} target="_blank" rel="noopener noreferrer">
                     <div className="icon-box">
                        <div className="icon">
                           <i className="bi bi-file-earmark-text"></i>
                        </div>
                        <h5>HIV</h5>
                        <p></p>
                     </div>
                  </a>
               </div>

               <div
                  className="leaflets-card col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-anchor-placement="top-bottom"
               >
                  <a href={Leaflets7} target="_blank" rel="noopener noreferrer">
                     <div className="icon-box">
                        <div className="icon">
                           <i className="bi bi-file-earmark-text"></i>
                        </div>
                        <h5>Rzeżączki</h5>
                        <p></p>
                     </div>
                  </a>
               </div>

               <div
                  className="leaflets-card col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-anchor-placement="top-bottom"
               >
                  <a href={Leaflets8} target="_blank" rel="noopener noreferrer">
                     <div className="icon-box">
                        <div className="icon">
                           <i className="bi bi-file-earmark-text"></i>
                        </div>
                        <h5>Ziarniniaka wenerycznego pachwin</h5>
                        <p></p>
                     </div>
                  </a>
               </div>

               <div
                  className="leaflets-card col-lg-4 col-md-6 d-flex align-items-stretch"
                  data-aos="flip-left"
                  data-aos-anchor-placement="top-bottom"
               >
                  <a href={Leaflets9} target="_blank" rel="noopener noreferrer">
                     <div className="icon-box">
                        <div className="icon">
                           <i className="bi bi-file-earmark-text"></i>
                        </div>
                        <h5>Zakażeń przewodu pokarmowego</h5>
                        <p></p>
                     </div>
                  </a>
               </div>
            </div>

            <p className="text-center fst-italic fw-semibold mb-4">
               Celem każdej ulotki jest omówienie najważniejszych objawów danej jednostki chorobowej, możliwości
               zdiagnozowania i leczenia oraz sposobów zapobiegania.
            </p>

            <figure>
               <figcaption className="blockquote-footer text-end">
                  źródło: <cite title="Source Title">www.aids.gov.pl</cite>
               </figcaption>
            </figure>
         </div>
      </section>
   );
};

export default Diseases;
