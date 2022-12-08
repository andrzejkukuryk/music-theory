import { Box, Typography } from "@mui/material";
import React from "react";

export function NoteCaption({ note }) {
  return (
    <Box sx={{ marginTop: "30px" }}>
      {note === "X" && (
        <Box>
          <Typography variant="body2" component="h3">
            Hint
          </Typography>
          <Typography sx={{ marginTop: "4px" }}>
            Play a key below to see the note.
          </Typography>
        </Box>
      )}
      {note !== "X" && (
        <Box>
          <Typography variant="body2" component="h3">
            Result
          </Typography>
          <Typography sx={{ marginTop: "4px" }}>Played note: {note}</Typography>
        </Box>
      )}
    </Box>
  );
}
