import './css/style.css';
import './js/main.js';
import './components/VendorStyles';
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import News from './pages/News';
import Notfoundpage from './pages/Notfoundpage';
import Footer from './components/Footer';

const App = () => {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<Notfoundpage />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
};

export default App;
