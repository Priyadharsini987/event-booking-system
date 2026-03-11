import React from 'react';
import '../styles/Components.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      EAGLE <span><span style={{ color: 'var(--eagle-gold)' }}>ENTERTAINMENT</span> 🦅</span>
    </div>
    <div className="nav-links">
      <a href="#services">EXPERTISE</a>
      <a href="#about">CEO</a>
      <a href="#book" className="book-link">BOOK NOW</a>
    </div>
  </nav>
);

export default Navbar;
