import React from "react";
import styles from "./style.module.css";
import clef from "./graph/clef.png";
import note from "./graph/wholeNote.png";
import sharp from "./graph/sharp.png";
import flat from "./graph/flat.png";
import line from "./graph/line.png";

var classNames = require("classnames");

export function Note(props) {
  let pitch = props.note[0];
  let playedNote = props.note;

  const noteOnStaff = classNames({
    [styles.note]: pitch !== "X",
    [styles.noteDisabled]: pitch === "X",
    [styles.c]: pitch === "C",
    [styles.d]: pitch === "D",
    [styles.e]: pitch === "E",
    [styles.f]: pitch === "F",
    [styles.g]: pitch === "G",
    [styles.a]: pitch === "A",
    [styles.b]: pitch === "B",
  });

  const sharpOnStaff = classNames({
    [styles.sharp]: true,
    [styles.sharpDisabled]: playedNote.length === 1 || playedNote[1] === "b",
    [styles.cSharp]: pitch === "C",
    [styles.dSharp]: pitch === "D",
    [styles.eSharp]: pitch === "E",
    [styles.fSharp]: pitch === "F",
    [styles.gSharp]: pitch === "G",
    [styles.aSharp]: pitch === "A",
    [styles.bSharp]: pitch === "B",
  });

  const flatOnStaff = classNames({
    [styles.flat]: true,
    [styles.flatDisabled]: playedNote.length === 1 || playedNote[1] === "#",
    [styles.cFlat]: pitch === "C",
    [styles.dFlat]: pitch === "D",
    [styles.eFlat]: pitch === "E",
    [styles.fFlat]: pitch === "F",
    [styles.gFlat]: pitch === "G",
    [styles.aFlat]: pitch === "A",
    [styles.bFlat]: pitch === "B",
  });
  console.log(styles);
  const addedLine = classNames({
    [styles.lowerLine]: true,
    [styles.upperLine]: false,
    [styles.lineDisabled]: pitch !== "C",
  });

  const caption = classNames({
    [styles.noteCaption]: true,
    [styles.noteCaptionDisabled]: pitch === "X",
  });

  return (
    <div className={styles.container}>
      <img className={styles["clef"]} src={clef} alt="treble clef"></img>
      <img className={sharpOnStaff} src={sharp} alt="sharp"></img>
      <img className={flatOnStaff} src={flat} alt="flat"></img>
      <img className={noteOnStaff} src={note} alt="whole note"></img>
      <img className={addedLine} src={line} alt="added line"></img>
      <p className={caption}>Played note: {props.note}</p>
    </div>
  );
};
