import React from "react";
import { Link } from "react-router-dom";

function Selectors() {
  return (
    <div className="Step">
      <Link to="/tutorial/scales-and-notes">
        <i class="fas fa-arrow-left" />
      </Link>
      <h1>Selectors</h1>
      <h6>
        To make SKALER complete it has dropdown boxes to select the scale,
        number of strings, and number of frets to display. Instead of displaying
        them here, it's time to try SKALER now!
      </h6>
      <Link to="/fretboard">
        <button className="User-Button Big">Enter Site</button>
      </Link>
    </div>
  );
}

export default Selectors;
