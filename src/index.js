import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import App from './App';
import Footer from './components/Footer';
import BtnUp from './components/BtnUp';
import Preloader from './components/Preloader';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
