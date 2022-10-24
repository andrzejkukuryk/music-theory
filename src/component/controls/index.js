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
} from "../../theory";

export function Controls({
  sharpOrFlat,
  selectModus,
  muteSounds,
  selectMode,
  appMode,
}) {
  const handleClickChromatic = ({ target }) => {
    target.value === TYPE_FLATED
      ? sharpOrFlat(TYPE_FLATED)
      : sharpOrFlat(TYPE_SHARPED);
  };

  const handleClickModus = ({ target }) => {
    target.value === TYPE_MAJOR
      ? selectModus(TYPE_MAJOR)
      : selectModus(TYPE_MINOR);
  };

  const handleChangeMute = () => {
    muteSounds();
  };

  const handleChangeMode = ({ target }) => {
    selectMode(target.value);
  };

  const classChromaticDiv = classNames({
    [styles.chromaticChooseDiv]: appMode === TYPE_NOTE,
    [styles.chromaticChooseDivDisabled]: appMode !== TYPE_NOTE,
  });

  const classModusDiv = classNames({
    [styles.modusChooseDiv]: appMode === TYPE_SCALE,
    [styles.modusChooseDivDisabled]: appMode !== TYPE_SCALE,
  });

  return (
    <div className={styles.container}>
      <div className={styles.modeChooseDiv}>
        <label htmlFor="mode">Choose mode:</label>
        <select id="mode" name="mode" onChange={handleChangeMode}>
          <option value={TYPE_NOTE}>Note</option>
          <option value={TYPE_SCALE}>Scale</option>
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
          onClick={handleClickModus}
          defaultChecked
        />
        <label htmlFor="major">major</label>
        <input
          type="radio"
          id="minor"
          name="modus"
          value={TYPE_MINOR}
          onClick={handleClickModus}
        />
        <label htmlFor="minor">minor</label>
      </div>
      <div className={styles.keyboardMutedDiv}>
        <input type="checkbox" id="muted" onChange={handleChangeMute} />
        <label htmlFor="muted">mute sounds</label>
      </div>
    </div>
  );
}
