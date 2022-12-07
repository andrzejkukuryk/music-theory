import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export function ControlsMuteSounds({ keyboardMuted, setKeyboardMuted }) {
  const handleChange = () => {
    setKeyboardMuted(!keyboardMuted);
  };

  return (
    <FormControlLabel
      control={<Checkbox onChange={handleChange} />}
      label="mute sounds"
    />
  );
}
