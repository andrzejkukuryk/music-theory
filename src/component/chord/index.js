import React from "react";
import {
  circleOfFifths,
  ingredients,
  range,
  TYPE_AUGMENTED,
  TYPE_CHORD,
  TYPE_MAJOR,
  TYPE_MINOR,
  TYPE_SUSPENDEDFOUR,
  TYPE_SUSPENDEDTWO,
} from "../../theory";
import styles from "./style.module.css";
import clef from "./graph/clef.png";
import wholeNote from "./graph/wholeNote.png";
import sharp from "./graph/sharp.png";
import flat from "./graph/flat.png";
import line from "./graph/line.png";
import classNames from "classnames";

export function Chord({ note, chordType, chordAdditional }) {
  const writeNote = (noteToWrite, step) => {
    const classPitchDiv = classNames({
      [styles.pitchDiv]: true,
      [styles.setVertical0]: step === 0,
      [styles.setVertical1]: step === 1,
      [styles.setVertical2]: step === 2,
      [styles.setVertical3]: step === 3,
      [styles.setVertical4]: step === 4,
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
    const classSharp = classNames({
      [styles.sharpOnStaff]: noteToWrite.length > 2 && noteToWrite[1] === "#",
      [styles.sharpDisabled]:
        noteToWrite.length === 2 || noteToWrite[1] === "b" || note === "X",
    });

    const classDoubleSharp = classNames({
      [styles.sharpOnStaff]: noteToWrite.length === 4 && noteToWrite[2] === "#",
      [styles.sharpDisabled]: noteToWrite.length < 4 || noteToWrite[1] === "b",
    });

    const classFlat = classNames({
      [styles.flatOnStaff]: noteToWrite.length > 2 && noteToWrite[1] === "b",
      [styles.flatDisabled]:
        noteToWrite.length === 2 || noteToWrite[1] === "#" || note === "X",
    });

    const classDoubleFlat = classNames({
      [styles.flatOnStaff]: noteToWrite.length === 4 && noteToWrite[2] === "b",
      [styles.flatDisabled]: noteToWrite.length < 4 || noteToWrite[1] === "#",
    });

    const classNote = classNames({
      [styles.noteOnStaff]: note !== "X",
      [styles.noteDisabled]: note === "X",
      [styles.noteSuspended]:
        (chordType === TYPE_SUSPENDEDFOUR || chordType === TYPE_SUSPENDEDTWO) &&
        step === 1,
    });
    return (
      <div className={classPitchDiv}>
        <div className={styles.notesContainerDiv}>
          <img className={classDoubleSharp} src={sharp} />
          <img className={classSharp} src={sharp} />
          <img className={classDoubleFlat} src={flat} />
          <img className={classFlat} src={flat} />
          <img className={classNote} src={wholeNote} />
        </div>
      </div>
    );
  };

  if (note !== "X") {
    circleOfFifths(note, chordType, TYPE_CHORD, chordAdditional);
  }

  return (
    <div className={styles.container}>
      <img className={styles.clef} src={clef} alt="treble clef"></img>
      {ingredients.map((ingr, index) => writeNote(ingr, index))}
      {/* {writeNote("d1")}
      {writeNote("f1")}
      {writeNote("a1")} */}
      <p>{ingredients.join(", ")}</p>
    </div>
  );
}
