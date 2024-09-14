import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="Alexey_Kovalenko.jpg"
          alt="Profile"
          className="navbar-profile-pic"
        />
      </div>

      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        {/* Hamburger button */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          {!isOpen ? (
            <>
              <span className="navbar-hamburger"></span>
              <span className="navbar-hamburger"></span>
              <span className="navbar-hamburger"></span>
            </>
          ) : (
            <span style={{ fontSize: '30px' }}>
              &#10005; {/* X icon when menu is open */}
            </span>
          )}
        </button>

        {/* Menu items that will be toggled */}
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li>Home</li>
          <li>Profile</li>
          <li>Experience</li>
          <li>Education</li>
          <li>Skills</li>
        </ul>

        {/* Contact button stays visible */}
        {!isOpen && (
          <button className="navbar-contact-btn">
            Contact Me
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;