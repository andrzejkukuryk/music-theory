import React from "react";

import { TYPE_NOTE, TYPE_SCALE, TYPE_CHORD } from "../../theory";
import { ControlsChromaticChoose } from "../controlsChromaticChoose";
import { ControlsModeChooseTabs } from "../controlsModeChooseTabs";
import { ControlsScaleModeChoose } from "../controlsScaleModeChoose";
import { ControlsChord } from "../controlsChord";
import { Box } from "@mui/material";

export function Controls({
  blackKeyMode,
  setBlackKeyMode,
  modus,
  setModus,
  selectChord,
  selectChordAdditional,
  selectMode,
  appMode,
  chordType,
  chordAdditional,
}) {
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
        <ControlsChromaticChoose
          blackKeyMode={blackKeyMode}
          setBlackKeyMode={setBlackKeyMode}
        />
      )}
      {appMode === TYPE_SCALE && (
        <ControlsScaleModeChoose modus={modus} setModus={setModus} />
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
  );
}
