import React, { useEffect, useState } from "react";
import {
  circleOfFifths,
  ingredients,
  TYPE_CHORD,
  TYPE_SUSPENDEDFOUR,
  TYPE_SUSPENDEDTWO,
} from "../../theory";
import styles from "./style.module.css";
import clef from "./graph/clef.png";
import wholeNote from "./graph/wholeNote.png";
import line from "./graph/line.png";
import classNames from "classnames";
import { Chromatics } from "../chromatics";
import { ChordCaption } from "../chordCaption";

export function Chord({ note, chordType, chordAdditional }) {
  const [unavailablePosition, setUnavailablePosition] = useState([]); // [xy, xy... (x-row, y-column) ]
  const [chordIngredients, setChordIngredients] = useState(["c1", "e1", "g1"]);
  const ingredientsReversesed = [...chordIngredients].reverse();

  useEffect(
    () => circleOfFifths(note, chordType, TYPE_CHORD, chordAdditional),
    [note, chordType, chordAdditional]
  );

  useEffect(
    () => setChordIngredients([...ingredients]),
    [note, chordType, chordAdditional]
  );
  const addUnavailablePosition = (row, column) => {
    const newPosition = `${row}${column}`;
    setUnavailablePosition([...unavailablePosition, newPosition]);
  };

  const writeNote = (noteToWrite, step) => {
    const classPitchDiv = classNames({
      [styles.pitchDiv]: true,
      [styles.setVertical0]: step === 0,
      [styles.setVertical1]: step === 1,
      [styles.setVertical2]: step === 2,
      [styles.setVertical3]: step === 3,
      [styles.setVertical4]: step === 4,
      [styles.c1]:
        noteToWrite[0] === "c" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.d1]:
        noteToWrite[0] === "d" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.e1]:
        noteToWrite[0] === "e" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.f1]:
        noteToWrite[0] === "f" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.g1]:
        noteToWrite[0] === "g" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.a1]:
        noteToWrite[0] === "a" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.b1]:
        noteToWrite[0] === "b" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.c2]:
        noteToWrite[0] === "c" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.d2]:
        noteToWrite[0] === "d" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.e2]:
        noteToWrite[0] === "e" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.f2]:
        noteToWrite[0] === "f" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.g2]:
        noteToWrite[0] === "g" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.a2]:
        noteToWrite[0] === "a" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.b2]:
        noteToWrite[0] === "b" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.c3]:
        noteToWrite[0] === "c" && noteToWrite[noteToWrite.length - 1] === "3",
    });

    const pitchDivKey = `pitch${step}`;

    const classNote = classNames({
      [styles.noteOnStaff]: note !== "X",
      [styles.noteDisabled]: note === "X",
      [styles.noteSuspended]:
        (chordType === TYPE_SUSPENDEDFOUR || chordType === TYPE_SUSPENDEDTWO) &&
        step === ingredients.length - 2,
    });

    return (
      <div className={classPitchDiv} key={pitchDivKey}>
        <div className={styles.notesContainerDiv}>
          <img
            className={classNote}
            src={wholeNote}
            alt={`${noteToWrite} note`}
          />
        </div>
      </div>
    );
  };

  const writeChromatics = (pitch, index) => {
    const chromaticsKey = `key${index}`;
    const row = ingredients.length - (1 + index);
    return (
      <Chromatics
        key={chromaticsKey}
        pitch={pitch}
        row={index}
        unavailablePosition={unavailablePosition}
        addUnavailablePosition={addUnavailablePosition}
      />
    );
  };

  const c1Present = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "c" && ingr[ingr.length - 1] === "1"
    );
  };

  const a2resent = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "a" && ingr[ingr.length - 1] === "2"
    );
  };

  const b2resent = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "b" && ingr[ingr.length - 1] === "2"
    );
  };

  const c3Present = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "c" && ingr[ingr.length - 1] === "3"
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

  // if (note !== "X") {
  //   circleOfFifths(note, chordType, TYPE_CHORD, chordAdditional);
  // }

  return (
    <div className={styles.container}>
      <img className={styles.clef} src={clef} alt="treble clef"></img>
      <img className={classLowerLine} src={line} alt="added lower line" />
      <img
        className={classUpper1stLine}
        src={line}
        alt="added first upper line"
      />
      <img
        className={classUpper2ndLine}
        src={line}
        alt="added second upper line"
      />
      {ingredientsReversesed.map((ingr, index) => writeNote(ingr, index))}
      {/* {ingredientsReversesed.map((ingr, index) => writeChromatics(ingr, index))} */}
      {/* <ChordCaption note={note} /> */}
    </div>
  );
}
