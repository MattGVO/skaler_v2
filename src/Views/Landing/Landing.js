import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../DarkLogo.svg'

function Landing() {
  return (
    <div className="Landing">
      <h1>SKALER</h1>
      <img src={Logo} alt="Logo" />
      <h3>Music For The Visual Learner</h3>
      <div>
          <Link to="/tutorial/welcome">
            <button className="User-Button">Tutorial</button>
          </Link>
        <Link to="/fretboard">
          <button className="User-Button">Enter Site</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
