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
import classNames from "classnames";

export function Chord({ note, chordType, chordAdditional }) {
  const writeNote = (noteToWrite) => {
    const classNoteToWrite = classNames({
      [styles.noteOnStaff]: true,
      [styles.noteDisabled]: note === "X",
      [styles.c1]:
        noteToWrite[0] === "c" && noteToWrite[noteToWrite.length - 1] == 1,
      [styles.d1]:
        noteToWrite[0] === "d" && noteToWrite[noteToWrite.length - 1] == 1,
      [styles.e1]:
        noteToWrite[0] === "e" && noteToWrite[noteToWrite.length - 1] == 1,
      [styles.f1]:
        noteToWrite[0] === "f" && noteToWrite[noteToWrite.length - 1] == 1,
      [styles.g1]:
        noteToWrite[0] === "g" && noteToWrite[noteToWrite.length - 1] == 1,
      [styles.a1]:
        noteToWrite[0] === "a" && noteToWrite[noteToWrite.length - 1] == 1,
      [styles.b1]:
        noteToWrite[0] === "b" && noteToWrite[noteToWrite.length - 1] == 1,
      [styles.c2]:
        noteToWrite[0] === "c" && noteToWrite[noteToWrite.length - 1] == 2,
      [styles.d2]:
        noteToWrite[0] === "d" && noteToWrite[noteToWrite.length - 1] == 2,
      [styles.e2]:
        noteToWrite[0] === "e" && noteToWrite[noteToWrite.length - 1] == 2,
      [styles.f2]:
        noteToWrite[0] === "f" && noteToWrite[noteToWrite.length - 1] == 2,
      [styles.g2]:
        noteToWrite[0] === "g" && noteToWrite[noteToWrite.length - 1] == 2,
      [styles.a2]:
        noteToWrite[0] === "a" && noteToWrite[noteToWrite.length - 1] == 2,
      [styles.b2]:
        noteToWrite[0] === "b" && noteToWrite[noteToWrite.length - 1] == 2,
      [styles.c3]:
        noteToWrite[0] === "c" && noteToWrite[noteToWrite.length - 1] == 3,
    });
    return <img className={classNoteToWrite} src={wholeNote} />;
  };

  if (note !== "X") {
    circleOfFifths(note, chordType, TYPE_CHORD, chordAdditional);
  }

  return (
    <div className={styles.container}>
      <img className={styles.clef} src={clef} alt="treble clef"></img>
      {ingredients.map((ingr) => writeNote(ingr))}
      <p>{ingredients.join(", ")}</p>
    </div>
  );
}
