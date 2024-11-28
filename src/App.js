import './nav.css';
import './styles.css';
import './tailwind.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Nav from './components/nav';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Catalogo from './components/Catalogo';

function App() {
  return (
    <div>
      <div className='body'>
        <Nav />
      </div>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/categoria' element={<Catalogo />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;