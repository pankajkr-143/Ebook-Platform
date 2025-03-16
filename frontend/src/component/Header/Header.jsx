import React, { useState } from 'react';
import './Header.css';
import { assets } from '../../image/assets';

function Header({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <h1>BookByRent</h1>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <a href='#home' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</a>
        <a href='#footer-section' onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>Contact</a>
        <a href='#footer-section' onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""}>About</a>
        <li onClick={()=>setShowLogin(true)} className={menu === "Sign up" ? "active" : ""}>Sign up</li>
      </ul>
      <div className='navbar-right'>
        <div className="search-bar">
          <div className='search-bar-input'>
            <input type="text" placeholder='Which book are you looking for?' />
            <img src={assets.Search} alt="Search Icon" />
          </div>
        </div>
        <img src={assets.heart} alt="Favorite" />
        <img src={assets.cartBox} alt="Cart" />
      </div>
    </div>
  );
}

export default Header;
