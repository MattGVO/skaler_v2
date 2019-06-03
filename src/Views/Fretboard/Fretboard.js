import React, { useState, useEffect, useReducer } from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";
import {
  initialTuning,
  noteNames,
  scaleNames,
  stringNums,
  fretNums,
  notLoggedIn
} from "../../constants";
import { saveTuning, updateTuning, deleteTuning } from "../../Utils/tuning";
import { tuningReducer, getCoords } from "../../Utils/fret";
import String from "../../Components/String/String";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/reducer";
import UserSelect from "../../Components/UserSelect/UserSelect";

function Fretboard({ userId, userTunings, updateUser }) {
  const [tuning, dispatch] = useReducer(tuningReducer, initialTuning);
  const [rootNote, setRootNote] = useState("C");
  const [scale, setScale] = useState("Major");
  const [numOfStrings, setStrings] = useState("6");
  const [numOfFrets, setFrets] = useState("22");
  const [coordinates, setCoords] = useState(getCoords(rootNote, tuning, scale));
  const [selectedNote, selectNote] = useState("");
  const [selectedTuning, selectTuning] = useState("");
  const [saveBool, toggleSave] = useState(false);
  const [newTuning, setNewTuning] = useState("");
  const [updateBool, toggleUpdate] = useState(false);
  const [deleteBool, toggleDelete] = useState(false);

  useEffect(() => {
    setCoords(getCoords(rootNote, tuning, scale));
  }, [scale, rootNote, tuning]);

  useEffect(() => {
    let newTuning = {};
    selectedTuning
      ? userTunings
          .filter(val => val.tuning_name === selectedTuning)[0]
          .notes.split(",")
          .forEach((el, i) => {
            newTuning[i + 1] = el;
          })
      : (newTuning = { ...initialTuning });
    selectedTuning && dispatch({ type: "SELECT_TUNING", payload: newTuning });
  }, [selectedTuning]);

  return (
    <div>
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
      <UserSelect>
        {!userId && (
          <div className="Not-Logged-In">
            <h3>Login To Save Custom Tunings</h3>
          </div>
        )}
        {userId && !saveBool && !updateBool && !deleteBool && (
          <div>
            <Dropdown
              item={selectedTuning}
              tuning={true}
              onChange={selectTuning}
              items={
                userId ? userTunings.map(val => val.tuning_name) : notLoggedIn
              }
            />
            <button onClick={() => toggleSave(true)} className="User-Button">
              Save
            </button>
            <button
              onClick={() => {
                selectedTuning && toggleUpdate(true);
                setNewTuning(selectedTuning);
              }}
              className={selectedTuning ? "User-Button" : "Disabled"}
            >
              Edit
            </button>
            <button
              onClick={() => (selectedTuning ? toggleDelete(true) : null)}
              className={selectedTuning ? "User-Button" : "Disabled"}
            >
              Delete
            </button>
          </div>
        )}
        {saveBool && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Tuning Name..."
              onChange={e => setNewTuning(e.target.value)}
            />
            {Array.apply(null, { length: +numOfStrings }).map((val, i) => (
              <Dropdown
                item={tuning[i + 1]}
                items={noteNames}
                onChange={e => dispatch({ type: i + 1, payload: e })}
              />
            ))}
            <button
              className="User-Button"
              onClick={() => {
                saveTuning(newTuning, tuning, updateUser);
                toggleSave(!saveBool);
                setNewTuning("");
              }}
            >
              Save
            </button>
            <button
              className="User-Button"
              onClick={() => {
                setNewTuning("");
                toggleSave(!saveBool);
              }}
            >
              Cancel
            </button>
          </div>
        )}
        {updateBool && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Tuning Name..."
              onChange={e => setNewTuning(e.target.value)}
              value={newTuning}
            />
            {Array.apply(null, { length: +numOfStrings }).map((val, i) => (
              <Dropdown
                item={tuning[i + 1]}
                items={noteNames}
                onChange={e => dispatch({ type: i + 1, payload: e })}
              />
            ))}
            <button
              className="User-Button"
              onClick={async () => {
                await updateTuning(newTuning, selectedTuning, tuning, updateUser);
                selectTuning("");
                toggleUpdate(false);
                setNewTuning("");
              }}
            >
              Update
            </button>
            <button
              className="User-Button"
              onClick={() => {
                setNewTuning("");
                toggleUpdate(false);
              }}
            >
              Cancel
            </button>
          </div>
        )}
        {deleteBool && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Are You Sure You Want To Delete {selectedTuning} ?</h3>
            <button
              className="User-Button"
              onClick={() => {
                deleteTuning(selectedTuning, updateUser);
                selectTuning("");
                toggleDelete(false);
              }}
            >
              Confirm
            </button>
            <button className="User-Button" onClick={() => toggleDelete(false)}>
              Cancel
            </button>
          </div>
        )}
      </UserSelect>
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
      <div className="Flip">
                <h1>This app is designed for a wider screen.</h1>
                <h1>Rotate your device to the side and enjoy!</h1>
                <div className="Flip-Demo">
                    <i className="fas fa-mobile-alt"></i>
                    <i className="fas fa-arrow-right"></i>
                    <i className="Side fas fa-mobile-alt"></i>
                </div>
            </div>
    </div>
    
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { updateUser }
)(Fretboard);
