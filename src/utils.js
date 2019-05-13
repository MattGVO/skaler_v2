import { allNotes, scales } from './constants'

export function tuningReducer(tuning, action) {
    switch (action.type) {
      case 1:
        return { ...tuning, 1: action.payload };
      case 2:
        return { ...tuning, 2: action.payload };
      case 3:
        return { ...tuning, 3: action.payload };
      case 4:
        return { ...tuning, 4: action.payload };
      case 5:
        return { ...tuning, 5: action.payload };
      case 6:
        return { ...tuning, 6: action.payload };
      case 7:
        return { ...tuning, 7: action.payload };
      case 8:
        return { ...tuning, 8: action.payload };
      default:
        throw new Error();
    }
  };

  export function getCoords(rootNote,tuning,scale) {
    let current = allNotes[rootNote];
    let scaleNotes = [rootNote];
    for (let i = 0, l = scales[scale].length; i < l; i++) {
      current += scales[scale][i];
      current > 12
        ? scaleNotes.push(allNotes[current - 12])
        : scaleNotes.push(allNotes[current]);
    }
    let tuningArr = [
      tuning[1],
      tuning[2],
      tuning[3],
      tuning[4],
      tuning[5],
      tuning[6],
      tuning[7],
      tuning[8]
    ];
    let coordinates = tuningArr.map(string => {
      return {
        string,
        notes: 
          scaleNotes.map(note => {
            let coord = 12 - allNotes[string] + allNotes[note];
            return {
              note,
              coordOne: coord >= 12 ? coord - 12 : coord,
              coordTwo: coord < 12 ? coord + 12 : coord
            };
          })
      };
    });
    return coordinates;
  };