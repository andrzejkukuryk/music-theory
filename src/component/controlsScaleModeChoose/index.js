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

export function ControlsScaleModeChoose({ modus, setModus }) {
  const handleChange = (event) => {
    setModus(event.target.value);
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
        Scale mode
      </Typography>
      <FormControl
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <FormLabel
          id="scaleModeChoose"
          sx={{
            mr: 2,
            color: "#000",
            "&.Mui-focused": {
              color: "#000",
            },
          }}
        >
          Choose mode:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="scaleModeChoose"
          defaultValue={TYPE_MAJOR}
          value={modus}
          onChange={handleChange}
          name="radio-button-group"
        >
          <FormControlLabel
            value={TYPE_MAJOR}
            control={<Radio size="small" />}
            label="major"
          />
          <FormControlLabel
            value={TYPE_MINOR}
            control={<Radio size="small" />}
            label="minor"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
