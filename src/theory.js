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

export const circleOfFifths = (prime, entryModus, type) => {
  const ifScale = type === TYPE_SCALE;
  const ifChord = type === TYPE_CHORD;
  let scaleModus = 0; /* 0 = major, 5 = minor */
  // entryModus === TYPE_MAJOR ? (scaleModus = 0) : (scaleModus = 5);
  console.log(entryModus);
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
      console.log(allIngredients);
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
      default:
        buildMinor();
        break;
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