import React from 'react';
import '../styles/styles.css';

const Footer = () => {
  return (
    <div id="footer">
        <h3>Find me on other platforms:</h3>
      <div className="social-icons">
        <a href="https://github.com/BorzoiBurrow" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/bradley-reeser-834681252/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
