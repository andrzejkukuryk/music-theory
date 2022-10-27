export const diatonic = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const sharped = ['C#', 'D#', 'F#', 'G#', 'A#'];
export const flated = ['Db', 'Eb', 'Gb', 'Ab', 'Bb'];

export let scale = [...diatonic];
export let range = [...scale, scale[0]];
export let ingredients = [];
export let sharps = [];
export let flats = [];
let allIngredients = [];
let sharpsCounter = 0;
let flatsCounter = 0;

export const TYPE_MAJOR = "major";
export const TYPE_MINOR = "minor";
export const TYPE_DIMINISHED = "diminished";
export const TYPE_AUGMENTED = "augmented";
export const TYPE_SUSPENDEDTWO = "suspended2";
export const TYPE_SUSPENDEDFOUR = "suspended4";
export const TYPE_SCALE = "scale";
export const TYPE_CHORD = "chord";
export const TYPE_NOTE = "note";
export const TYPE_SHARPED = "sharped";
export const TYPE_FLATED = "flated";
export const TYPE_NONE = "none";
export const TYPE_7TH = "7";
export const TYPE_9TH = "9";
export const TYPE_ADD9 = "add9";

export const resetScale = () => {
  scale = [...diatonic];
};

export const circleOfFifths = (prime, entryModus, type, chordAdditional) => {
  const ifScale = type === TYPE_SCALE;
  const ifChord = type === TYPE_CHORD;
  let scaleModus = 0; /* 0 = major, 5 = minor */

  switch (entryModus) {
    case TYPE_MAJOR:
    case TYPE_AUGMENTED:
      scaleModus = 0;
      break;
    case TYPE_MINOR:
    case TYPE_DIMINISHED:
    case TYPE_SUSPENDEDFOUR:
    case TYPE_SUSPENDEDTWO:
      scaleModus = 5;
      break;
    default:
      scaleModus = 0;
  }

  let scalePrime = ifScale ? "" : prime;

  const setScalePrime = (orgPrime) => {
    switch (orgPrime) {
      case "C#":
      case "Db":
        scalePrime = entryModus === TYPE_MAJOR ? "Db" : "C#";
        break;
      case "D#":
      case "Eb":
        scalePrime = "Eb";
        break;
      case "F#":
      case "Gb":
        scalePrime = entryModus === TYPE_MAJOR ? "Gb" : "F#";
        break;
      case "G#":
      case "Ab":
        scalePrime = entryModus === TYPE_MAJOR ? "Ab" : "G#";
        break;
      case "A#":
      case "Bb":
        scalePrime = "Bb";
        break;
      default:
        scalePrime = orgPrime;
    }
  };

  sharpsCounter = 0;
  flatsCounter = 0;

  const stepFwd = () => {
    scale.push(...scale.splice(0, 4));
    scale[6] += "#";
    sharps.push(scale[6]);
    sharpsCounter++;
  };
  const stepBwd = () => {
    scale.unshift(...scale.splice(3));
    scale[3] += "b";
    flats.push(scale[3]);
    flatsCounter++;
  };

  const runCircle = () => {
    resetScale();
    sharpsCounter = 0;
    sharps = [];
    flats = [];
    while (scalePrime !== scale[scaleModus] && sharpsCounter < 11) {
      stepFwd();
    }
    if (sharpsCounter === 11) {
      resetScale();
      sharps = [];
      while (scalePrime !== scale[scaleModus] && flatsCounter < 11) {
        stepBwd();
      }
    }
  };

  const createIngredients = () => {
    allIngredients = [];
    let octave = 1;
    const primeToNone = [...range, range[1]];
    const setOctaves = (toneToCheck) => {
      if (toneToCheck[0] === "B") {
        octave++;
        return toneToCheck + (octave - 1);
      } else {
        return toneToCheck + octave;
      }
    };
    primeToNone
      .map((tone) => setOctaves(tone))
      .map((nameToLowerCase) => nameToLowerCase.toLowerCase())
      .map((ingr) => allIngredients.push(ingr));
  };

  const buildChord = () => {
    const buildMajor = () => {
      ingredients = [allIngredients[0], allIngredients[2], allIngredients[4]];
    };
    const buildMinor = () => {
      ingredients = [allIngredients[0], allIngredients[2], allIngredients[4]];
    };
    const buildAugmented = () => {
      let fifthAug = "";
      if (allIngredients[4].length === 2) {
        fifthAug = `${allIngredients[4][0]}#${allIngredients[4][1]}`;
      } else {
        allIngredients[4][1] === "b"
          ? (fifthAug = `${allIngredients[4][0]}${allIngredients[4][2]}`)
          : (fifthAug = `${allIngredients[4][0]}${allIngredients[4][1]}#${allIngredients[4][2]}`);
      }
      ingredients = [allIngredients[0], allIngredients[2], fifthAug];
    };
    const buildDiminished = () => {
      let fifthDim = "";
      if (allIngredients[4].length === 2) {
        fifthDim = `${allIngredients[4][0]}b${allIngredients[4][1]}`;
      } else {
        allIngredients[4][1] === "#"
          ? (fifthDim = `${allIngredients[4][0]}${allIngredients[4][2]}`)
          : (fifthDim = `${allIngredients[4][0]}${allIngredients[4][1]}b${allIngredients[4][2]}`);
      }
      ingredients = [allIngredients[0], allIngredients[2], fifthDim];
    };
    const buildSus2 = () => {
      ingredients = [allIngredients[0], allIngredients[1], allIngredients[4]];
    };
    const buildSus4 = () => {
      ingredients = [allIngredients[0], allIngredients[3], allIngredients[4]];
    };
    switch (entryModus) {
      case TYPE_MAJOR:
        buildMajor();
        break;
      case TYPE_MINOR:
        buildMinor();
        break;
      case TYPE_AUGMENTED:
        buildAugmented();
        break;
      case TYPE_DIMINISHED:
        buildDiminished();
        break;
      case TYPE_SUSPENDEDTWO:
        buildSus2();
        break;
      case TYPE_SUSPENDEDFOUR:
        buildSus4();
        break;
      default:
        buildMinor();
        break;
    }
    const additionalClean = () => {
      if (ingredients.length > 3) {
        ingredients.splice(3, ingredients.length - 3);
      }
    };
    const additional7 = () => {
      additionalClean();
      let seventh = allIngredients[6];
      if (entryModus === TYPE_MAJOR || entryModus === TYPE_AUGMENTED) {
        if (allIngredients[0].length === 2 && allIngredients[6].length === 2) {
          seventh = `${allIngredients[6][0]}b${allIngredients[6][1]}`;
        } else if (
          allIngredients[0].length === 2 &&
          allIngredients[6].length === 3
        ) {
          seventh = `${allIngredients[6][0]}${allIngredients[6][2]}`;
        } else if (
          allIngredients[0][1] === "#" &&
          allIngredients[6].length === 3
        ) {
          seventh = `${allIngredients[6][0]}${allIngredients[6][2]}`;
        } else if (
          allIngredients[0][1] === "#" &&
          allIngredients[6].length === 4
        ) {
          seventh = `${allIngredients[6][0]}${allIngredients[6][2]}${allIngredients[6][3]}`;
        } else if (
          allIngredients[0][1] === "b" &&
          allIngredients[6].length === 2
        ) {
          seventh = `${allIngredients[6][0]}b${allIngredients[6][1]}`;
        }
      }
      ingredients.push(seventh);
    };
    const additional9 = () => {
      additionalClean();
      additional7();
      ingredients.push(allIngredients[8]);
    };
    const additionalAdd9 = () => {
      additionalClean();
      ingredients.push(allIngredients[8]);
    };
    switch (chordAdditional) {
      case TYPE_NONE:
        additionalClean();
        break;
      case TYPE_7TH:
        additional7();
        break;
      case TYPE_9TH:
        additional9();
        break;
      case TYPE_ADD9:
        additionalAdd9();
        break;
      default:
        additionalClean();
    }
  };

  const setRange = () => {
    switch (entryModus) {
      case TYPE_MAJOR:
      case TYPE_AUGMENTED:
        range = [...scale, scale[0]];
        break;
      case TYPE_MINOR:
      case TYPE_DIMINISHED:
      case TYPE_SUSPENDEDFOUR:
      case TYPE_SUSPENDEDTWO:
        range = [...scale.slice(5), ...scale.slice(0, 6)];
        break;
      default:
        range = [...scale, scale[0]];
    }
  };

  if (ifScale) {
    setScalePrime(prime);
  }
  runCircle();
  setRange();
  if (ifChord) {
    createIngredients();
    buildChord();
  }
};