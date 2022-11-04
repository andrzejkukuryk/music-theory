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
    const chromaticPositionCheck = (stepToCheck, position) => {
      if (ingredients.length === 3) {
        if (ingredients.filter((ingr) => ingr.length > 2).length === 2) {
          if (ingredients[0].length > 2) {
            if (stepToCheck === 0 && position === 1) return true;
          } else {
            if (stepToCheck === 1 && position === 1) return true;
          }
        } else if (ingredients.filter((ingr) => ingr.length > 2).length === 3) {
          if (stepToCheck === 0 && position === 1) {
            return true;
          } else if (stepToCheck === 1 && position === 2) {
            return true;
          }
        }
      }
      return false;
    };

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

    const allSharps = note !== "X" ? document.getElementsByName("sharp") : [];
    const chromaticCheck = (checkedPitch, chekedColumn) => {
      for (let i = 0; i < allSharps.length; i++) {
        if (
          allSharps[i].getAttribute("pitch") == checkedPitch &&
          allSharps[i].getAttribute("column") == chekedColumn
        ) {
          return i;
        }
      }
      return false;
    };
    console.log(chromaticCheck("f#1", 1));

    const classSharp0 = classNames({
      [styles.sharpOnStaff]: true,
      [styles.sharpEnabled]: false,
      // [styles.sharpEnabled]: chromaticCheck("f#1", 0),
    });

    const classSharp1 = classNames({
      [styles.sharpOnStaff]: true,
      [styles.sharpEnabled]: false,
      // [styles.sharpEnabled]: chromaticCheck("f#1", 1),
    });

    const classSharp2 = classNames({
      [styles.sharpOnStaff]: true,
      [styles.sharpEnabled]: false,
      // [styles.sharpEnabled]: chromaticCheck("f#1", 2),
    });

    const classSharp3 = classNames({
      [styles.sharpOnStaff]: true,
      [styles.sharpEnabled]: false,
      // [styles.sharpEnabled]: chromaticCheck("f#1", 3),
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
          <img
            className={classSharp3}
            column={3}
            row={step}
            src={sharp}
            pitch={noteToWrite}
            name="sharp"
            alt="sharp"
          />
          <img
            className={classSharp2}
            column={2}
            row={step}
            src={sharp}
            pitch={noteToWrite}
            name="sharp"
            alt="sharp"
          />
          <img
            className={classSharp1}
            column={1}
            row={step}
            src={sharp}
            pitch={noteToWrite}
            name="sharp"
            alt="sharp"
          />
          <img
            className={classSharp0}
            column={0}
            row={step}
            src={sharp}
            pitch={noteToWrite}
            name="sharp"
            alt="sharp"
          />
          <img className={classNote} src={wholeNote} />
        </div>
      </div>
    );
  };

  const c1Present = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "c" && ingr[ingr.length - 1] == 1
    );
  };

  const a2resent = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "a" && ingr[ingr.length - 1] == 2
    );
  };

  const b2resent = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "b" && ingr[ingr.length - 1] == 2
    );
  };

  const c3Present = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "c" && ingr[ingr.length - 1] == 3
    );
  };

  const classLowerLine = classNames({
    [styles.lowerLine]: true,
    [styles.lineDisabled]: c1Present(),
  });

  const classUpper1stLine = classNames({
    [styles.upper1stLine]: true,
    [styles.lineDisabled]: a2resent() && b2resent() && c3Present(),
  });

  const classUpper2ndLine = classNames({
    [styles.upper2ndLine]: true,
    [styles.lineDisabled]: c3Present(),
  });

  if (note !== "X") {
    circleOfFifths(note, chordType, TYPE_CHORD, chordAdditional);
  }
  
  return (
    <div className={styles.container}>
      <img className={styles.clef} src={clef} alt="treble clef"></img>
      <img className={classLowerLine} src={line} />
      <img className={classUpper1stLine} src={line} />
      <img className={classUpper2ndLine} src={line} />
      {ingredients.map((ingr, index) => writeNote(ingr, index))}
      <p>{ingredients.join(", ")}</p>
    </div>
  );
}
