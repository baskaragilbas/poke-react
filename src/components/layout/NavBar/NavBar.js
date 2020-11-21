import React from 'react';
import {HashRouter as Router, Link} from 'react-router-dom'

// import styles from './NavBar.module.css';

function NavBar() {
  return (
    <Router>
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <Link as="Link" class="navbar-brand" to ='/'>
        Pokemon
        </Link>
        <Link as="Link" class="navbar-brand" to ='/pokebox'>
        Pokebox
        </Link>
      </nav>
    </div>
    </Router>
  )
};

export default NavBar;
