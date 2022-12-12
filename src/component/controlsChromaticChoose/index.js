import React from "react";

import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import { TYPE_SHARPED, TYPE_FLATED } from "../../theory";

export function ControlsChromaticChoose({ blackKeyMode, setBlackKeyMode }) {
  const handleChange = (event) => {
    setBlackKeyMode(event.target.value);
  };

  return (
    <Box
      sx={{
        marginTop: "20px",
        paddingTop: "26px",
        paddingLeft: "30px",
        width: 573,
        height: 65,
        backgroundColor: "primary.light",
      }}
    >
      <Typography variant="body2" component="h2" sx={{ mb: -1 }}>
        Chomatics
      </Typography>
      <FormControl sx={{ flexDirection: "row", alignItems: "center" }}>
        <FormLabel id="blackKeysUseNamesWith" sx={{ mr: 2 }}>
          Black keys use names with:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="blackKeysUseNamesWith"
          defaultValue={TYPE_SHARPED}
          value={blackKeyMode}
          onChange={handleChange}
          name="radio-button-group"
        >
          <FormControlLabel
            value={TYPE_SHARPED}
            control={<Radio size="small" />}
            label="sharps"
          />
          <FormControlLabel
            value={TYPE_FLATED}
            control={<Radio size="small" />}
            label="flats"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
