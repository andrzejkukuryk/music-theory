import React from "react";
import {
  circleOfFifths,
  range,
  TYPE_AUGMENTED,
  TYPE_CHORD,
  TYPE_MAJOR,
  TYPE_MINOR,
} from "../../theory";

export function Chord({ note, chordType }) {
  const modusForCircle =
    chordType === TYPE_MAJOR || chordType === TYPE_AUGMENTED
      ? TYPE_MAJOR
      : TYPE_MINOR;

  const ingredientsFromTheory = [...range, range[1]];
  const createIngredients = () => {
    const diatonicNotes = [];
    ingredientsFromTheory.map((noteToNeutral) =>
      diatonicNotes.push(noteToNeutral[0])
    );
    const indexOf1stB = diatonicNotes.indexOf("B");
    console.log("index of 1st B: ", indexOf1stB);
  };
  createIngredients();
  circleOfFifths(note, modusForCircle, TYPE_CHORD);
  return <p>{ingredientsFromTheory.join(", ")}</p>;
}
