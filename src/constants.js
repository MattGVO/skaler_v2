// export const allNotes = {
//     1: "A",
//     "A":1,
//     "A♯/B♭":2,
//     2:"A♯/B♭",
//     "B":3,
//     3:"B",
//     "C":4,
//     4:"C",
//     "C♯/D♭":5,
//     5:"C♯/D♭",
//     "D":6,
//     6:"D",
//     "D♯/E♭":7,
//     7:"D♯/E♭",
//     "E":8,
//     8:"E",
//     "F":9,
//     9:"F",
//     "F♯/G♭":10,
//     10:"F♯/G♭",
//     "G":11,
//     11:"G",
//     "G♯/A♭":12,
//     12:"G♯/A♭",
// }

export const allNotes = {
    1: "A",
    "A":1,
    "A♯":2,
    2:"A♯",
    "B":3,
    3:"B",
    "C":4,
    4:"C",
    "C♯":5,
    5:"C♯",
    "D":6,
    6:"D",
    "D♯":7,
    7:"D♯",
    "E":8,
    8:"E",
    "F":9,
    9:"F",
    "F♯":10,
    10:"F♯",
    "G":11,
    11:"G",
    "G♯":12,
    12:"G♯",
}


  
export const scales = {
    Major:[2,2,1,2,2,2],
    Minor:[2,1,2,2,1,2],
    Dorian: [2,1,2,2,2,1],
    Phrygian:[1,2,2,2,1,2],
    Lydian:[2,2,2,1,2,2,],
    Mixolydian:[2,2,1,2,2,1],
    Locrian:[1,2,2,1,2,2],
    "Harmonic Minor":[2,1,2,2,1,3],
    "Melodic Minor":[2,1,2,2,2,],
    "Minor Pentatonic":[3,2,3,2],
    "Major Pentatonic":[2,2,3,2]
}

export const scaleNames = [
    'Major',
    'Minor',
    'Dorian',
    'Phrygian',
    'Lydian',
    'Mixolydian',
    'Locrian',
    'Harmonic Minor',
    'Melodic Minor',
    'Minor Pentatonic',
    'Major Pentatonic'
]

// export const noteNames = [
//     "A",
//     "A♯/B♭",
//     "B",
//     "C",
//     "C♯/D♭",
//     "D",
//     "D♯/E♭",
//     "E",
//     "F",
//     "F♯/G♭",
//     "G",
//     "G♯/A♭"
// ]

export const noteNames = [
    "A",
    "A♯",
    "B",
    "C",
    "C♯",
    "D",
    "D♯",
    "E",
    "F",
    "F♯",
    "G",
    "G♯"
]

export const stringNums = [1,2,3,4,5,6,7,8]

export const fretNums = [12,13,14,15,16,17,18,19,20,21,22,23,24]

export const initialTuning = {
    1: "E",
    2: "A",
    3: "D",
    4: "G",
    5: "B",
    6: "E",
    7: "A",
    8: "A"
  };

  export const notLoggedIn = ['Login to Save Presets']