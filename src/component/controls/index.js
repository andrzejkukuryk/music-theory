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
import { ControlsScaleModeChoose } from "../controlsScaleModeChoose";
import { ControlsChord } from "../controlsChord";

export function Controls({
  sharpOrFlat,
  selectModus,
  selectChord,
  selectChordAdditional,
  selectMode,
  appMode,
  chordType,
  chordAdditional,
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
        <ControlsScaleModeChoose
          handleClickScaleModus={handleClickScaleModus}
        />
      </div>
      <div className={classChordTypeDiv}>
        <ControlsChord
          chordType={chordType}
          selectChord={selectChord}
          chordAdditional={chordAdditional}
          selectChordAdditional={selectChordAdditional}
        />
      </div>
    </div>
  );
}
