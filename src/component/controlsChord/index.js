import {
  Box,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
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
      <FormControl
        sx={{
          width: "250px",
          marginRight: "30px",
          backgroundColor: "white",
          outline: "solid rgba(0,0,0,0.42) 1px",
          borderRadius: "4px",
        }}
        size="small"
      >
        <Select value={chordType} onChange={handleChangeChordModus}>
          <MenuItem value={TYPE_MAJOR}>major</MenuItem>
          <MenuItem value={TYPE_MINOR}>minor</MenuItem>
          <MenuItem value={TYPE_AUGMENTED}>augmented</MenuItem>
          <MenuItem value={TYPE_DIMINISHED}>diminished</MenuItem>
          <MenuItem value={TYPE_SUSPENDEDTWO}>suspended 2</MenuItem>
          <MenuItem value={TYPE_SUSPENDEDFOUR}>suspended 4</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        sx={{
          width: "250px",
          backgroundColor: "white",
          outline: "solid rgba(0,0,0,0.42) 1px",
          borderRadius: "4px",
        }}
        size="small"
      >
        <Select value={chordAdditional} onChange={handleChangeChordAdditional}>
          <MenuItem value={TYPE_NONE}>clean</MenuItem>
          <MenuItem value={TYPE_7TH}>7</MenuItem>
          <MenuItem value={TYPE_9TH}>9</MenuItem>
          <MenuItem value={TYPE_ADD9}>add9</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
