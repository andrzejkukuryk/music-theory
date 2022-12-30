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
  const [signsForChromatics, setSignsForChromatics] = useState(["#", "b", " "]);
  const ingredientsReversesed = [...chordIngredients].reverse();

  useEffect(
    () => circleOfFifths(note, chordType, TYPE_CHORD, chordAdditional),
    [note, chordType, chordAdditional]
  );

  useEffect(() => {
    setChordIngredients([...ingredients]);
    setPositions();
    createSingsForChromatics();
  }, [note, chordType, chordAdditional]);
  useEffect(() => {
    setPositions();
    createSingsForChromatics();
  }, []);

  const setPositions = () => {
    const ingredientsForChord = [...ingredients].reverse();
    const ingredientsWithChromatics = ingredientsForChord.filter(
      (ingredient) => ingredient.length > 2
    );
    const temporaryUP = [];
    const addUnavailablePositions = (rowNumber, columnNumber) => {
      temporaryUP.push(`${rowNumber}${columnNumber + 1}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 2}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 3}`);
      temporaryUP.push(`${rowNumber + 1}${columnNumber}`);
      temporaryUP.push(`${rowNumber + 2}${columnNumber}`);
    };

    const firstChromaticRow = ingredientsForChord.indexOf(
      ingredientsWithChromatics[0]
    );
    const secondChromaticRow = ingredientsForChord.indexOf(
      ingredientsWithChromatics[1]
    );
    const thirdChromaticRow = ingredientsForChord.indexOf(
      ingredientsWithChromatics[2]
    );
    const fourthChromaticRow = ingredientsForChord.indexOf(
      ingredientsWithChromatics[3]
    );
    const fifthChromaticRow = ingredientsForChord.indexOf(
      ingredientsWithChromatics[4]
    );

    // trzy sąsiadujące składniki mają znaki chromatyczne
    if (
      ingredientsWithChromatics.length === 3 &&
      ingredientsForChord.indexOf(ingredientsWithChromatics[0]) + 2 ===
        ingredientsForChord.indexOf(ingredientsWithChromatics[2])
    ) {
      const firstChromaticRow = ingredientsForChord.indexOf(
        ingredientsWithChromatics[0]
      );
      setUnavailablePosition([
        `${firstChromaticRow}1`,
        `${firstChromaticRow}2`,
        `${firstChromaticRow}3`,
        `${firstChromaticRow + 1}0`,
        `${firstChromaticRow + 1}1`,
        `${firstChromaticRow + 1}3`,
        `${firstChromaticRow + 2}0`,
        `${firstChromaticRow + 2}2`,
        `${firstChromaticRow + 2}3`,
      ]);
      return;
    }

    if (ingredientsWithChromatics.length === 1) {
      addUnavailablePositions(firstChromaticRow, 0);
      setUnavailablePosition(temporaryUP);
    }

    if (ingredientsWithChromatics.length === 2) {
      addUnavailablePositions(firstChromaticRow, 0);
      if (secondChromaticRow - firstChromaticRow < 3) {
        addUnavailablePositions(secondChromaticRow, 1);
      } else {
        addUnavailablePositions(secondChromaticRow, 0);
      }
      setUnavailablePosition(temporaryUP);
    }

    if (ingredientsWithChromatics.length === 3) {
      if (ingredientsForChord.length === 4) {
        addUnavailablePositions(firstChromaticRow, 0);
        addUnavailablePositions(secondChromaticRow, 1);
        addUnavailablePositions(thirdChromaticRow, 0);
        setUnavailablePosition(temporaryUP);
      }
      if (ingredientsForChord.length === 5) {
        addUnavailablePositions(firstChromaticRow, 0);
        if (firstChromaticRow === 0) {
          if (secondChromaticRow === 1 || secondChromaticRow === 2) {
            addUnavailablePositions(secondChromaticRow, 1);
            addUnavailablePositions(thirdChromaticRow, 0);
          }
          if (secondChromaticRow === 3) {
            addUnavailablePositions(secondChromaticRow, 0);
            addUnavailablePositions(thirdChromaticRow, 1);
          }
        }
        if (firstChromaticRow === 1) {
          if (secondChromaticRow === 2 || secondChromaticRow === 3) {
            addUnavailablePositions(secondChromaticRow, 1);
            addUnavailablePositions(thirdChromaticRow, 0);
          }
        }
        setUnavailablePosition(temporaryUP);
      }
    }

    if (ingredientsWithChromatics.length === 4) {
      if (ingredientsForChord.length === 4) {
        addUnavailablePositions(firstChromaticRow, 0);
        addUnavailablePositions(secondChromaticRow, 1);
        addUnavailablePositions(thirdChromaticRow, 2);
        addUnavailablePositions(fourthChromaticRow, 0);
        setUnavailablePosition(temporaryUP);
      }
      if (ingredientsForChord.length === 5) {
        addUnavailablePositions(firstChromaticRow, 0);
        if (firstChromaticRow === 0) {
          if (secondChromaticRow === 1) {
            addUnavailablePositions(secondChromaticRow, 1);
            if (thirdChromaticRow === 2) {
              addUnavailablePositions(thirdChromaticRow, 2);
              addUnavailablePositions(fourthChromaticRow, 0);
            }
            if (thirdChromaticRow === 3) {
              addUnavailablePositions(thirdChromaticRow, 0);
              addUnavailablePositions(fourthChromaticRow, 1);
            }
          }
          if (secondChromaticRow === 2) {
            addUnavailablePositions(secondChromaticRow, 1);
            addUnavailablePositions(thirdChromaticRow, 0);
            addUnavailablePositions(fourthChromaticRow, 2);
          }
        }
        if (firstChromaticRow === 1) {
          addUnavailablePositions(secondChromaticRow, 1);
          addUnavailablePositions(thirdChromaticRow, 2);
          addUnavailablePositions(fourthChromaticRow, 0);
        }
        setUnavailablePosition(temporaryUP);
      }
    }
    if (ingredientsWithChromatics.length === 5) {
      addUnavailablePositions(firstChromaticRow, 0);
      addUnavailablePositions(secondChromaticRow, 1);
      addUnavailablePositions(thirdChromaticRow, 2);
      addUnavailablePositions(fourthChromaticRow, 0);
      addUnavailablePositions(fifthChromaticRow, 1);
      setUnavailablePosition(temporaryUP);
    }
  };

  const createSingsForChromatics = () => {
    const ingredientsForChord = [...ingredients].reverse();
    const temporarySFC = [];
    ingredientsForChord.map((ingredient) => {
      if (ingredient.length === 2) {
        temporarySFC.push(" ");
      }
      if (ingredient.length > 2) {
        temporarySFC.push(ingredient[1]);
      }
    });
    setSignsForChromatics(temporarySFC);
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
    return (
      <Chromatics
        key={chromaticsKey}
        pitch={pitch}
        row={index}
        unavailablePosition={unavailablePosition}
        setUnavailablePosition={setUnavailablePosition}
        signsForChromatics={signsForChromatics}
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
      {ingredientsReversesed.map((ingr, index) => writeChromatics(ingr, index))}
      <ChordCaption chordIngredients={chordIngredients} />
    </div>
  );
}
