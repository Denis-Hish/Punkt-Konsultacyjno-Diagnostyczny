import React from 'react';

const Brochures = () => {
   return (
      <>
         <div className="brochures">
            <div className="container">
               <div className="section-title">
                  <h2>Poniżej broszury informacyjne:</h2>
               </div>
               <h5 className="text-center">
                  Film edukacyjny na temat HIV i AIDS, zawiera odpowiedzi na wiele pytań między innymi dotyczących tego,
                  jak przenosi się zakażenie, jak temu zapobiegać i kiedy należy rozważyć wykonanie testu w kierunku HIV
               </h5>
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        <a
                           href="https://youtu.be/Uw66a74nEeM"
                           class="glightbox play-btn mb-4"
                           target="_blank"
                           rel="noopener noreferrer"
                        ></a>
                     </div>
                     <div class="text-cards col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <div class="icon-box">
                           <div class="icon">{/* <i class="bx bx-fingerprint"></i> */}</div>
                           <h4 class="title">{/* <a href="">Lorem Ipsum</a> */}</h4>
                           <p class="description">
                              "Co musisz wiedzieć o HIV i AIDS bez względu na to, gdzie mieszkasz czy pracujesz" –
                              broszura, która zapoznaje z informacjami na temat HIV i AIDS oraz z faktami dotyczącymi
                              życia i pracy z osobami HIV+.
                           </p>
                        </div>
                        <div class="icon-box">
                           <p class="description">
                              "HIV?! AIDS?! O co kaman?" – broszura przeznaczona dla młodzieży, powstała w efekcie
                              dialogu pomiędzy Krajowym Centrum ds. AIDS i uczniami gimnazjów.
                           </p>
                        </div>
                        <div className="text-center">
                           <a
                              href="https://aids.gov.pl/publikacje/168/"
                              className="more-btn"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              Inne filmy edukacyjne<i className="bx bx-chevron-right"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               {/* ---------------------------------------- */}
            </div>
         </div>
      </>
   );
};

export default Brochures;
