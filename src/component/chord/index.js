import React from "react";
import {
  circleOfFifths,
  ingredients,
  range,
  TYPE_AUGMENTED,
  TYPE_CHORD,
  TYPE_MAJOR,
  TYPE_MINOR,
} from "../../theory";
import styles from "./style.module.css";
import clef from "./graph/clef.png";
import wholeNote from "./graph/wholeNote.png";
import sharp from "./graph/sharp.png";
import flat from "./graph/flat.png";
import line from "./graph/line.png";

export function Chord({ note, chordType, chordAdditional }) {
  // const modusForCircle =
  //   chordType === TYPE_MAJOR || chordType === TYPE_AUGMENTED
  //     ? TYPE_MAJOR
  //     : TYPE_MINOR;

  const ingredientsFromTheory = [...range, range[1]];
  // const createIngredients = () => {
  //   const diatonicNotes = [];
  //   ingredientsFromTheory.map((noteToNeutral) =>
  //     diatonicNotes.push(noteToNeutral[0])
  //   );
  //   const indexOf1stB = diatonicNotes.indexOf("B");
  //   console.log("add: ", chordAdditional);
  // };
  // createIngredients();
  circleOfFifths(note, chordType, TYPE_CHORD, chordAdditional);
  return (
    <div className={styles.container}>
      <img className={styles.clef} src={clef} alt="treble clef"></img>
      <p>{ingredients.join(", ")}</p>
    </div>
  );
}
