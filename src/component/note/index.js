import React from "react";
import classNames from "classnames";
import styles from "./style.module.css";
import clef from "./graph/clef.png";
import wholeNote from "./graph/wholeNote.png";
import sharp from "./graph/sharp.png";
import flat from "./graph/flat.png";
import line from "./graph/line.png";
import { NoteCaption } from "../noteCaption";

export function Note({ note }) {
  const pitch = note[0];

  const classNote = classNames({
    [styles.noteOnStaff]: pitch !== "X",
    [styles.noteDisabled]: pitch === "X",
    [styles.c]: pitch === "C",
    [styles.d]: pitch === "D",
    [styles.e]: pitch === "E",
    [styles.f]: pitch === "F",
    [styles.g]: pitch === "G",
    [styles.a]: pitch === "A",
    [styles.b]: pitch === "B",
  });

  const classSharp = classNames({
    [styles.sharpOnStaff]: true,
    [styles.sharpDisabled]: note.length === 1 || note[1] === "b",
    [styles.cSharp]: pitch === "C",
    [styles.dSharp]: pitch === "D",
    [styles.eSharp]: pitch === "E",
    [styles.fSharp]: pitch === "F",
    [styles.gSharp]: pitch === "G",
    [styles.aSharp]: pitch === "A",
    [styles.bSharp]: pitch === "B",
  });

  const classFlat = classNames({
    [styles.flatOnStaff]: true,
    [styles.flatDisabled]: note.length === 1 || note[1] === "#",
    [styles.cFlat]: pitch === "C",
    [styles.dFlat]: pitch === "D",
    [styles.eFlat]: pitch === "E",
    [styles.fFlat]: pitch === "F",
    [styles.gFlat]: pitch === "G",
    [styles.aFlat]: pitch === "A",
    [styles.bFlat]: pitch === "B",
  });
  const addedLine = classNames({
    [styles.lowerLine]: true,
    [styles.upperLine]: false,
    [styles.lineDisabled]: pitch !== "C",
  });

  return (
    <div className={styles.container}>
      <img className={styles.clef} src={clef} alt="treble clef"></img>
      <img className={classSharp} src={sharp} alt="sharp"></img>
      <img className={classFlat} src={flat} alt="flat"></img>
      <img className={classNote} src={wholeNote} alt="whole note"></img>
      <img className={addedLine} src={line} alt="added line"></img>
      <NoteCaption note={note} />
    </div>
  );
};
