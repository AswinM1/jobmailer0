import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const { theme, ToggleTheme } = useContext(ThemeContext); // Access theme and ToggleTheme from context

  return (
    <div className={`navbar-container ${theme}`}>
      <div className={`navbar-inner ${theme}`}>
        {/* Logo aligned to the left */}
        <p className="navbar-logo">Jobmailer.io</p>
        {/* Buttons aligned to the right */}
        <div className="navbar-buttons">
          <p className="generate-email-btn">Generate Emails</p>
          <p
            onClick={ToggleTheme}
            className={`theme-toggle-btn ${theme}`}
          >
            {theme === 'light' ? 'light' : 'dark'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
