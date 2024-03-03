import React, { useState } from 'react';
import '../styles/styles.css';

const Header = () => {
  const [activeButton, setActiveButton] = useState('About me');

  const handleButtonClick = (btnText) => {
    setActiveButton(btnText);
  };
  return (
    <header className="header">
      <h1>Bradley Reeser Portfolio</h1>
      <nav>
        <ul>
          <li
            className={activeButton === 'About me' ? 'active' : ''}
            onClick={() => handleButtonClick('About me')}
          >About me
          </li>
          <li
            className={activeButton === 'Portfolio' ? 'active' : ''}
            onClick={() => handleButtonClick('Portfolio')} 
            >Portfolio
          </li>
          <li
            className={activeButton === 'Contact' ? 'active' : ''}
            onClick={() => handleButtonClick('Contact')}
          >Contact
          </li>
          <li
            className={activeButton === 'Resume' ? 'active' : ''}
            onClick={() => handleButtonClick('Resume')}
          >Resume
          </li>
        </ul>
        <h2>To get started, choose an option above.</h2>
      </nav>
    </header>
  );
};

export default Header;
