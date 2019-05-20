import React, { useState, useEffect, useReducer } from "react";
import Dropdown from "../Dropdown/Dropdown";
import {
  initialTuning,
  noteNames,
  scaleNames,
  stringNums,
  fretNums,
  notLoggedIn
} from "../../constants";
import { tuningReducer, getCoords } from "../../utils";
import String from "../String/String";
import { connect } from 'react-redux';


function Fretboard({userId,userTunings}) {
  const [tuning, dispatch] = useReducer(tuningReducer, initialTuning);
  const [rootNote, setRootNote] = useState("C");
  const [scale, setScale] = useState("Major");
  const [numOfStrings, setStrings] = useState("6");
  const [numOfFrets, setFrets] = useState("22");
  const [coordinates, setCoords] = useState(getCoords(rootNote, tuning, scale));
  const [selectedNote, selectNote] = useState("");
  const [selectedTuning, selectTuning] = useState("")

  
  useEffect(() => {
    setCoords(getCoords(rootNote, tuning, scale));
  }, [scale, rootNote, tuning]);
  
  useEffect(() =>{
    let newTuning ={}
    selectedTuning ?
      userTunings
      .filter(val => (
        val.tuning_name === selectedTuning)
      )[0].notes
      .split(",").forEach((el,i) => {
        newTuning[i +1] = el
      }) : newTuning = {...initialTuning}
    dispatch({type: "SELECT_TUNING", payload: newTuning})
  },[selectedTuning])
  

  return (
    <div className="Fretboard">
      <div className="Selectors">
        <div className="Selector">
          <h3>Scale:</h3>
          <Dropdown item={rootNote} items={noteNames} onChange={setRootNote} />
          <Dropdown item={scale} items={scaleNames} onChange={setScale} />
        </div>
        <div className="Selector">
          <h3># of Strings:</h3>
          <Dropdown
            item={numOfStrings}
            items={stringNums}
            onChange={setStrings}
          />
        </div>
        <div className="Selector">
          <h3># of Frets:</h3>
          <Dropdown item={numOfFrets} items={fretNums} onChange={setFrets} />
        </div>
      </div>

      <div className="User-Selectors">
        <Dropdown disabled={!userId && true} tuning={!userId && true} onChange={selectTuning} items={userId?  userTunings.map(val => val.tuning_name): notLoggedIn}/>
        <button className={userId ? "User-Button" : "Disabled"}>Save</button>
        <button className={userId ? "User-Button" : "Disabled"}>Edit</button>
        <button className={userId ? "User-Button" : "Disabled"}>Delete</button>
      </div>

      <div className="Strings">
        {Array.apply(null, { length: +numOfStrings }).map((val, i) => {
          return (
            <div className="String-Container" key={i}>
              <Dropdown
                item={tuning[i + 1]}
                items={noteNames}
                onChange={e => dispatch({ type: i + 1, payload: e })}
              />
              <String
                selectNote={selectNote}
                selectedNote={selectedNote}
                numOfFrets={numOfFrets}
                index={i}
                coordinates={coordinates}
              />
            </div>
          );
        })}
      </div>
      <div className="Scale">
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
            onMouseEnter={() => selectNote(val.note)}
            onMouseLeave={() => selectNote("")}
          >
            <h3>{val.note}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return state
}


export default connect(mapStateToProps)(Fretboard);
