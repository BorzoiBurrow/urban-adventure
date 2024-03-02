import React from 'react';
import '../styles/styles.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1>Bradley Reeser Portfolio</h1>
      <nav>
        <ul>
          <li>About me</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
