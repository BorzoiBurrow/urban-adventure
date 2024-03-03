import React, { useState } from 'react';
import '../styles/styles.css';

// Importing React components.
import About from './about'; 
import Contact from './contact';
import Portfolio from './portfolio';
import Resume from './resume';
// header will control the currently rendered elements beneath itself. 
const Header = () => {
  const [activeButton, setActiveButton] = useState('About me');
  const [content, setContent] = useState(null);

  const handleButtonClick = (btnText) => {
    setActiveButton(btnText);

    switch (btnText) {
      case 'About me':
        setContent(<About />);
        break;
      case 'Portfolio':
        setContent(<Portfolio />);
        break;
      case 'Contact':
        setContent(<Contact />);
        break;
      case 'Resume':
        setContent(<Resume />);
        break;
    }
  };

  const renderContent = () => {
    return content;
  };

  return (
    <div>
      <header className="header">
        <h1>Bradley Reeser Portfolio</h1>
        <nav>
          <ul>
            <li
              className={activeButton === 'About me' ? 'active' : ''}
              onClick={() => handleButtonClick('About me')}
            >
              About me
            </li>
            <li
              className={activeButton === 'Portfolio' ? 'active' : ''}
              onClick={() => handleButtonClick('Portfolio')}
            >
              Portfolio
            </li>
            <li
              className={activeButton === 'Contact' ? 'active' : ''}
              onClick={() => handleButtonClick('Contact')}
            >
              Contact
            </li>
            <li
              className={activeButton === 'Resume' ? 'active' : ''}
              onClick={() => handleButtonClick('Resume')}
            >
              Resume
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default Header;




