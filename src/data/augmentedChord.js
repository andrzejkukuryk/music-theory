import { TYPE_7TH, TYPE_9TH, TYPE_ADD9, TYPE_NONE } from "../theory";
import { circleOfFifths } from "./circle";

export const createAugmentedChord = (prime, addition) => {
  let allIngredients = [
    ...circleOfFifths(prime),
    ...circleOfFifths(prime).slice(0, 2),
  ];

  const createAugFifth = () => {
    let aug5th = "";
    if (allIngredients[4].length === 1) {
      aug5th = `${allIngredients[4]}#`;
    } else if (allIngredients[4].length === 2) {
      if (allIngredients[4][1] === "#") {
        aug5th = `${allIngredients[4]}#`;
      } else if (allIngredients[4][1] === "b") {
        aug5th = allIngredients[4][0];
      }
    }
    allIngredients[4] = aug5th;
  };
  createAugFifth();

  const createMinor7th = () => {
    let minor7th = "";
    if (allIngredients[0].length === 1 && allIngredients[6].length === 1) {
      minor7th = `${allIngredients[6]}b`;
    }
    if (allIngredients[0].length === 1 && allIngredients[6].length === 2) {
      if (allIngredients[6][1] === "#") {
        minor7th = allIngredients[6][0];
      }
    }
    if (allIngredients[0].length === 2) {
      if (allIngredients[0][1] === "#") {
        if (allIngredients[6].length === 2) {
          minor7th = allIngredients[6][0];
        }
        if (allIngredients[6].length === 3) {
          minor7th = `${allIngredients[6][0]}${allIngredients[6][1]}`;
        }
      }
      if (allIngredients[0][1] === "b") {
        if (allIngredients[6].length === 1) {
          minor7th = `${allIngredients[6]}b`;
        }
      }
    }
    allIngredients[6] = minor7th;
  };
  createMinor7th();

  ////////////////
  const ingredientsWithOctaves = [];
  let octave = 1;
  const setOctaves = (toneToCheck) => {
    if (toneToCheck[0] === "B") {
      octave++;
      ingredientsWithOctaves.push(toneToCheck + (octave - 1));
    } else {
      ingredientsWithOctaves.push(toneToCheck + octave);
    }
  };
  /////////////////////////
  allIngredients.forEach(setOctaves);
  const chordIngredients = [];

  switch (addition) {
    case TYPE_NONE:
      chordIngredients.push(ingredientsWithOctaves[4]);
      chordIngredients.push(ingredientsWithOctaves[2]);
      chordIngredients.push(ingredientsWithOctaves[0]);
      break;
    case TYPE_7TH:
      chordIngredients.push(ingredientsWithOctaves[6]);
      chordIngredients.push(ingredientsWithOctaves[4]);
      chordIngredients.push(ingredientsWithOctaves[2]);
      chordIngredients.push(ingredientsWithOctaves[0]);
      break;
    case TYPE_9TH:
      chordIngredients.push(ingredientsWithOctaves[8]);
      chordIngredients.push(ingredientsWithOctaves[6]);
      chordIngredients.push(ingredientsWithOctaves[4]);
      chordIngredients.push(ingredientsWithOctaves[2]);
      chordIngredients.push(ingredientsWithOctaves[0]);
      break;
    case TYPE_ADD9:
      chordIngredients.push(ingredientsWithOctaves[8]);
      chordIngredients.push(ingredientsWithOctaves[4]);
      chordIngredients.push(ingredientsWithOctaves[2]);
      chordIngredients.push(ingredientsWithOctaves[0]);
      break;
    default:
      chordIngredients.push(ingredientsWithOctaves[4]);
      chordIngredients.push(ingredientsWithOctaves[2]);
      chordIngredients.push(ingredientsWithOctaves[0]);
  }

  return chordIngredients;
};
