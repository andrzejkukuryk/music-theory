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
} from "../../theory";

export function Controls({
  sharpOrFlat,
  selectModus,
  selectChord,
  muteSounds,
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

  const handleChangeMute = () => {
    muteSounds();
  };

  const handleChangeMode = ({ target }) => {
    selectMode(target.value);
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
        <label htmlFor="mode">Choose mode:</label>
        <select id="mode" name="mode" onChange={handleChangeMode}>
          <option value={TYPE_NOTE}>Note</option>
          <option value={TYPE_SCALE}>Scale</option>
          <option value={TYPE_CHORD}>Chord</option>
        </select>
      </div>
      <div className={classChromaticDiv}>
        <p className={styles.chromaticChooseP}>Black keys use names with:</p>
        <input
          type="radio"
          id="sharps"
          name="sharpOrFlat"
          value={TYPE_SHARPED}
          onClick={handleClickChromatic}
          defaultChecked
        />
        <label htmlFor="sharps">sharps</label>
        <input
          type="radio"
          id="flats"
          name="sharpOrFlat"
          value={TYPE_FLATED}
          onClick={handleClickChromatic}
        />
        <label htmlFor="flats">flats</label>
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
      <div className={styles.keyboardMutedDiv}>
        <input type="checkbox" id="muted" onChange={handleChangeMute} />
        <label htmlFor="muted">mute sounds</label>
      </div>
    </div>
  );
}
