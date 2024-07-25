import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const curtains = document.querySelectorAll('.curtain');
    curtains.forEach(curtain => curtain.classList.add('open'));
  }, []);

  return (
    <div className="header-container">
      <div className="curtain curtain-left"></div>
      <div className="curtain curtain-right"></div>
      <div className="header-main">
        <div className="header-content">
          <div className="header-top">
            <div className="top-title">
              <p><span>EventHub:</span> Where Every Event Becomes an Adventure</p>
            </div>
            <div className="top-tagline">
              <p>Discover, Explore, and Enjoy the Best Events Across the State – <br />
              From Movies and Stand-up Comedy to Theater and More, All in One Place!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
