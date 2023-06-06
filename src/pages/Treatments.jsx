import React from 'react';

import BrochuresDoc1 from './../doc/6/2010_zyc_z_wirusem.pdf';
import BrochuresDoc2 from './../doc/6/dokladnosc_przyjmowania_lekow.pdf';
import BrochuresDoc3 from './../doc/6/hiv_cd4_wiremia.pdf';
import BrochuresDoc4 from './../doc/6/leczenie_arv.pdf';
import BrochuresDoc5 from './../doc/6/zakazenie_hiv_i_kobiety.pdf';
import BrochuresDoc6 from './../doc/6/zakazenie_rozpoznanie.pdf';

const Treatments = () => {
   return (
      <section className="treatments section-bg">
         <div className="container">
            <div className="section-title mt-10">
               <h2 data-aos="fade-down">LECZENIE HIV/AIDS</h2>
               <p>
                  Poniżej publikacja i broszury przeznaczone dla osób zakażonych wirusem HIV. Ich celem jest
                  przybliżenie pacjentom zagadnień związanych z chorobą. Zrozumienie tej problematyki może pomóc osobom
                  zakażonym w nawiązaniu lepszej współpracy z lekarzem, stosowaniu leczenia antyretrowirusowego z
                  większym zrozumieniem, życia z wirusem nie narażając otoczenia i bliskich.
               </p>
            </div>
         </div>

         <div className="brochures">
            <div className="card" data-aos="fade-up">
               <a
                  href={BrochuresDoc1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center px-3"
               >
                  <div className="brochures-button">
                     <i className="bi bi-file-earmark-text"></i>
                  </div>
                  <p>Żyć z wirusem. Poradnik dla osób żyjących z HIV</p>
               </a>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="100">
               <a
                  href={BrochuresDoc2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center px-3"
               >
                  <div className="brochures-button">
                     <i className="bi bi-file-earmark-text"></i>
                  </div>
                  <p>Dokładność przyjmowania leków antyretrowirusowych - dlaczego jest to ważne?</p>
               </a>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="200">
               <a
                  href={BrochuresDoc3}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center px-3"
               >
                  <div className="brochures-button">
                     <i className="bi bi-file-earmark-text"></i>
                  </div>
                  <p>HIV, CD4, Wiremia</p>
               </a>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="300">
               <a
                  href={BrochuresDoc4}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center px-3"
               >
                  <div className="brochures-button">
                     <i className="bi bi-file-earmark-text"></i>
                  </div>
                  <p>Leczenie antyretrowirusowe (ARV)</p>
               </a>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="400">
               <a
                  href={BrochuresDoc5}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center px-3"
               >
                  <div className="brochures-button">
                     <i className="bi bi-file-earmark-text"></i>
                  </div>
                  <p>Zakażenie HIV i kobiety</p>
               </a>
            </div>

            <div className="card" data-aos="fade-up" data-aos-delay="500">
               <a
                  href={BrochuresDoc6}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center px-3"
               >
                  <div className="brochures-button">
                     <i className="bi bi-file-earmark-text"></i>
                  </div>
                  <p>Zakażenie, rozpoznanie, i co dalej?</p>
               </a>
            </div>

            <figure>
               <figcaption className="blockquote-footer text-end mt-1">
                  źródło: <cite title="Source Title">www.aids.gov.pl</cite>
               </figcaption>
            </figure>
         </div>
      </section>
   );
};

export default Treatments;
