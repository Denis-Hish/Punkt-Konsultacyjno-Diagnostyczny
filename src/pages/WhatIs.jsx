import React from 'react';

import VirusHiv from '../components/VirusHiv';
import VirusAids from '../components/VirusAids';
import Brochures from '../components/Brochures';

const What_Is = () => {
   return (
      <section id="what-is" className="what-is">
         <VirusHiv />
         <VirusAids />
         <Brochures />
      </section>
   );
};

export default What_Is;
