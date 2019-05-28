import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../DarkLogo.svg'

function Landing() {
  return (
    <div className="Landing">
      <h1>SKALER</h1>
      <img src={Logo} alt="Logo" style={{height: "10rem"}}/>
      <h3>Music For The Visual Learner</h3>
      <div>
        <button className="User-Button">Tutorial</button>
        <Link to="/fretboard">
          <button className="User-Button">Enter Site</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
