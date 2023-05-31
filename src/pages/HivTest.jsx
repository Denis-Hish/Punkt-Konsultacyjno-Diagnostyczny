import React from 'react';

import CarouselComponent from '../components/Carousel';
import TabsComponent from '../components/Tabs';

const Hiv_Test = () => {
   return (
      <>
         <section className="test-hiv">
            <div className="container">
               <div className="section-title mt-10">
                  <h2 data-aos="fade-down">TEST NA OBECNOŚĆ HIV</h2>
               </div>

               <p>
                  <b>
                     Zakażenie HIV rozpoznać można tylko po wykonaniu testu w kierunku obecności przeciwciał anty-HIV
                  </b>
                  . W innych badaniach laboratoryjnych wykonywanych z różnych przyczyn, np. w ramach badań okresowych w
                  pracy, nie można stwierdzić zmian, które świadczyłyby o zakażeniu HIV. Powszechnie dostępne w
                  laboratoriach diagnostycznych są testy wykrywające obecność przeciwciał przeciwko wirusom HIV-1 i
                  HIV-2, opartych na metodzie ELISA.
               </p>
               <p>
                  <b>Wynik ujemny (negatywny)</b> oznacza, że nie odnaleziono przeciwciał anty-HIV. Jeśli badanie
                  wykonano przed upływem 6 tygodni od potencjalnego momentu zakażenia, wówczas wynik testu może być
                  fałszywie ujemny. Nie można bowiem wykluczyć, iż doszło do zakażenia, a tylko nie powstała
                  dostatecznie duża ilość przeciwciał przeciwko wirusowi, by zostały wykryte przez test. Ten okres od
                  zakażenia do momentu pojawiania się przeciwciał anty-HIV nosi nazwę okienka serologicznego. Jeśli od
                  ryzykownego zachowania minęło 12 tygodni i więcej, a wynik testu jest ujemny, oznacza to, iż w 100%
                  nie doszło do zakażenia.
               </p>
               <p>
                  <b>Wynik dodatni (pozytywny)</b> testu ELISA nie dowodzi jeszcze zakażenia. Wynik taki musi zostać
                  potwierdzony, gdyż zdarzają się wyniki fałszywie dodatnie. Potwierdzenia dokonuje się przy pomocy
                  testu Western blot, który wykonuje kilka specjalistycznych laboratoriów w Polsce. W tym teście, także
                  poszukuje się przeciwciał, ale skierowanych przeciwko poszczególnym antygenom wirusa.
                  <b>
                     się przeciwciał, ale skierowanych przeciwko poszczególnym antygenom wirusa. Dopiero dodatni wynik
                     testu Western blot upoważnia do stwierdzenia, iż pacjent jest zakażony HIV. się przeciwciał, ale
                     skierowanych przeciwko poszczególnym antygenom wirusa.
                  </b>
               </p>
            </div>

            <TabsComponent />
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
               {/* <ul>
                     <li>
                        To, że wiesz o tym, że jesteś zakażony HIV daje Ci możliwość kontrolowania sytuacji. Ale żeby
                        kontrolować sytuację musisz też trochę wiedzieć o HIV i AIDS.
                     </li>
                     <li>
                        Dzięki temu wiesz, że możesz monitorować przebieg zakażenia, zwolnić jego postęp i zapobiec
                        wystąpieniu chorób związanych za infekcją HIV.
                     </li>
                     <li>Możesz uchronić przed zakażaniem Twoją partnerkę/partnera seksualnego.</li>
                     <li>Możesz mieć zdrowe dzieci.</li>
                  </ul> */}

               <div data-aos="flip-left" className="carousel-block">
                  <CarouselComponent />
               </div>

               <p>
                  Poniżej ulotka informująca na temat kroków, które należy podjąć <b>po rozpoznaniu zakażenia HIV</b> –
                  przekazuje odpowiedzi na często zadawane pytania, między innymi: Czy należy informować kogoś o
                  wykrytym zakażeniu? Jak życie z HIV różni się od życia bez wirusa? Jak wygląda leczenie osób
                  zakażonych HIV? (źródło: www.aids.gov.pl)
               </p>
               <p>Szukasz odpowiedzi na trudne pytania, potrzebujesz informacji – napisz lub zadzwoń:</p>
               <ul>
                  <li>https://aids.gov.pl/poradnia_internetowa/</li>
                  <li>poradnia@aids.gov.pl</li>
                  <li>
                     Ogólnopolski telefon zaufania HIV/AIDS 800 888 448 czynny w dni robocze w godz. 9.00 – 21.00
                     (połączenie bezpłatne)
                  </li>
                  <li>https://aids.gov.pl/hiv_aids/informacje_dla_osob_hiv/</li>
               </ul>
            </div>
         </section>
      </>
   );
};

export default Hiv_Test;
