import React from 'react';

// Images
import PolandFlag from './../img/4/poland.png';
import EnglishFlag from './../img/4/english.jpg';
import FranceFlag from './../img/4/france.png';
import UkraineFlag from './../img/4/ukraine.png';
import GeorgiaFlag from './../img/4/georgia.png';
import ArabicFlag from './../img/4/arabic.png';
import RussiaFlag from './../img/4/russia-kakaha.png';

// Documents
import PLDoc from './../doc/4/broshura/PL.pdf';
import ENDoc from './../doc/4/broshura/EN.pdf';
import FRDoc from './../doc/4/broshura/FR.pdf';
import UADoc from './../doc/4/broshura/UA.pdf';
import GRDoc from './../doc/4/broshura/GR.pdf';
import ARDoc from './../doc/4/broshura/AR.pdf';
import RUDoc from './../doc/4/broshura/RU.pdf';

const How_Can = () => {
   return (
      <section className="how-can">
         <div className="container">
            <div className="section-title mt-10">
               <h2>JAK MOŻNA SIĘ ZAKAZIĆ HIV?</h2>
               <p>
                  Istnieją tylko 3 drogi przenoszenia wirusa HIV. Od czasu trwania epidemii HIV/AIDS nie poznano innych
                  dróg przenoszenia zakażenia!
               </p>
            </div>
            <div className="card">
               <div className="text-block">
                  <div className="number"></div>
                  <div className="text">
                     <h3>Krew</h3>
                     <ul>
                        <li>
                           Zakażenie przez krew może dotyczyć mogą osób używających wspólnie z innymi sprzętu do
                           iniekcji w celu przyjmowania środków psychoaktywnych.
                        </li>
                        <li>
                           Każda porcja krwi oddawanej w stacjach krwiodawstwa jest badana w kierunku zakażenia HIV, co
                           w znacznym stopniu eliminuje ryzyko zakażenia. W Polsce od lat nie zdarzył się przypadek
                           przeniesienia zakażenia poprzez transfuzję krwi i środków krwiopochodnych.
                        </li>
                        <li>
                           Tatuaże, zabiegi akupunktury, przekłucia uszu czy innych części ciała muszą być wykonywane
                           sterylnymi narzędziami.
                        </li>
                     </ul>
                  </div>
                  <div className="image-block">
                     <i className="bi bi-droplet"></i>
                  </div>
               </div>
            </div>

            <div className="card">
               <div className="text-block">
                  <div className="number"></div>
                  <div className="text">
                     <h3>Kontakty seksualne</h3>
                     <ul>
                        <li>Jeśli ktoś podejmuje kontakty seksualne z przygodnymi partnerami – ryzykuje!</li>
                     </ul>
                  </div>
                  <div className="image-block">
                     <i className="bi bi-heart"></i>
                  </div>
               </div>
            </div>

            <div className="card">
               <div className="text-block">
                  <div className="number"></div>
                  <div className="text">
                     <h3>Przeniesienie wirusa z zakażonej HIV matki na jej dziecko</h3>
                     <ul>
                        <li>
                           Ryzyko przeniesienia zakażenia z matki na dziecko można zmniejszyć do nieco ponad 1% jeśli
                           kobieta:
                        </li>
                        <ul>
                           <li>przyjmuje podczas ciąży przynajmniej jeden lek antyretrowirusowy,</li>
                           <li>rozwiązanie ciąży następuje przez cesarskie cięcie,</li>
                           <li>noworodek nie jest karmiony piersią.</li>
                        </ul>
                        <li>Jest to możliwe tylko wówczas, kiedy kobieta wie o swoim zakażeniu!</li>
                     </ul>
                  </div>
                  <div className="image-block">
                     <i className="bi bi-people"></i>
                  </div>
               </div>
            </div>

            <div className="card">
               <i className="bi bi-file-earmark-arrow-down"></i>

               <p>
                  Zapraszamy na stronę: https://aids.gov.pl/publikacje/203/ Do pobrania broszury z informacją, czym są
                  zakażenie HIV i choroba AIDS, jak przenosi się wirus, jak temu zapobiec, jak wykonać testu w kierunku
                  HIV.
               </p>
               <p>Broszurę można pobrać w językach:</p>
               <ul className="language">
                  <li>
                     <a href={PLDoc} target="_blank" rel="noopener noreferrer">
                        <img className="flag" src={PolandFlag} alt="Poland Flag" />
                        polski
                     </a>
                  </li>
                  <li>
                     <a href={ENDoc} target="_blank" rel="noopener noreferrer">
                        <img className="flag" src={EnglishFlag} alt="English Flag" />
                        angielski
                     </a>
                  </li>
                  <li>
                     <a href={FRDoc} target="_blank" rel="noopener noreferrer">
                        <img className="flag" src={FranceFlag} alt="France Flag" />
                        francuski
                     </a>
                  </li>
                  <li>
                     <img className="flag" src={UkraineFlag} alt="Ukraine Flag" />
                     ukraiński
                  </li>
                  <li>
                     <img className="flag" src={GeorgiaFlag} alt="Georgia Flag" />
                     gruziński
                  </li>
                  <li>
                     <img className="flag" src={ArabicFlag} alt="Arabic Flag" />
                     arabski
                  </li>
                  <li>
                     <img className="flag" src={RussiaFlag} alt="Russia Flag" />
                     rosyjski
                  </li>
               </ul>
            </div>
         </div>
      </section>
   );
};

export default How_Can;
