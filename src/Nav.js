import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
      <nav>
          <h3>Pokedex</h3>
          <ul className="nav-links">
              <Link to ="/Mypokemon">
                <li>My Pokemon</li>
              </Link>
              <Link to ="/pokemon">
                <li> Pokemon</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;
