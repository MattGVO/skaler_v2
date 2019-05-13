import React, { useState, useEffect, useReducer } from "react";
import Dropdown from "../Dropdown/Dropdown";
import {
  initialTuning,
  noteNames,
  scaleNames,
  stringNums,
  fretNums
} from "../../constants";
import { tuningReducer, getCoords } from '../../utils'
import String from "../String/String";

function Fretboard() {
  const [tuning, dispatch] = useReducer(tuningReducer, initialTuning);
  const [rootNote, setRootNote] = useState("A");
  const [scale, setScale] = useState("Major");
  const [numOfStrings, setStrings] = useState("8");
  const [numOfFrets, setFrets] = useState("24");
  const [coordinates, setCoords] = useState(getCoords(rootNote,tuning,scale));


  useEffect(() => {
    setCoords(getCoords(rootNote,tuning,scale));
  }, [scale, rootNote, tuning]);

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
     
      <div className="Strings">
        {Array.apply(null, { length: +numOfStrings }).map((val, i) => {
          return (
              <div className="String-Container" key={i}>
                <Dropdown
                    item={tuning[i + 1]}
                    items={noteNames}
                    onChange={e => dispatch({ type: i + 1, payload: e })}
                />
                <String numOfFrets={numOfFrets} index={i} coordinates={coordinates}/>
              </div>
            
          );
        })}
      </div>
        <div className="Scale">
            <h3>{rootNote} {scale}: </h3>
            {coordinates[0].notes.map((val,i) => <h3 key={i}>{val.note}</h3>)}
        </div>
    </div>
  );
}

export default Fretboard;
