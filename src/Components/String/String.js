import React from "react";

function String({ numOfFrets, index, coordinates, selectNote, selectedNote }) {
  const noteCoords = coordinates[index].notes;
  const [openArray] = noteCoords.filter(val => val.coordOne === 0);
  return (
    <div className="String">
      {Array.apply(null, { length: +numOfFrets + 1 }).map((val, i) => {
        return i === 0 ? (
          <div
            style={
              openArray && openArray.note == selectedNote ? { background: "orange" } : null
            }
            className={!openArray ? "Open" : "Open Open-Note"}
            onMouseEnter={() => openArray && selectNote(openArray.note)}
            onMouseLeave={() => openArray && selectNote("")}
          />
        ) : (
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
