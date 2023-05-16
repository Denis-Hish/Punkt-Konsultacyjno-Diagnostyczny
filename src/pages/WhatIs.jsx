import React from 'react';
import image1 from './../img/gallery/gallery-3.jpg';
import image2 from './../img/gallery/gallery-4.jpg';

const What_Is = () => {
   return (
      <section id="what-is" className="what-is">
         <div className="container hiv">
            <div className="section-title">
               <h2>CO TO JEST HIV I AIDS?</h2>
            </div>
            <div className="row">
               <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="content">
                     <h3>HIV to nazwa wirusa,</h3>
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
                        <div className="col-xl-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-xl-0">
                              <i className="bi bi-droplet"></i>
                              <h4>Przez krew</h4>
                           </div>
                        </div>
                        <div className="col-xl-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-xl-0">
                              <i className="bi bi-heart"></i>
                              <h4>Przez kontakty seksualne</h4>
                           </div>
                        </div>
                        <div className="col-xl-4 d-flex align-items-stretch">
                           <div className="icon-box mt-4 mt-xl-0">
                              <i className="bi bi-people"></i>
                              <h4>Oraz z zakażonej HIV matki na jej dziecko</h4>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="text">
            <div className="container">
               <div className="d-flex align-items-center">
                  <img src={image1} alt="" />
                  <p>
                     Zakażenie nie powoduje żadnych objawów na skórze czy na błonach śluzowych, nie powoduje też zmian w
                     badaniach laboratoryjnych. Jeśli osoba zakażona nie zrobi sobie testu przez 8-10 lat może nie
                     wiedzieć o swoim zakażeniu. Jednak przez ten czas wirus bardzo szybko mnoży się w organizmie osoby
                     zakażonej, powoduje niszczenie układu immunologicznego (odpornościowego). Kiedy układ ten przestaje
                     chronić organizm przed drobnoustrojami chorobotwórczymi pojawiają się objawy związane z zakażeniem.
                  </p>
               </div>
               <h5 className="text-center">
                  AIDS – od angielskiej nazwy acquired immunodeficiency syndrome, po polsku to zespół nabytego
                  upośledzenia odporności – końcowy etap zakażenia HIV, charakteryzujący się wystąpieniem chorób
                  definiujących AIDS, pojawiający się zwykle po wielu latach trwania infekcji HIV.
               </h5>
               <div className="aids">
                  <div className="d-flex align-items-center">
                     <p>
                        Przebieg zakażenia zmienił się wraz z pojawieniem się skojarzonej terapii antyretrowirusowej.
                        Zakażenia HIV wprawdzie nie da się wyleczyć, usunąć z organizmu, ale dzięki lekom możliwe jest
                        znaczne spowolnienie postępu zakażenia, poprawa jakości życia z HIV i wydłużenie życia.
                     </p>
                     <img src={image2} alt="" />
                  </div>
                  <div class="text-center">
                     <a
                        href="https://aids.gov.pl/hiv_aids/podstawowe_informacje/"
                        class="more-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Dowiedz się więcej<i class="bx bx-chevron-right"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="brochures">
            <div className="container">
               <div className="section-title">
                  <h2>Poniżej broszury informacyjne:</h2>
               </div>

               <p>
                  "Co musisz wiedzieć o HIV i AIDS bez względu na to, gdzie mieszkasz czy pracujesz" – broszura, która
                  zapoznaje z informacjami na temat HIV i AIDS oraz z faktami dotyczącymi życia i pracy z osobami HIV+.
               </p>

               <p>
                  "HIV?! AIDS?! O co kaman?" – broszura przeznaczona dla młodzieży, powstała w efekcie dialogu pomiędzy
                  Krajowym Centrum ds. AIDS i uczniami gimnazjów.
               </p>

               <p>
                  Film edukacyjny na temat HIV i AIDS, zawiera odpowiedzi na wiele pytań m.in. dotyczących tego, jak
                  przenosi się zakażenie, jak temu zapobiegać i kiedy należy rozważyć wykonanie testu w kierunku HIV
               </p>

               <iframe
                  // width="1280"
                  // height="720"
                  width="720"
                  height="360"
                  rel="noopener noreferrer"
                  src="https://www.youtube.com/embed/Uw66a74nEeM"
                  title="AIDS - epidemia wciąż niepokonana"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
               ></iframe>

               <div class="text-center">
                  <a
                     href="https://aids.gov.pl/publikacje/168/"
                     class="more-btn"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Inne filmy edukacyjne<i class="bx bx-chevron-right"></i>
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default What_Is;
