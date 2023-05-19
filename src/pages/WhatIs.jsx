import React from 'react';

import VirusHiv from '../components/VirusHiv';
import VirusAids from '../components/VirusAids';
import WhatIsWorthKnowing from '../components/WhatIsWorthKnowing';
import Brochures from '../components/Brochures';

const What_Is = () => {
   return (
      <section id="what-is" className="what-is">
         <VirusHiv />
         <VirusAids />
         <WhatIsWorthKnowing />
         <Brochures />
      </section>
   );
};

export default What_Is;
