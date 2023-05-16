import React from 'react';
import { Link } from 'react-router-dom';

const Notfoundpage = () => {
   return (
      <>
         <h1 className="delete_class">404</h1>
         <Link to="/">Home</Link>
      </>
   );
};

export default Notfoundpage;
