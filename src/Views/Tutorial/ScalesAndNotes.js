import React, { useState, useEffect, useRef } from "react";
import { getCoords } from "../../Utils/fret";
import { initialTuning } from "../../constants";
import String from "../../Components/String/String";
import { Link } from "react-router-dom";

function ScalesAndNotes() {
  const [tuning] = useState(initialTuning);
  const [rootNote] = useState("C");
  const [scale] = useState("Major");
  const [numOfStrings] = useState("4");
  const [numOfFrets] = useState("12");
  const [coordinates] = useState(getCoords(rootNote, tuning, scale));
  const [selectedNote, selectNote] = useState(coordinates[0].notes[0].note);
  const [index, setIndex] = useState(0);
  const [autoChange, toggleAuto] = useState(true);
  console.log(autoChange)

  useInterval(() => {
    autoChange && index < 7 
        ? setIndex(index + 1) 
        : setIndex(0);
    autoChange && index < 7
      ? selectNote(coordinates[0].notes[index].note)
      : selectNote(coordinates[0].notes[0].note);
  }, autoChange ? 1500: null)

  async function setNoteAndToggle(newNote) {
    selectNote(newNote);
    toggleAuto(!autoChange);
  }

  return (
    <div className="Step">
      <h1>Scales & Notes</h1>
      <h6>
        Below is a C Major Scale on a fretboard. As a note is selected it will
        be highlighted. To select a note, hover
        the cursor over it.
      </h6>
      <h6>Give it a try!</h6>
      <div className="Strings">
        {Array.apply(null, { length: +numOfStrings }).map((val, i) => {
          return (
            <div className="String-Container" key={i}>
              <div className="String-Note">{tuning[i + 1]}</div>
              <String
                selectNote={setNoteAndToggle}
                selectedNote={selectedNote}
                numOfFrets={numOfFrets}
                index={i}
                coordinates={coordinates}
              />
            </div>
          );
        })}
      </div>
      <div
        className="Scale"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <h3>
          {rootNote} {scale}:
        </h3>
        {coordinates[0].notes.map((val, i) => (
          <div
            className={
              val.note === selectedNote
                ? "Scale-Note Selected-Note"
                : "Scale-Note"
            }
            key={i}
            onMouseEnter={() => setNoteAndToggle(val.note)}
            onMouseLeave={() => setNoteAndToggle("")}
          >
            <h3>{val.note}</h3>
          </div>
        ))}
      </div>
      <div>
        <Link to="/fretboard">
          <button className="User-Button">Enter Site</button>
        </Link>
        <Link to="/tutorial/step1">
          <button className="User-Button">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default ScalesAndNotes;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
