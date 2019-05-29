import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="Step">
      <h1>Welcome to SKALER!</h1>
      <h6>
        A graphical display of a musical scale on a guitar fretboard.
      </h6>
      <h6>
        SKALER is designed to help musicians learn
        and practice scales on their stringed instruments (guitar, bass, ukelele, etc).
      This tutorial aims to give a quick overview of musical concepts, guitar basics, and how SKALER can be used to maximize learning.</h6>
      <div>
        <Link to="/fretboard">
          <button className="User-Button">Enter Site</button>
        </Link>
        <Link to="/tutorial/fretboard">
          <button className="User-Button">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
