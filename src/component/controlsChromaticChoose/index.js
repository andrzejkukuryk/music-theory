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

export function ControlsChromaticChoose({ handleClickChromatic }) {
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
        Chomatics
      </Typography>
      <FormControl>
        <FormLabel id="blackKeysUseNamesWith">
          Black keys use names with:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="blackKeysUseNamesWith"
          defaultValue={TYPE_SHARPED}
          name="radio-button-group"
        >
          <FormControlLabel
            value={TYPE_SHARPED}
            control={<Radio size="small" />}
            label="sharps"
            onClick={handleClickChromatic}
          />
          <FormControlLabel
            value={TYPE_FLATED}
            control={<Radio size="small" />}
            label="flats"
            onClick={handleClickChromatic}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
