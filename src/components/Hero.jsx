import React from 'react';

const Hero = () => {
   return (
      <section id="hero" className="d-flex align-items-center">
         <div className="container">
            <h1 data-aos="fade-down" data-aos-delay="500">
               Zapraszamy
            </h1>
            <h2 data-aos="fade-left" data-aos-delay="1000">
               do korzystania z poradnictwa i testowania w kierunku zakażenia wirusem HIV, HCV i kiły
            </h2>
            <a data-aos="fade-in" href="#about" className="btn-get-started scrollto">
               więcej szczegółów
            </a>
         </div>
      </section>
   );
};

export default Hero;
