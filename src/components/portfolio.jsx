import React from 'react';
import '../styles/styles.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>Click to view any of these repositories!</h2>
      <div className="image-row">
        <a href="https://github.com/BorzoiBurrow/urban-guide">
          <img src="./images/database.png" alt="Placeholder" className="portimg" />
        </a>
        <a href="https://github.com/BorzoiBurrow/turbo-spork">
          <img src="./images/commerce.png" alt="Placeholder" className="portimg" />
        </a>
        <a href="https://github.com/BorzoiBurrow/fictional-journey">
          <img src="./images/blog.png" alt="Placeholder" className="portimg" />
        </a>
      </div>
      <div className="image-row">
        <img src="Placeholder" alt="Placeholder" className="portimg" />
        <img src="Placeholder" alt="Placeholder" className="portimg" />
        <img src="Placeholder" alt="Placeholder" className="portimg" />
      </div>
    </div>
  );
}

export default Portfolio;
