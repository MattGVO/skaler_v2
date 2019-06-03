import React, { useState } from "react";
import { initialTuning } from "../../constants";
import { getCoords } from "../../Utils/fret";
import String from "../../Components/String/String";
import { Link } from "react-router-dom";

function FretboardTut() {
  const [tuning] = useState(initialTuning);
  const [rootNote] = useState("C");
  const [scale] = useState("Major");
  const [coordinates] = useState(getCoords(rootNote, tuning, scale));
  const [numOfStrings] = useState("4");
  const [numOfFrets] = useState("12");
  //
  return (
    <div className="Step F-T">
       <Link to="/tutorial/welcome">
        <i className="fas fa-arrow-left"></i>
      </Link>
      <h1>The Fretboard</h1>
      <div className="Strings">
        {Array.apply(null, { length: +numOfStrings }).map((val, i) => {
          return (
            <div className="String-Container" key={i}>
              <div className="String-Note">{tuning[i + 1]}</div>
              <String
                selectNote={note => null}
                numOfFrets={numOfFrets}
                index={i}
                coordinates={coordinates}
              />
            </div>
          );
        })}
        <div className="B-S">
          <div>
            <p>Bottom String</p>
            <p>("First String")</p>
          </div>
          <i className="fas fa-long-arrow-alt-right" />
        </div>
        <div className="F-N">
          <p>Fret Numbers</p>
          <i className="fas fa-long-arrow-alt-right" />
        </div>
      </div>
      <div className="Fret-Tut">
        <h6>
          The bottom row represents the "first" or thickest string. This is
          based off of{" "}
          <a
            href="https://en.wikipedia.org/wiki/Tablature"
            title="Tablature on Wikipedia"
          >
            tablature
          </a>{" "}
          notation. The dots on the fret boxes represent a note that can be
          played on their numbered fret. The thinner boxes represent an open string (no frets pressed down).
        </h6>
      </div>
      <div>
        <Link to="/fretboard">
          <button className="User-Button">Enter Site</button>
        </Link>
        <Link to="/tutorial/scales-and-notes">
          <button className="User-Button">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default FretboardTut;
