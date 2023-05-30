import React from 'react';

import image2 from './../img/gallery/gallery-4.jpg';

const VirusAids = () => {
   return (
      <>
         <div className="aids section-bg">
            <div className="container">
               <h5 data-aos="fade-in">
                  <b>AIDS</b> – od angielskiej nazwy acquired immunodeficiency syndrome, po polsku to zespół nabytego
                  upośledzenia odporności – końcowy etap zakażenia HIV, charakteryzujący się wystąpieniem chorób
                  definiujących AIDS, pojawiający się zwykle po wielu latach trwania infekcji HIV.
               </h5>
               <div className="aids-content">
                  <div className="d-flex align-items-center">
                     <div className="card">
                        <p>
                           Przebieg zakażenia zmienił się wraz z pojawieniem się skojarzonej terapii antyretrowirusowej.
                           Zakażenia HIV wprawdzie nie da się wyleczyć, usunąć z organizmu, ale dzięki lekom możliwe
                           jest znaczne spowolnienie postępu zakażenia, poprawa jakości życia z HIV i wydłużenie życia.
                        </p>
                     </div>
                     <img src={image2} alt="Doctor" />
                  </div>
                  <div className="text-center mt-5">
                     <a
                        href="https://aids.gov.pl/hiv_aids/podstawowe_informacje/"
                        className="more-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Dowiedz się więcej<i className="bx bx-chevron-right"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default VirusAids;
