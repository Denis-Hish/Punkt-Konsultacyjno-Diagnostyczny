import React from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import doc1 from './../doc/2/zalecenia_2022.pdf';

const WhatIsWorthKnowing = () => {
   // const tooltipText =
   //    'Zasady opieki nad osobami zakażonymi HIV. Zalecenia Polskiego Towarzystwa Naukowego AIDS2022, s.11 dostęp 10.11.2022';
   return (
      <section id="faq" className="what-is-worth-knowing faq">
         <div className="container">
            <div className="section-title">
               <h2 data-aos="fade-up">Co warto wiedzieć, zanim podejmie się decyzję o zrobieniu testu na HIV?</h2>
               <h6 data-aos="fade-up">Zakażenie HIV rozpoznać można tylko po wykonaniu testu w kierunku HIV</h6>
            </div>

            <div className="faq-list">
               <ul>
                  <li data-aos="fade-up">
                     <i className="bx bx-help-circle icon-help"></i>
                     <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">
                        Co to jest "test na HIV"?<i className="bx bx-chevron-down icon-close"></i>
                        <i className="bx bx-chevron-up icon-show"></i>
                     </a>
                     <div id="faq-list-1" className="collapse" data-bs-parent=".faq-list">
                        <p>Ten test nie wykrywa samego wirusa HIV, nie wykrywa też AIDS.</p>
                        <p>
                           Test wykrywa przeciwciała skierowane przeciwko wirusowi, produkowane przez układ
                           odpornościowy człowieka zakażonego HIV. Wyprodukowanie przeciwciał w takiej ilości, by mogły
                           być zauważone przez test wymaga czasu (ten czas nazywany jest okienkiem serologicznym).
                        </p>
                        <p>We wszystkich laboratoriach wykonywane są tak zwane testy przesiewowe.</p>
                        <p>
                           (…) W ramach laboratoryjnej diagnostyki zakażenia HIV zaleca się stosowanie testów
                           serologicznych tzw. IV generacji, które umożliwiają wykrycie antygenu p24 HIV (typowo po 2
                           tygodniach od zakażenia) oraz przeciwciał anty-HIV 1/2 (po 4-12 tygodniach od zakażenia).
                        </p>
                        <p>
                           Obecnie nie zaleca się stosowania w laboratoryjnych badaniach przesiewowych testów tzw. III
                           generacji (z wyjątkiem tzw. szybkich testów), bowiem pozwalają one na wykrycie jedynie
                           przeciwciał anty-HIV 1/2 (okno diagnostyczne 12 tygodni).
                        </p>
                        <p>
                           Ujemny wynik testu przesiewowego IV generacji pozwala zakończyć diagnostykę po 6 tygodniach
                           od ekspozycji.
                           <OverlayTrigger
                              placement="top"
                              overlay={
                                 <Tooltip className="toolip-question">
                                    Zasady opieki nad osobami zakażonymi HIV. Zalecenia Polskiego Towarzystwa Naukowego
                                    AIDS2022, s.11 dostęp 10.11.2022
                                 </Tooltip>
                              }
                           >
                              <a href={doc1} className="w-link" target="_blank" rel="noopener noreferrer">
                                 <i className="bi bi-question-circle"></i>
                              </a>
                           </OverlayTrigger>
                        </p>
                     </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="100">
                     <i className="bx bx-help-circle icon-help"></i>
                     <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">
                        Jak wykonywany jest test na HIV?<i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                     </a>
                     <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                        <p>
                           Wykonanie testu wymaga pobrania niewielkiej próbki krwi. Na ogół nakłuwa się żyłę w zgięciu
                           łokciowym. Nie trzeba być przed tym na czczo.
                        </p>
                        <p>
                           W Polsce do pobierania krwi używa się zawsze sterylnych, jednorazowych igieł i strzykawek.
                        </p>
                     </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="200">
                     <i className="bx bx-help-circle icon-help"></i>
                     <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">
                        Jak długo czeka się na wynik testu?<i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                     </a>
                     <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                        <p>
                           W zależności od tego, gdzie wykonuje się test, czas oczekiwania na wynik to jeden do kilku
                           dni. Jeżeli wynik testu przesiewowego okaże się dodatni, wówczas konieczne będzie wysłanie
                           krwi do laboratorium wykonującego testy potwierdzające zakażenie, to znaczy testy Western
                           blot, co może się wiązać z dłuższym oczekiwaniem na wynik.
                        </p>
                     </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="300">
                     <i className="bx bx-help-circle icon-help"></i>
                     <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">
                        Co oznacza ujemny wynik testu?
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                     </a>
                     <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                        <p>
                           Wynik ujemny (negatywny) testu przesiewowego oznacza, iż w badanej krwi nie znaleziono
                           przeciwciał przeciwko wirusowi HIV. Jeśli przez 6 tygodni poprzedzających wykonanie testu nie
                           było żadnych sytuacji, które mogłyby doprowadzić do zakażenia HIV (na przykład kontaktów
                           seksualnych z osobami, które nie robiły sobie testu i nie wiedzą, czy są zakażone, używania
                           wspólnie z innymi sprzętu do iniekcji) wynik ujemny oznacza, iż badany pacjent/pacjentka nie
                           jest zakażona/y HIV. Ale nie musi tak być do końca życia. Wszystko zależy od tego, jak wiele
                           będzie się wiedzieć o możliwościach zapobiegania zakażeniu i używania tych wiadomości w
                           życiu.
                        </p>
                     </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="400">
                     <i className="bx bx-help-circle icon-help"></i>
                     <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">
                        Co oznacza dodatni wynik testu?
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                     </a>
                     <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                        <p>
                           Dodatni (pozytywny) wynik testu przesiewowego nie jest wynikiem ostatecznym. Zdarzają się
                           wyniki fałszywie dodatnie (np. w przypadku ciąży, choroby autoimmunologicznej, szczepienia).
                           Dodatni wynik testu przesiewowego zawsze musi zostać potwierdzony przy pomocy testu Western
                           blot, który wykonuje kilka specjalistycznych laboratoriów w Polsce. W tym teście także
                           poszukuje się przeciwciał, ale skierowanych przeciwko poszczególnym antygenom wirusa. Dopiero
                           dodatni wynik testu Western blot upoważnia do stwierdzenia, iż pacjent jest zakażony HIV.
                        </p>
                     </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="500">
                     <i className="bx bx-help-circle icon-help"></i>
                     <a data-bs-toggle="collapse" data-bs-target="#faq-list-6" className="collapsed">
                        Kto powinien zrobić sobie test?
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                     </a>
                     <div id="faq-list-6" className="collapse" data-bs-parent=".faq-list">
                        <p>
                           <u>Każdy kto:</u>
                        </p>
                        <p className="fst-italic">- kiedykolwiek miał kontakt seksualny:</p>
                        <p>
                           <ul>
                              <li>• z przypadkową osobą/osobami,</li>
                              <li>• z osobą zakażoną HIV,</li>
                              <li>• z partnerami/partnerkami mającymi wielu partnerów seksualnych,</li>
                           </ul>
                        </p>
                        <p className="fst-italic">- miał wielu partnerów/partnerek seksualnych,</p>
                        <p className="fst-italic">- podczas kontaktów seksualnych nie stosował prezerwatyw,</p>
                        <p className="fst-italic">- przebył jakąś z chorób przenoszonych drogą płciową,</p>
                        <p className="fst-italic">
                           - kiedykolwiek miał kontakty z osoba przyjmującą narkotyki w iniekcjach,
                        </p>
                        <p className="fst-italic">
                           - przyjmował narkotyki w iniekcjach i używał do iniekcji narkotyków lub innych substancji
                           sprzętu do iniekcji, z którego korzystały inne osoby,
                        </p>
                        <p className="fst-italic">
                           - wykonywał np. tatuaż lub założenie kolczyków (piercing) przy użyciu niedostatecznie
                           wysterylizowanego sprzętu,
                        </p>
                        <p className="fst-italic">
                           - stracił kiedykolwiek kontrolę nad swoim zachowaniem (pod wpływem alkoholu, narkotyków lub
                           innych środków zmieniających świadomość).
                        </p>
                        <p>
                           Test powinny wykonać też kobiety planujące zajście w ciążę lub będące w ciąży, a także ich
                           partnerzy.
                        </p>
                     </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="600">
                     <i className="bx bx-help-circle icon-help"></i>
                     <a data-bs-toggle="collapse" data-bs-target="#faq-list-7" className="collapsed">
                        Gdzie najlepiej zrobić test?
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                     </a>
                     <div id="faq-list-7" className="collapse" data-bs-parent=".faq-list">
                        <p>
                           Testy na HIV można wykonać w większości laboratoriów diagnostycznych, za mniejszą lub większą
                           odpłatnością. Nie są to testy anonimowe.
                        </p>
                        <p>
                           Najlepszym miejscem do zrobienia testu są punkty konsultacyjno-diagnostyczne (PKD), w których
                           testy wykonywane są bez skierowania, bezpłatnie i anonimowo. Test wykonuje się na hasło.
                        </p>
                        <p>
                           W PKD, zanim zostanie pobrana krew na badanie, można się wiele dowiedzieć o rzeczywistym
                           ryzyku zakażenia, sposobach uniknięcia zakażenia, o tym, czym tak naprawdę jest HIV i AIDS.
                           Rozmowy przeprowadzane są przez doradców (najczęściej lekarzy lub psychologów), którzy
                           uzyskali certyfikaty Krajowego Centrum ds. AIDS, a więc przez osoby kompetentne. Możliwe jest
                           także zadanie dodatkowych pytań podczas odbierania wyniku. Doradcy wyjaśniają też osobom
                           zakażonym, co mają dalej robić, gdzie zgłosić się w celu dalszej opieki zdrowotnej i
                           ewentualnego leczenia.
                        </p>
                        <p>
                           Jeśli podejmie się decyzję o wykonaniu testu, a PKD nie ma w miejscu zamieszkania, warto
                           pojechać do znajdującego się najbliżej. Nie tylko spotka się osoby profesjonalne, ale też
                           przyjazne ludziom, nie wyrażające uprzedzeń. Zachowa się też pełną anonimowość.
                        </p>
                     </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="700">
                     <i className="bx bx-help-circle icon-help"></i>
                     <a data-bs-toggle="collapse" data-bs-target="#faq-list-8" className="collapsed">
                        Jak odbiera się wynik testu?
                        <i className="bx bx-chevron-down icon-show"></i>
                        <i className="bx bx-chevron-up icon-close"></i>
                     </a>
                     <div id="faq-list-8" className="collapse" data-bs-parent=".faq-list">
                        <p>
                           Test odbiera się osobiście, podając hasło przyjęte przed wykonaniem testu. Nie udziela się
                           informacji o wyniku telefonicznie lub korespondencyjnie.
                        </p>
                        <p>
                           Odbieranie wyniku jest okazją do wyjaśnienia wątpliwości, upewnienia się co do znaczenia
                           wyniku. W przypadku wyniku dodatniego doradca poinformuje o dalszej drodze postępowania.
                        </p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </section>
   );
};

export default WhatIsWorthKnowing;
