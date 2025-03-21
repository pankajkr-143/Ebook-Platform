import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import './Header.css';
import { assets } from '../../image/assets';

function Header({cartAllProduct}) {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useAuth();
  const [menu, setMenu] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const isLoggedIn = !!user;
  // Define this variable or get it from your auth context/store

  const handleLinkClick = () => setMobileMenuOpen(false);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const heartRedirect = () => {
    navigate("/heartPage");
  };

  const cartRedirect = () => {
    navigate("/cartBoxPage");
  };

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
    console.log("user:", user);
  }, [isLoggedIn, user]);

  return (
    <div className='navbar'>
      <h1>BookByRent</h1>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          <Link to="/">
            Home
          </Link>
        </li>
        <li
          onClick={() => setMenu("Contact")}
          className={menu === "Contact" ? "active" : ""}
        >
          <Link to="/">
            Contact
          </Link>
        </li>
        <li
          onClick={() => setMenu("About")}
          className={menu === "About" ? "active" : ""}
        >
          <Link to="/" >
            About
          </Link>
        </li>
      </ul>

      {isLoggedIn ? (
        <div >
          <button
            onClick={toggleDropdown}
          >
            {user ? user.fullname.firstname : "Loading..."}
          </button>
          {isDropdownOpen && (
            <div >
              <Link
                to="/logout"
                onClick={handleLinkClick}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      ) : (
        <>
          <Link to="/login" onClick={handleLinkClick}>
            Login
          </Link>
          <Link to="/signup" onClick={handleLinkClick}>
            Signup
          </Link>
        </>
      )}

      <div className='navbar-right'>
        <div className="search-bar">
          <div className='search-bar-input'>
            <input type="text" placeholder='Which book are you looking for?' />
            <img src={assets.Search} alt="Search Icon" />
          </div>
        </div>

        <button onClick={heartRedirect}>
          <img src={assets.heart} alt="Favorite" />
          <span className='text-decoratin-none py-1 px-2 rounded-pill' style={{backgroundColor:'orange'}}>
            {/* {cartAllProduct.length} */}
            {cartAllProduct?.length}  
          </span>
        </button>
        <button onClick={cartRedirect}>
          <img src={assets.cartBox} alt="Cart" />
          <span className='text-decoration-none py-1 px-2 rounded-pill' style={{backgroundColor:'orange'}}>
            {/* {cartAllProduct.length} */}
            {cartAllProduct?.length}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
