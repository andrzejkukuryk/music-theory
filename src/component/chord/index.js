import React, { useEffect, useState } from "react";
import {
  TYPE_AUGMENTED,
  TYPE_DIMINISHED,
  TYPE_MAJOR,
  TYPE_MINOR,
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
import { createMajorChord } from "../../data/majorChord";
import { createAugmentedChord } from "../../data/augmentedChord";
import { createMinorChord } from "../../data/minorChord";
import { createDiminishedChord } from "../../data/diminishedChord";
import { createSus2Chord } from "../../data/suspended2Chord.js";
import { createSus4Chord } from "../../data/suspended4Chord";

export function Chord({ note, chordType, chordAdditional }) {
  const [ingredients, setIngredients] = useState([]);
  const [unavailablePosition, setUnavailablePosition] = useState([]); // [xy, xy... (x-row, y-column) ]
  const [signsForChromatics, setSignsForChromatics] = useState([]);

  useEffect(() => {
    setIngredients(createIngredients(chordType));
    setPositions();
    createSingsForChromatics();
  }, [note, chordType, chordAdditional]);

  const createIngredients = (chordType) => {
    let choosenChordTtype;
    switch (chordType) {
      case TYPE_MAJOR:
        choosenChordTtype = createMajorChord;
        break;
      case TYPE_MINOR:
        choosenChordTtype = createMinorChord;
        break;
      case TYPE_DIMINISHED:
        choosenChordTtype = createDiminishedChord;
        break;
      case TYPE_AUGMENTED:
        choosenChordTtype = createAugmentedChord;
        break;
      case TYPE_SUSPENDEDTWO:
        choosenChordTtype = createSus2Chord;
        break;
      case TYPE_SUSPENDEDFOUR:
        choosenChordTtype = createSus4Chord;
        break;
      default:
        choosenChordTtype = createMajorChord;
        break;
    }
    return choosenChordTtype(note, chordAdditional);
  };

  const setPositions = () => {
    const ingredientsForChord = createIngredients(chordType);
    const ingredientsWithChromatics = ingredientsForChord.filter(
      (ingredient) => ingredient.length > 2
    );
    const ingredientsWithDoubleChromatics = ingredientsWithChromatics.filter(
      (ingredient) => ingredient.length === 4
    );

    const temporaryUP = [];
    const addUnavailablePositions1sign1column = (rowNumber, columnNumber) => {
      temporaryUP.push(`${rowNumber}${columnNumber + 1}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 2}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 3}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 4}`);
      temporaryUP.push(`${rowNumber + 1}${columnNumber}`);
      temporaryUP.push(`${rowNumber + 2}${columnNumber}`);
    };

    const addUnavailablePositions1sign2columns = (rowNumber, columnNumber) => {
      temporaryUP.push(`${rowNumber}${columnNumber + 1}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 2}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 3}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 4}`);
      temporaryUP.push(`${rowNumber + 1}${columnNumber}`);
      temporaryUP.push(`${rowNumber + 1}${columnNumber + 1}`);
      temporaryUP.push(`${rowNumber + 2}${columnNumber}`);
      temporaryUP.push(`${rowNumber + 2}${columnNumber + 1}`);
    };

    const addUnavailablePositions2signs2columns = (rowNumber, columnNumber) => {
      temporaryUP.push(`${rowNumber}${columnNumber + 2}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 3}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 4}`);
      temporaryUP.push(`${rowNumber + 1}${columnNumber}`);
      temporaryUP.push(`${rowNumber + 1}${columnNumber + 1}`);
      temporaryUP.push(`${rowNumber + 2}${columnNumber}`);
      temporaryUP.push(`${rowNumber + 2}${columnNumber + 1}`);
    };

    const addUnavailablePositions2signs2columnsFloor = (
      rowNumber,
      columnNumber
    ) => {
      temporaryUP.push(`${rowNumber}${columnNumber + 2}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 3}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 4}`);
      temporaryUP.push(`${rowNumber + 1}${columnNumber}`);
      temporaryUP.push(`${rowNumber + 1}${columnNumber + 1}`);
      temporaryUP.push(`${rowNumber + 2}${columnNumber}`);
      temporaryUP.push(`${rowNumber + 2}${columnNumber + 1}`);
      temporaryUP.push(`${rowNumber + 3}${columnNumber + 1}`);
      temporaryUP.push(`${rowNumber + 4}${columnNumber + 1}`);
    };

    const firstChromaticRow = ingredientsForChord.indexOf(
      ingredientsWithChromatics[0]
    );

    // unregular chromatic signs schems START
    if (
      ingredientsWithChromatics.length === 3 &&
      ingredientsForChord.indexOf(ingredientsWithChromatics[0]) + 2 ===
        ingredientsForChord.indexOf(ingredientsWithChromatics[2])
    ) {
      const signs3single = [
        `${firstChromaticRow}1`,
        `${firstChromaticRow}2`,
        `${firstChromaticRow}3`,
        `${firstChromaticRow}4`,
        `${firstChromaticRow + 1}0`,
        `${firstChromaticRow + 1}1`,
        `${firstChromaticRow + 1}3`,
        `${firstChromaticRow + 1}4`,
        `${firstChromaticRow + 2}0`,
        `${firstChromaticRow + 2}2`,
        `${firstChromaticRow + 2}3`,
        `${firstChromaticRow + 2}4`,
      ];

      const signs1doubleUpper = [
        `${firstChromaticRow}2`,
        `${firstChromaticRow}3`,
        `${firstChromaticRow}4`,
        `${firstChromaticRow + 1}0`,
        `${firstChromaticRow + 1}1`,
        `${firstChromaticRow + 1}2`,
        `${firstChromaticRow + 1}4`,
        `${firstChromaticRow + 2}0`,
        `${firstChromaticRow + 2}1`,
        `${firstChromaticRow + 2}3`,
        `${firstChromaticRow + 2}4`,
      ];

      const signs1doubleMiddle = [
        `${firstChromaticRow}1`,
        `${firstChromaticRow}2`,
        `${firstChromaticRow}3`,
        `${firstChromaticRow}4`,
        `${firstChromaticRow + 1}0`,
        `${firstChromaticRow + 1}1`,
        `${firstChromaticRow + 1}4`,
        `${firstChromaticRow + 2}0`,
        `${firstChromaticRow + 2}2`,
        `${firstChromaticRow + 2}3`,
        `${firstChromaticRow + 2}4`,
      ];

      const signs2double = [
        `${firstChromaticRow}2`,
        `${firstChromaticRow}3`,
        `${firstChromaticRow}4`,
        `${firstChromaticRow + 1}0`,
        `${firstChromaticRow + 1}1`,
        `${firstChromaticRow + 1}2`,
        `${firstChromaticRow + 2}0`,
        `${firstChromaticRow + 2}1`,
        `${firstChromaticRow + 2}3`,
        `${firstChromaticRow + 2}4`,
      ];

      if (ingredientsWithDoubleChromatics.length > 0) {
        if (ingredientsWithDoubleChromatics.length === 2) {
          setUnavailablePosition(signs2double);
          return;
        } else {
          if (
            ingredientsWithDoubleChromatics[0] === ingredientsWithChromatics[0]
          ) {
            setUnavailablePosition(signs1doubleUpper);
            return;
          } else {
            setUnavailablePosition(signs1doubleMiddle);
            return;
          }
        }
      } else {
        setUnavailablePosition(signs3single);
        return;
      }
    }
    // unregular chromatic signs schems END

    const columnSearch = (row) => {
      for (let column = 0; column < 5; column++) {
        const searchedPosition = `${row}${column}`;
        if (!temporaryUP.includes(searchedPosition)) {
          return column;
        }
      }
    };

    const doubleSignIn2ndSignsRow = (row) => {
      if (
        ingredientsWithChromatics.length === 5 &&
        row === 0 &&
        ingredientsWithChromatics[3].length === 4
      ) {
        return true;
      } else {
        return false;
      }
    };

    ingredientsForChord.forEach((ingredient, row) => {
      const column = columnSearch(row);
      if (ingredient.length > 2) {
        if (doubleSignIn2ndSignsRow(row)) {
          // there's double sign below in ingredient's column
          if (ingredient.length === 3) {
            addUnavailablePositions1sign2columns(row, column);
          } else {
            addUnavailablePositions2signs2columns(row, column);
          }
        } else {
          // there's NO double sign below in ingredient's column
          if (ingredient.length === 3) {
            addUnavailablePositions1sign1column(row, column);
          } else {
            addUnavailablePositions2signs2columnsFloor(row, column);
          }
        }
      } else {
        return;
      }
    });
    setUnavailablePosition(temporaryUP);
  };

  const createSingsForChromatics = () => {
    const ingredientsForChord = createIngredients(chordType);
    const temporarySFC = [];
    ingredientsForChord.forEach((ingredient) => {
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
        noteToWrite[0] === "C" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.d1]:
        noteToWrite[0] === "D" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.e1]:
        noteToWrite[0] === "E" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.f1]:
        noteToWrite[0] === "F" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.g1]:
        noteToWrite[0] === "G" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.a1]:
        noteToWrite[0] === "A" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.b1]:
        noteToWrite[0] === "B" && noteToWrite[noteToWrite.length - 1] === "1",
      [styles.c2]:
        noteToWrite[0] === "C" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.d2]:
        noteToWrite[0] === "D" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.e2]:
        noteToWrite[0] === "E" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.f2]:
        noteToWrite[0] === "F" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.g2]:
        noteToWrite[0] === "G" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.a2]:
        noteToWrite[0] === "A" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.b2]:
        noteToWrite[0] === "B" && noteToWrite[noteToWrite.length - 1] === "2",
      [styles.c3]:
        noteToWrite[0] === "C" && noteToWrite[noteToWrite.length - 1] === "3",
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
        note={note}
        key={chromaticsKey}
        pitch={pitch}
        row={index}
        unavailablePosition={unavailablePosition}
        signsForChromatics={signsForChromatics}
      />
    );
  };

  const c1Present = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "C" && ingr[ingr.length - 1] === "1"
    );
  };

  const a2resent = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "A" && ingr[ingr.length - 1] === "2"
    );
  };

  const b2resent = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "B" && ingr[ingr.length - 1] === "2"
    );
  };

  const c3Present = () => {
    return !ingredients.some(
      (ingr) => ingr[0] === "C" && ingr[ingr.length - 1] === "3"
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
      {note !== "X" && (
        <img className={classLowerLine} src={line} alt="added lower line" />
      )}
      {note !== "X" && (
        <img
          className={classUpper1stLine}
          src={line}
          alt="added first upper line"
        />
      )}
      {note !== "X" && (
        <img
          className={classUpper2ndLine}
          src={line}
          alt="added second upper line"
        />
      )}
      {ingredients.map((ingr, index) => writeNote(ingr, index))}
      {ingredients.map((ingr, index) => writeChromatics(ingr, index))}
      <ChordCaption
        note={note}
        chordType={chordType}
        chordAdditional={chordAdditional}
        ingredients={ingredients}
      />
    </div>
  );
}
