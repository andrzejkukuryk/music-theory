import React, { useEffect, useState } from "react";
import {
  circleOfFifths,
  ingredients as ingredientsOld,
  TYPE_AUGMENTED,
  TYPE_CHORD,
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
  const [chordIngredients, setChordIngredients] = useState(["c1", "e1", "g1"]);
  const [signsForChromatics, setSignsForChromatics] = useState([]);
  const ingredientsReversesed = [...chordIngredients].reverse();

  // useEffect(
  //   () => circleOfFifths(note, chordType, TYPE_CHORD, chordAdditional),
  //   [note, chordType, chordAdditional]
  // );

  useEffect(() => {
    // createIngredients(note, chordType, chordAdditional);
    setIngredients(createIngredients(chordType));
    setChordIngredients([...ingredientsOld]);
    // setPositions();
    createSingsForChromatics();
  }, [note, chordType, chordAdditional]);
  // useEffect(() => {
  //   // setPositions();
  //   createSingsForChromatics();
  // }, []);

  const createIngredientsOld = (note, chordType, chordAdditional) => {
    switch (chordType) {
      case TYPE_MAJOR:
        setIngredients(createMajorChord(note, chordAdditional));
        break;
      case TYPE_MINOR:
        setIngredients(createMinorChord(note, chordAdditional));
        break;
      case TYPE_DIMINISHED:
        setIngredients(createDiminishedChord(note, chordAdditional));
        break;
      case TYPE_AUGMENTED:
        setIngredients(createAugmentedChord(note, chordAdditional));
        break;
      case TYPE_SUSPENDEDTWO:
        setIngredients(createSus2Chord(note, chordAdditional));
        break;
      case TYPE_SUSPENDEDFOUR:
        setIngredients(createSus4Chord(note, chordAdditional));
        break;
      default:
        setIngredients(createMajorChord(note, chordAdditional));
        break;
    }
  };

  //////////////////////////////

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

  console.log("z nowej funkcji: ", createIngredients(chordType));
  //////////////////////////////

  const setPositions = () => {
    // const ingredientsForChord = [...ingredientsOld].reverse();
    const ingredientsWithChromatics = ingredients.filter(
      (ingredient) => ingredient.length > 2
    );
    const temporaryUP = [];
    const addUnavailablePositions = (rowNumber, columnNumber) => {
      temporaryUP.push(`${rowNumber}${columnNumber + 1}`);
      temporaryUP.push(`${rowNumber}${columnNumber + 2}`);
      temporaryUP.push(`${rowNumber + 1}${columnNumber}`);
      temporaryUP.push(`${rowNumber + 2}${columnNumber}`);
    };

    const firstChromaticRow = ingredients.indexOf(ingredientsWithChromatics[0]);
    const secondChromaticRow = ingredients.indexOf(
      ingredientsWithChromatics[1]
    );
    const thirdChromaticRow = ingredients.indexOf(ingredientsWithChromatics[2]);
    const fourthChromaticRow = ingredients.indexOf(
      ingredientsWithChromatics[3]
    );
    const fifthChromaticRow = ingredients.indexOf(ingredientsWithChromatics[4]);

    // trzy sąsiadujące składniki mają znaki chromatyczne
    if (
      ingredientsWithChromatics.length === 3 &&
      ingredients.indexOf(ingredientsWithChromatics[0]) + 2 ===
        ingredients.indexOf(ingredientsWithChromatics[2])
    ) {
      const firstChromaticRow = ingredients.indexOf(
        ingredientsWithChromatics[0]
      );
      setUnavailablePosition([
        `${firstChromaticRow}1`,
        `${firstChromaticRow}2`,
        `${firstChromaticRow + 1}0`,
        `${firstChromaticRow + 1}1`,
        `${firstChromaticRow + 2}0`,
        `${firstChromaticRow + 2}2`,
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
      if (ingredients.length === 4) {
        addUnavailablePositions(firstChromaticRow, 0);
        addUnavailablePositions(secondChromaticRow, 1);
        addUnavailablePositions(thirdChromaticRow, 0);
        setUnavailablePosition(temporaryUP);
      }
      if (ingredients.length === 5) {
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
      if (ingredients.length === 4) {
        addUnavailablePositions(firstChromaticRow, 0);
        addUnavailablePositions(secondChromaticRow, 1);
        addUnavailablePositions(thirdChromaticRow, 2);
        addUnavailablePositions(fourthChromaticRow, 0);
        setUnavailablePosition(temporaryUP);
      }
      if (ingredients.length === 5) {
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
    const ingredientsForChord = createIngredients(chordType);
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

  console.log(signsForChromatics);

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
      {/* {ingredientsReversesed.map((ingr, index) => writeNote(ingr, index))} */}
      {/* {ingredientsReversesed.map((ingr, index) => writeChromatics(ingr, index))} */}
      <ChordCaption
        note={note}
        chordType={chordType}
        chordAdditional={chordAdditional}
        ingredients={ingredients}
      />
    </div>
  );
}
