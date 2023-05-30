import React from 'react';

import image1 from './../img/gallery/gallery-3.jpg';

const NameVirus = () => {
   return (
      <div className="hiv">
         <div className="container">
            <div className="section-title mt-10">
               <h2 data-aos="fade-down">CO TO JEST HIV I AIDS?</h2>
            </div>
            <div className="row">
               <div data-aos="fade-down" data-aos-delay="100" className="col-lg-4 d-flex align-items-stretch">
                  <div className="content">
                     <h3>
                        <b>HIV</b> to nazwa wirusa,
                     </h3>
                     <p>
                        pochodząca od skrótu angielskiej nazwy human immunodeficiency virus, co po polsku oznacza:
                        ludzki wirus upośledzenia odporności
                     </p>
                     <p>Zakazić HIV można się tylko 3 drogami:</p>
                  </div>
               </div>
               <div className="col-lg-8 d-flex align-items-stretch">
                  <div className="icon-boxes d-flex flex-column justify-content-center">
                     <div className="row">
                        <div data-aos="fade-down" data-aos-delay="200" className="col-xl-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-lg-0 mt-xl-0">
                              <i className="bi bi-droplet"></i>
                              <h4>Przez krew</h4>
                           </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="300" className="col-xl-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-xl-0">
                              <i className="bi bi-heart"></i>
                              <h4>Przez kontakty seksualne</h4>
                           </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="400" className="col-xl-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-xl-0">
                              <i className="bi bi-people"></i>
                              <h4>Oraz z zakażonej HIV matki na jej dziecko</h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="d-flex align-items-center mt-5">
                  <img src={image1} alt="Doctor" />
                  <div className="card">
                     <p>
                        Zakażenie nie powoduje żadnych objawów na skórze czy na błonach śluzowych, nie powoduje też
                        zmian w badaniach laboratoryjnych. Jeśli osoba zakażona nie zrobi sobie testu przez 8-10 lat
                        może nie wiedzieć o swoim zakażeniu. Jednak przez ten czas wirus bardzo szybko mnoży się w
                        organizmie osoby zakażonej, powoduje niszczenie układu immunologicznego (odpornościowego). Kiedy
                        układ ten przestaje chronić organizm przed drobnoustrojami chorobotwórczymi pojawiają się objawy
                        związane z zakażeniem.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NameVirus;
