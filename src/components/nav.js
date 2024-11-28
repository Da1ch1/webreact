import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  return (
    <nav style={{ textAlign: 'center' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li className={active === '/' ? 'active' : ''}>
          <Link 
            to="/" 
            onClick={() => setActive('/')} 
            style={{ fontWeight: 'bold', color: active === '/' ? 'red' : 'black' }}>
            Inicio
          </Link>
        </li>
        <li className={active === '/categoria' ? 'active' : ''}>
          <Link 
            to="/categoria" 
            onClick={() => setActive('/categoria')} 
            style={{ fontWeight: 'bold', color: active === '/categoria' ? 'red' : 'black' }}>
            Categoria
          </Link>
        </li>
        <li className={active === '/nosotros' ? 'active' : ''}>
          <Link 
            to="/nosotros" 
            onClick={() => setActive('/nosotros')} 
            style={{ fontWeight: 'bold', color: active === '/nosotros' ? 'red' : 'black' }}>
            Nosotros
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
