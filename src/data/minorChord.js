import { TYPE_7TH, TYPE_9TH, TYPE_ADD9, TYPE_NONE } from "../theory";
import { circleOfFifthsMinor } from "./circleMinor";

export const createMinorChord = (prime, addition) => {
  let allIngredients = [
    ...circleOfFifthsMinor(prime),
    ...circleOfFifthsMinor(prime).slice(0, 2),
  ];

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
