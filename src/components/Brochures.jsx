import React from 'react';

import doc1 from './../doc/3/Co-musisz-wiedziec_2020.pdf';
import doc2 from './../doc/3/HIVAIDS_O_co_kaman_2022.pdf';

const Brochures = () => {
   return (
      <>
         <div className="brochures section-bg">
            <div className="container">
               <div className="section-title">
                  <h2 data-aos="fade-down">Poniżej broszury informacyjne:</h2>
               </div>
               <h5 data-aos="fade-down" className="text-center brochures-content">
                  Film edukacyjny na temat HIV i AIDS, zawiera odpowiedzi na wiele pytań między innymi dotyczących tego,
                  jak przenosi się zakażenie, jak temu zapobiegać i kiedy należy rozważyć wykonanie testu w kierunku HIV
               </h5>
               <div className="container-fluid">
                  <div className="row">
                     <div
                        data-aos="fade-right"
                        className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative"
                     >
                        <a
                           href="https://youtu.be/Uw66a74nEeM"
                           className="glightbox play-btn mb-4"
                           target="_blank"
                           rel="noopener noreferrer"
                        ></a>
                     </div>
                     <div className="icon-boxes text-cards col-xl-7 col-lg-6 d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <a
                           data-aos="fade-left"
                           data-aos-delay="100"
                           href={doc1}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <div className="icon-box icon-box-2 icon-box-2-bg-1">
                              <div className="icon">
                                 <i className="bi bi-file-pdf"></i>
                              </div>
                              <p className="description">
                                 "Co musisz wiedzieć o HIV i AIDS bez względu na to, gdzie mieszkasz czy pracujesz" –
                                 broszura, która zapoznaje z informacjami na temat HIV i AIDS oraz z faktami dotyczącymi
                                 życia i pracy z osobami HIV+.
                              </p>
                           </div>
                        </a>

                        <a
                           data-aos="fade-left"
                           data-aos-delay="200"
                           href={doc2}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <div className="icon-box icon-box-2 icon-box-2-bg-2">
                              <div className="icon">
                                 <i className="bi bi-file-pdf"></i>
                              </div>
                              <p className="description">
                                 "HIV?! AIDS?! O co kaman?" – broszura przeznaczona dla młodzieży, powstała w efekcie
                                 dialogu pomiędzy Krajowym Centrum ds. AIDS i uczniami gimnazjów.
                              </p>
                           </div>
                        </a>
                        <div className="text-center mt-5">
                           <a
                              href="https://aids.gov.pl/publikacje/168/"
                              className="more-btn"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Inne filmy edukacyjne
                              <i className="bx bx-chevron-right"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Brochures;
