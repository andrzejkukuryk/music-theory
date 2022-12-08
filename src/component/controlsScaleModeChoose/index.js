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

import { TYPE_MAJOR, TYPE_MINOR } from "../../theory";

export function ControlsScaleModeChoose({ handleClickScaleModus }) {
  return (
    <Box
      sx={{
        marginTop: "30px",
        paddingTop: "26px",
        paddingLeft: "30px",
        width: 573,
        height: 81,
        backgroundColor: "primary.light",
      }}
    >
      <Typography variant="body2" component="h2">
        Scale mode
      </Typography>
      <FormControl>
        <FormLabel id="scaleModeChoose">Choose mode:</FormLabel>
        <RadioGroup
          row
          aria-labelledby="scaleModeChoose"
          defaultValue={TYPE_MAJOR}
          name="radio-button-group"
        >
          <FormControlLabel
            value={TYPE_MAJOR}
            control={<Radio size="small" />}
            label="major"
            onClick={handleClickScaleModus}
          />
          <FormControlLabel
            value={TYPE_MINOR}
            control={<Radio size="small" />}
            label="minor"
            onClick={handleClickScaleModus}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
