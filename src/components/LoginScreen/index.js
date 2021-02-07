import React, { useState } from 'react';
import SignInScreen from '../SignInScreen';
import './styles.css';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient"></div>

        <div className="loginScreen__body">
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <h1>Unlimited films, programmes and more.</h1>
              <h2>Watch anywhere. Cancel at anytime</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>

              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Adress" />
                  <button className="LoginScreen__getStarted">
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
