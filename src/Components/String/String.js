import React from "react";
import Note from "../Note/Note";

function String({ numOfFrets, index, coordinates, selectNote, selectedNote }) {
  const noteCoords = coordinates[index].notes;
  return (
    <div className="String">
      {Array.apply(null, { length: +numOfFrets + 1 }).map((val, i) => {
        return (
          <div key={i} className="Fret">
            {noteCoords.map(
              (val, j) =>
                val.coordOne === i && (
                  <div
                    key={j}
                    title={val.name}
                    className={val.note === selectedNote ? "Active Dot" : "Dot"}
                    onMouseEnter={() => selectNote(val.note)}
                    onMouseLeave={() => selectNote("")}
                  >
                    {val.note === selectedNote && <p>{val.note}</p>}
                  </div>
                )
            )}
            {noteCoords.map(
              (val, j) =>
                val.coordTwo === i && (
                  <div
                    key={j}
                    title={val.name}
                    className={val.note === selectedNote ? "Active Dot" : "Dot"}
                    onMouseEnter={() => selectNote(val.note)}
                    onMouseLeave={() => selectNote("")}
                  >
                    {val.note === selectedNote && <p>{val.note}</p>}
                  </div>
                )
            )}
            {noteCoords.map(
              (val, j) =>
                val.coordOne === 0 &&
                i === 24 && (
                  <div
                    key={j}
                    title={val.name}
                    className={val.note === selectedNote ? "Active Dot" : "Dot"}
                    onMouseEnter={() => selectNote(val.note)}
                    onMouseLeave={() => selectNote("")}
                  >
                    {val.note === selectedNote && <p>{val.note}</p>}
                  </div>
                )
            )}
            {!index && <p className="Fret-Num">{i}</p>}
          </div>
        );
      })}
    </div>
  );
}

export default String;
