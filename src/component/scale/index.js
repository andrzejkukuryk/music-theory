import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { TYPE_MAJOR, TYPE_MINOR } from "../../theory";
import styles from "./styles.module.css";
import clef from "./graph/clef.png";
import wholeNote from "./graph/wholeNote.png";
import sharp from "./graph/sharp.png";
import flat from "./graph/flat.png";
import line from "./graph/line.png";
import { ScaleCaption } from "../scaleCaption";
import { createMajorScale } from "../../data/majorScale";
import { createMinorScale } from "../../data/minorScale";
import { createSharps } from "../../data/sharps";
import { createFlats } from "../../data/flats";

export function Scale({ note, modus }) {
  const [correctNote, setCorrectNote] = useState("");
  const [range, setRange] = useState([]);
  const [sharps, setSharps] = useState([]);
  const [flats, setFlats] = useState([]);
  const [indexOfBNote, setIndexOfBNote] = useState(0);

  const getCorrectNote = () => {
    let newCorrectNote = "";
    switch (note) {
      case "C#":
      case "Db":
        newCorrectNote = modus === TYPE_MAJOR ? "Db" : "C#";
        break;
      case "D#":
      case "Eb":
        newCorrectNote = "Eb";
        break;
      case "F#":
      case "Gb":
        newCorrectNote = modus === TYPE_MAJOR ? "Gb" : "F#";
        break;
      case "G#":
      case "Ab":
        newCorrectNote = modus === TYPE_MAJOR ? "Ab" : "G#";
        break;
      case "A#":
      case "Bb":
        newCorrectNote = "Bb";
        break;
      default:
        newCorrectNote = note;
    }
    setCorrectNote(newCorrectNote);
  };

  useEffect(() => getCorrectNote(), [note, modus]);

  const getRange = () => {
    if (modus === TYPE_MAJOR) {
      setRange(createMajorScale(correctNote));
    }
    if (modus === TYPE_MINOR) {
      setRange(createMinorScale(correctNote));
    }
  };

  useEffect(() => getRange(), [correctNote, modus]);

  const getSigns = () => {
    const sevenSteps = range.slice(0, 7);
    const notesWithSigns = sevenSteps.filter((item) => item.length > 1);
    const numberOfSigns = notesWithSigns.length;
    if (numberOfSigns > 0) {
      if (notesWithSigns[0][1] === "#") {
        setSharps(createSharps(numberOfSigns));
        setFlats([]);
      } else if (notesWithSigns[0][1] === "b") {
        setFlats(createFlats(numberOfSigns));
        setSharps([]);
      }
    } else if (numberOfSigns === 0) {
      setSharps([]);
      setFlats([]);
    }
  };

  useEffect(() => getSigns(), [range]);

  const getIndexOfBNote = () => {
    const sevenSteps = range.slice(0, 7);
    const diatonicNotes = sevenSteps.map((noteToNeutral) => noteToNeutral[0]);
    const newIndexOfBNote = diatonicNotes.indexOf("B");
    setIndexOfBNote(newIndexOfBNote);
  };

  useEffect(() => getIndexOfBNote(), [range]);
  // console.log(indexOfBNote);

  // const diatonicNotes = [];
  // range.map((noteToNeutral) => diatonicNotes.push(noteToNeutral[0]));

  // const indexOfB = diatonicNotes.indexOf("B");

  const writeNote = (noteToWrite, index) => {
    const octave = index <= indexOfBNote ? 1 : 2;
    const lineNeeded = `noteOnStaff ${noteToWrite[0].toLowerCase()}${octave}`;
    const createClass = classNames({
      [styles.noteOnStaff]: true,
      [styles.noteDisabled]: note === "X",
      [styles.c1]: noteToWrite[0] === "C" && octave === 1,
      [styles.d1]: noteToWrite[0] === "D" && octave === 1,
      [styles.e1]: noteToWrite[0] === "E" && octave === 1,
      [styles.f1]: noteToWrite[0] === "F" && octave === 1,
      [styles.g1]: noteToWrite[0] === "G" && octave === 1,
      [styles.a1]: noteToWrite[0] === "A" && octave === 1,
      [styles.b1]: noteToWrite[0] === "B" && octave === 1,
      [styles.c2]: noteToWrite[0] === "C" && octave === 2,
      [styles.d2]: noteToWrite[0] === "D" && octave === 2,
      [styles.e2]: noteToWrite[0] === "E" && octave === 2,
      [styles.f2]: noteToWrite[0] === "F" && octave === 2,
      [styles.g2]: noteToWrite[0] === "G" && octave === 2,
      [styles.a2]: noteToWrite[0] === "A" && octave === 2,
      [styles.b2]: noteToWrite[0] === "B" && octave === 2,
    });
    const writeLine = () => {
      switch (lineNeeded) {
        case "noteOnStaff c1":
          return false;
        case "noteOnStaff a2":
          return false;
        case "noteOnStaff b2":
          return false;
        default:
          return true;
      }
    };
    const noteKey = `note${index}`;

    const addedLines = classNames({
      [styles.lowerLine]: octave === 1,
      [styles.upperLine]: octave === 2,
      [styles.lineDisabled]: writeLine() || note === "X",
    });
    const lineKey = `line${index}`;

    return (
      <div className={styles.noteContainerDiv} key={noteKey}>
        <img className={createClass} src={wholeNote} alt={noteToWrite} />
        <img className={addedLines} src={line} key={lineKey} alt="added line" />
      </div>
    );
  };

  const writeSharps = (sharpToWrite, index) => {
    const sharpClass = classNames({
      [styles.sharpOnStaff]: true,
      [styles.sharpDisabled]: note === "X",
      [styles.fSharp]: sharpToWrite === "F#",
      [styles.cSharp]: sharpToWrite === "C#",
      [styles.gSharp]: sharpToWrite === "G#",
      [styles.dSharp]: sharpToWrite === "D#",
      [styles.aSharp]: sharpToWrite === "A#",
      [styles.eSharp]: sharpToWrite === "E#",
      [styles.bSharp]: sharpToWrite === "B#",
    });
    const sharpKey = `sharp${index}`;
    return (
      <img
        className={sharpClass}
        key={sharpKey}
        src={sharp}
        alt={sharpToWrite}
      />
    );
  };

  const writeFlats = (flatToWrite, index) => {
    const flatClass = classNames({
      [styles.flatOnStaff]: true,
      [styles.flatDisabled]: note === "X",
      [styles.bFlat]: flatToWrite === "Bb",
      [styles.eFlat]: flatToWrite === "Eb",
      [styles.aFlat]: flatToWrite === "Ab",
      [styles.dFlat]: flatToWrite === "Db",
      [styles.gFlat]: flatToWrite === "Gb",
      [styles.cFlat]: flatToWrite === "Cb",
    });
    const flatKey = `flat${index}`;
    return (
      <img className={flatClass} key={flatKey} src={flat} alt={flatToWrite} />
    );
  };

  return (
    <div className={styles.container}>
      <img className={styles.clef} src={clef} alt="treble clef"></img>
      {sharps.map((sign, index) => writeSharps(sign, index))}
      {flats.map((sign, index) => writeFlats(sign, index))}
      {range.map((sound, index) => writeNote(sound, index))}
      <ScaleCaption range={range} modus={modus} note={note} />
    </div>
  );
}
