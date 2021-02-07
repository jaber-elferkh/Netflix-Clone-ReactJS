import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

function Navbar() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <div className={`navbar ${show && 'navbar__black'}`}>
      <div className="navbar__content">
        <img
          onClick={() => history.push('/')}
          className="navbar__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push('/profile')}
          className="navbar__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
