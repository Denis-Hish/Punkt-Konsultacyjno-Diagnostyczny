import React from 'react';

import CarouselComponent from '../components/Carousel';
import TabsComponent from '../components/Tabs';

import BrochureDoc from './../doc/5/kcdsaids_broszura_pkd_plus_a7_web.pdf';
import HivTestImg1 from './../img/5/hiv-test-1.jpg';
import HivTestImg2 from './../img/5/hiv-test-2.jpg';
import HivTestImg3 from './../img/5/hiv-test-3.jpg';

const Hiv_Test = () => {
   return (
      <>
         <section className="test-hiv">
            <div className="container">
               <div className="section-title mt-10">
                  <h2 data-aos="fade-down">TEST NA OBECNOŚĆ HIV</h2>
               </div>

               <div className="cards-hiv">
                  <div data-aos="fade-up" className="card-hiv">
                     <div className="card-hiv-img">
                        <img src={HivTestImg1} alt="Hiv Test" />
                     </div>
                     <div className="card card-hiv-content">
                        <p>
                           <b>
                              Zakażenie HIV rozpoznać można tylko po wykonaniu testu w kierunku obecności przeciwciał
                              anty-HIV.{' '}
                           </b>
                           W innych badaniach laboratoryjnych wykonywanych z różnych przyczyn, np. w ramach badań
                           okresowych w pracy, nie można stwierdzić zmian, które świadczyłyby o zakażeniu HIV.
                           Powszechnie dostępne w laboratoriach diagnostycznych są testy wykrywające obecność
                           przeciwciał przeciwko wirusom HIV-1 i HIV-2, opartych na metodzie ELISA.
                        </p>
                     </div>
                  </div>

                  <div data-aos="fade-up" className="card-hiv">
                     <div className="card-hiv-img">
                        <img src={HivTestImg2} alt="Hiv Test" />
                     </div>
                     <div className="card card-hiv-content">
                        <p>
                           <b>Wynik ujemny (negatywny)</b> oznacza, że nie odnaleziono przeciwciał anty-HIV. Jeśli
                           badanie wykonano przed upływem 6 tygodni od potencjalnego momentu zakażenia, wówczas wynik
                           testu może być fałszywie ujemny. Nie można bowiem wykluczyć, iż doszło do zakażenia, a tylko
                           nie powstała dostatecznie duża ilość przeciwciał przeciwko wirusowi, by zostały wykryte przez
                           test. Ten okres od zakażenia do momentu pojawiania się przeciwciał anty-HIV nosi nazwę
                           okienka serologicznego. Jeśli od ryzykownego zachowania minęło 12 tygodni i więcej, a wynik
                           testu jest ujemny, oznacza to, iż w 100% nie doszło do zakażenia.
                        </p>
                     </div>
                  </div>

                  <div data-aos="fade-up" className="card-hiv">
                     <div className="card-hiv-img">
                        <img src={HivTestImg3} alt="Hiv Test" />
                     </div>
                     <div className="card card-hiv-content">
                        <p>
                           <b>Wynik dodatni (pozytywny)</b> testu ELISA nie dowodzi jeszcze zakażenia. Wynik taki musi
                           zostać potwierdzony, gdyż zdarzają się wyniki fałszywie dodatnie. Potwierdzenia dokonuje się
                           przy pomocy testu Western blot, który wykonuje kilka specjalistycznych laboratoriów w Polsce.
                           W tym teście, także poszukuje się przeciwciał, ale skierowanych przeciwko poszczególnym
                           antygenom wirusa.{' '}
                           <b>
                              się przeciwciał, ale skierowanych przeciwko poszczególnym antygenom wirusa. Dopiero
                              dodatni wynik testu Western blot upoważnia do stwierdzenia, iż pacjent jest zakażony HIV.
                              się przeciwciał, ale skierowanych przeciwko poszczególnym antygenom wirusa.
                           </b>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="steps section-bg">
            <div className="container">
               <div className="section-title">
                  <h2 data-aos="fade-down">O krokach, które należy podjąć</h2>
                  <p>
                     po wykryciu zakażenia wirusem HIV poinformuje Cię doradca w naszym Punkcie przy wydawaniu wyniku
                     testu.
                  </p>
               </div>
               <h4 className="title-carousel text-center">
                  <i className="i-icon bi bi-exclamation-circle me-2"></i>
                  Pamiętaj:
               </h4>

               <div data-aos="flip-left" className="carousel-block">
                  <CarouselComponent />
               </div>
            </div>
         </section>

         <section className="brochure-question">
            <div className="container">
               <div className="section-title">
                  <h2 data-aos="fade-down" className="text-center">
                     Poniżej ulotka
                  </h2>
               </div>

               <p className="text-center fst-italic">
                  informująca na temat kroków, które należy podjąć
                  <b> po rozpoznaniu zakażenia HIV</b>
               </p>

               <div data-aos="fade-down" data-aos-delay="100" className="text-center brochure-btn download-file">
                  <a href={BrochureDoc} target="_blank" rel="noopener noreferrer">
                     <i className="bi bi-file-earmark-text"></i>
                  </a>
               </div>

               <p className="text-center fst-italic">
                  przekazuje odpowiedzi na często zadawane pytania, między innymi:
               </p>

               <div data-aos="fade-down" data-aos-delay="200" className="tabs-block">
                  <div className="card">
                     <TabsComponent />
                  </div>
               </div>

               <figure>
                  <figcaption class="blockquote-footer text-end">
                     źródło: <cite title="Source Title">www.aids.gov.pl</cite>
                  </figcaption>
               </figure>
            </div>
         </section>
      </>
   );
};

export default Hiv_Test;
