import { Box, Typography } from "@mui/material";
import React from "react";

export function ChordCaption({ chordIngredients }) {
  return (
    // <Box sx={{ marginTop: "30px" }}>
    //   {note === "X" && (
    //     <Box>
    //       <Typography variant="body2" component="h3">
    //         Hint
    //       </Typography>
    //       <Typography sx={{ marginTop: "4px" }}>
    //         Play a key below to see the chord.
    //       </Typography>
    //     </Box>
    //   )}
    //   {note !== "X" && (
    //     <Box>
    //       <Typography variant="body2" component="h3">
    //         Result
    //       </Typography>
    //       <Typography sx={{ marginTop: "4px" }}>
    //         {range[0]} {modus} scale is: {range.join(", ")}
    //       </Typography>
    //     </Box>
    //   )}
    // </Box>
    <p>{chordIngredients.join(", ")}</p>
  );
}
