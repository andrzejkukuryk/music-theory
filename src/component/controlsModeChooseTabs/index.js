import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

import { TYPE_CHORD, TYPE_NOTE, TYPE_SCALE } from "../../theory";

export function ControlsModeChooseTabs({ appMode, selectMode }) {
  const handleChange = (event, newValue) => {
    selectMode(newValue);
  };
  return (
    <Box sx={{ boxShadow: 25, width: "100%", marginBottom: 1 }}>
      <Tabs
        value={appMode}
        onChange={handleChange}
        textColor="primary"
        centered
      >
        <Tab value={TYPE_NOTE} label="Note" sx={{ ml: 4, mr: 4 }} />
        <Tab value={TYPE_SCALE} label="Scale" sx={{ ml: 4, mr: 4 }} />
        <Tab value={TYPE_CHORD} label="Chord" sx={{ ml: 4, mr: 4 }} />
      </Tabs>
    </Box>
  );
}
