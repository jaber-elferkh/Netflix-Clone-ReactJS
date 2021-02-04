import React from 'react';
import './styles.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <img
          className="navbar__logo"
          src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024"
          alt=""
        />
        <img
          className="navbar__logo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
