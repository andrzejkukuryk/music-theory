export const diatonic = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const sharped = ['C#', 'D#', 'F#', 'G#', 'A#'];
export const flated = ['Db', 'Eb', 'Gb', 'Ab', 'Bb'];

export let scale = [...diatonic];
export let range = [...scale, scale[0]];
export let sharps = [];
export let flats = [];
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

export const resetScale = () => {
  scale = [...diatonic];
};

export const circleOfFifths = (prime, entryModus, type) => {
  const ifScale = type === TYPE_SCALE;
  let scaleModus = 0; /* 0 = major, 5 = minor */
  entryModus === TYPE_MAJOR ? (scaleModus = 0) : (scaleModus = 5);

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

  const setRange = () => {
    entryModus === TYPE_MAJOR
      ? (range = [...scale, scale[0]])
      : (range = [...scale.slice(5), ...scale.slice(0, 6)]);
  };
  if (ifScale) {
    setScalePrime(prime);
  }
  runCircle();
  setRange();
};