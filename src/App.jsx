import './css/style.css';
import './js/main.js';
import './components/VendorStyles';
import 'animate.css';

import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Invite from './components/Invite';
import Home from './pages/Home';
import What_Is from './pages/What_Is';

const App = () => {
   return (
      <>
         <Hero />
         <WhyUs />
         <About />
         <Invite />
      </>
   );
};

export default App;
