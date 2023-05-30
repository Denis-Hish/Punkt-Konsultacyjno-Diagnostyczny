import React from 'react';
import AccordionComponent from './Accordion';

const WhatIsWorthKnowing = () => {
   return (
      <section id="faq" className="what-is-worth-knowing faq">
         <div className="container">
            <div className="section-title">
               <h2 data-aos="fade-up">Co warto wiedzieć, zanim podejmie się decyzję o zrobieniu testu na HIV?</h2>
               <h6 data-aos="fade-up">Zakażenie HIV rozpoznać można tylko po wykonaniu testu w kierunku HIV</h6>
            </div>
            <AccordionComponent />
         </div>
      </section>
   );
};

export default WhatIsWorthKnowing;
