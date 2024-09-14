import React, { useState } from 'react';
import './Navbar.css'; // Your Navbar CSS file

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
          <li><a href="#">Home</a></li>
          <li><a href="#personal-profile">Profile</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>

        {/* Contact button */}
        {!isOpen && (
          <button className="navbar-contact-btn">
                <a href="mailto:2000ako@gmail.com" className="email-btn"> Contact Me</a>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;