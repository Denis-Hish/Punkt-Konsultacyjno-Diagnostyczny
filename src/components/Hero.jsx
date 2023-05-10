import React from 'react';
import './../css/style.css';

const Hero = () => {
   return (
      <section id="hero" className="d-flex align-items-center">
         <div className="container">
            <h1>Zapraszamy</h1>
            <h2>do korzystania z poradnictwa i testowania w kierunku zakażenia wirusem HIV, HCV i kiły</h2>
            <a href="#about" className="btn-get-started scrollto">
               SERDECZNIE ZAPRASZAMY!
            </a>
         </div>
      </section>
   );
};

export default Hero;
