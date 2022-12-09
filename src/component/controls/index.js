import React from "react";

import {
  TYPE_FLATED,
  TYPE_SHARPED,
  TYPE_NOTE,
  TYPE_SCALE,
  TYPE_MAJOR,
  TYPE_MINOR,
  TYPE_CHORD,
} from "../../theory";
import { ControlsChromaticChoose } from "../controlsChromaticChoose";
import { ControlsModeChooseTabs } from "../controlsModeChooseTabs";
import { ControlsScaleModeChoose } from "../controlsScaleModeChoose";
import { ControlsChord } from "../controlsChord";
import { Box } from "@mui/material";

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

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minWidth="100vw"
    >
      <ControlsModeChooseTabs appMode={appMode} selectMode={selectMode} />
      {(appMode === TYPE_NOTE || appMode === TYPE_CHORD) && (
        <ControlsChromaticChoose handleClickChromatic={handleClickChromatic} />
      )}
      {appMode === TYPE_SCALE && (
        <ControlsScaleModeChoose
          handleClickScaleModus={handleClickScaleModus}
        />
      )}
      {appMode === TYPE_CHORD && (
        <ControlsChord
          chordType={chordType}
          selectChord={selectChord}
          chordAdditional={chordAdditional}
          selectChordAdditional={selectChordAdditional}
        />
      )}
    </Box>
    // </div>
  );
}
