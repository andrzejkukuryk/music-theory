import classNames from "classnames";
import React from "react";
import styles from "./style.module.css";
import {
  TYPE_FLATED,
  TYPE_SHARPED,
  TYPE_NOTE,
  TYPE_SCALE,
  TYPE_MAJOR,
  TYPE_MINOR,
  TYPE_CHORD,
  TYPE_AUGMENTED,
  TYPE_DIMINISHED,
  TYPE_SUSPENDEDTWO,
  TYPE_SUSPENDEDFOUR,
  TYPE_NONE,
  TYPE_7TH,
  TYPE_9TH,
  TYPE_ADD9,
} from "../../theory";
import { ControlsChromaticChoose } from "../controlsChromaticChoose";
import { ControlsModeChooseTabs } from "../controlsModeChooseTabs";

export function Controls({
  sharpOrFlat,
  selectModus,
  selectChord,
  selectChordAdditional,
  selectMode,
  appMode,
}) {
  const handleClickChromatic = ({ target }) => {
    target.value === TYPE_FLATED
      ? sharpOrFlat(TYPE_FLATED)
      : sharpOrFlat(TYPE_SHARPED);
  };

  const handleClickScaleModus = ({ target }) => {
    target.value === TYPE_MAJOR
      ? selectModus(TYPE_MAJOR)
      : selectModus(TYPE_MINOR);
  };

  const handleClickChordType = ({ target }) => {
    selectChord(target.value);
  };

  const handleClickChordAdditional = ({ target }) => {
    selectChordAdditional(target.value);
  };

  const classChromaticDiv = classNames({
    [styles.chromaticChooseDiv]:
      appMode === TYPE_NOTE || appMode === TYPE_CHORD,
    [styles.chromaticChooseDivDisabled]:
      appMode !== TYPE_NOTE && appMode !== TYPE_CHORD,
  });

  const classModusDiv = classNames({
    [styles.modusChooseDiv]: appMode === TYPE_SCALE,
    [styles.modusChooseDivDisabled]: appMode !== TYPE_SCALE,
  });

  const classChordTypeDiv = classNames({
    [styles.chordTypeChooseDiv]: appMode === TYPE_CHORD,
    [styles.chordTypeChooseDivDisabled]: appMode !== TYPE_CHORD,
  });

  return (
    <div className={styles.container}>
      <div className={styles.modeChooseDiv}>
        <ControlsModeChooseTabs appMode={appMode} selectMode={selectMode} />
      </div>
      <div className={classChromaticDiv}>
        <ControlsChromaticChoose handleClickChromatic={handleClickChromatic} />
      </div>
      <div className={classModusDiv}>
        <p className={styles.modusChooseP}>Choose modus:</p>
        <input
          type="radio"
          id="major"
          name="modus"
          value={TYPE_MAJOR}
          onClick={handleClickScaleModus}
          defaultChecked
        />
        <label htmlFor="major">major</label>
        <input
          type="radio"
          id="minor"
          name="modus"
          value={TYPE_MINOR}
          onClick={handleClickScaleModus}
        />
        <label htmlFor="minor">minor</label>
      </div>
      <div className={classChordTypeDiv}>
        <p className={styles.modusChooseP}>Choose chord:</p>
        <ul>
          <li>
            <input
              type="radio"
              id="majorChord"
              name="chordModus"
              value={TYPE_MAJOR}
              onClick={handleClickChordType}
              defaultChecked
            />
            <label htmlFor="majorChord">major</label>
          </li>
          <li>
            <input
              type="radio"
              id="minorChord"
              name="chordModus"
              value={TYPE_MINOR}
              onClick={handleClickChordType}
            />
            <label htmlFor="minorChord">minor</label>
          </li>
          <li>
            <input
              type="radio"
              id="augmentedChord"
              name="chordModus"
              value={TYPE_AUGMENTED}
              onClick={handleClickChordType}
            />
            <label htmlFor="augmentedChord">augmented</label>
          </li>
          <li>
            <input
              type="radio"
              id="diminishedChord"
              name="chordModus"
              value={TYPE_DIMINISHED}
              onClick={handleClickChordType}
            />
            <label htmlFor="diminishedChord">diminished</label>
          </li>
          <li>
            <input
              type="radio"
              id="sus2Chord"
              name="chordModus"
              value={TYPE_SUSPENDEDTWO}
              onClick={handleClickChordType}
            />
            <label htmlFor="sus2Chord">suspended 2</label>
          </li>
          <li>
            <input
              type="radio"
              id="sus4Chord"
              name="chordModus"
              value={TYPE_SUSPENDEDFOUR}
              onClick={handleClickChordType}
            />
            <label htmlFor="sus4Chord">suspended 4</label>
          </li>
        </ul>
      </div>
      <div className={classChordTypeDiv}>
        <p className={styles.modusChooseP}>Add to chord:</p>
        <ul>
          <li>
            <input
              type="radio"
              id="clean"
              name="chordAdditionals"
              value={TYPE_NONE}
              onClick={handleClickChordAdditional}
              defaultChecked
            />
            <label htmlFor="clean">clean</label>
          </li>
          <li>
            <input
              type="radio"
              id="7th"
              name="chordAdditionals"
              value={TYPE_7TH}
              onClick={handleClickChordAdditional}
            />
            <label htmlFor="7th">7</label>
          </li>
          <li>
            <input
              type="radio"
              id="9th"
              name="chordAdditionals"
              value={TYPE_9TH}
              onClick={handleClickChordAdditional}
            />
            <label htmlFor="9th">9</label>
          </li>
          <li>
            <input
              type="radio"
              id="add9"
              name="chordAdditionals"
              value={TYPE_ADD9}
              onClick={handleClickChordAdditional}
            />
            <label htmlFor="add9">add9</label>
          </li>
        </ul>
      </div>
      {/* <div className={styles.keyboardMutedDiv}>
        <input type="checkbox" id="muted" onChange={handleChangeMute} />
        <label htmlFor="muted">mute sounds</label>
      </div> */}
    </div>
  );
}
