import React from 'react';
import { Link } from 'react-router-dom';

const Notfoundpage = () => {
   return (
      <section className="notfoundpage">
         <div className="container">
            <h3>
               Uuups! <br />
               Houston, mamy problem 555
            </h3>
            <h4>Błąd</h4>
            <h2>404</h2>
            <h4>Strona nie znaleziona</h4>
            <button className="btn">
               <Link to="/">STRONA GŁÓWNA</Link>
            </button>
         </div>
      </section>
   );
};

export default Notfoundpage;
