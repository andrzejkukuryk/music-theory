import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import {
  TYPE_7TH,
  TYPE_9TH,
  TYPE_ADD9,
  TYPE_AUGMENTED,
  TYPE_DIMINISHED,
  TYPE_MAJOR,
  TYPE_MINOR,
  TYPE_NONE,
  TYPE_SUSPENDEDFOUR,
  TYPE_SUSPENDEDTWO,
} from "../../theory";

export function ControlsChord({
  chordType,
  selectChord,
  chordAdditional,
  selectChordAdditional,
}) {
  const handleChangeChordModus = (event) => {
    selectChord(event.target.value);
  };

  const handleChangeChordAdditional = (event) => {
    selectChordAdditional(event.target.value);
  };
  return (
    <Box
      sx={{
        paddingTop: "26px",
        paddingLeft: "30px",
        width: 573,
        height: 81,
        backgroundColor: "primary.light",
      }}
    >
      <FormControl>
        <InputLabel id="chordModus">Chord mode</InputLabel>
        <Select
          labelId="chordModus"
          value={chordType}
          label="Chord mode"
          onChange={handleChangeChordModus}
        >
          <MenuItem value={TYPE_MAJOR}>major</MenuItem>
          <MenuItem value={TYPE_MINOR}>minor</MenuItem>
          <MenuItem value={TYPE_AUGMENTED}>augmented</MenuItem>
          <MenuItem value={TYPE_DIMINISHED}>diminished</MenuItem>
          <MenuItem value={TYPE_SUSPENDEDTWO}>suspended 2</MenuItem>
          <MenuItem value={TYPE_SUSPENDEDFOUR}>suspended 4</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="chordAdditional">Chord addition</InputLabel>
        <Select
          labelId="chordAdditional"
          value={chordAdditional}
          label="Chord addition"
          onChange={handleChangeChordAdditional}
        >
          <MenuItem value={TYPE_NONE}>clean</MenuItem>
          <MenuItem value={TYPE_7TH}>7</MenuItem>
          <MenuItem value={TYPE_9TH}>9</MenuItem>
          <MenuItem value={TYPE_ADD9}>add9</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
