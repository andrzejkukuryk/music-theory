import { Box, Typography } from "@mui/material";
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

export function ChordCaption({
  note,
  chordType,
  chordAdditional,
  chordIngredients,
}) {
  const ingredients = chordIngredients.map(
    (ingredient) =>
      `${ingredient[0].toUpperCase()}${
        ingredient[1] === "#" || ingredient[1] === "b" ? ingredient[1] : ""
      }${ingredient[2] === "#" || ingredient[2] === "b" ? ingredient[2] : ""}`
  );
  const modeToDisplay = () => {
    switch (chordType) {
      case TYPE_MAJOR:
        return "";
      case TYPE_MINOR:
        return "m";
      case TYPE_AUGMENTED:
        return "aug";
      case TYPE_DIMINISHED:
        return "dim";
      case TYPE_SUSPENDEDTWO:
        return "sus2";
      case TYPE_SUSPENDEDFOUR:
        return "sus4";
      default:
        return "";
    }
  };

  const addToDisplay = () => {
    switch (chordAdditional) {
      case TYPE_NONE:
        return "";
      case TYPE_7TH:
        return "7";
      case TYPE_9TH:
        return "9";
      case TYPE_ADD9:
        return "add9";
      default:
        return "";
    }
  };

  const displayChordName = () => {
    switch (chordType) {
      case TYPE_MAJOR:
      case TYPE_MINOR:
      case TYPE_DIMINISHED:
      case TYPE_AUGMENTED:
        return `${modeToDisplay()}${addToDisplay()}`;
      case TYPE_SUSPENDEDTWO:
      case TYPE_SUSPENDEDFOUR:
        return `${addToDisplay()}${modeToDisplay()}`;
      default:
        return `${modeToDisplay()}${addToDisplay()}`;
    }
  };
  return (
    <Box sx={{ marginTop: "30px" }}>
      {note === "X" && (
        <Box>
          <Typography variant="body2" component="h3">
            Hint
          </Typography>
          <Typography sx={{ marginTop: "4px" }}>
            Play a key below to see the chord.
          </Typography>
        </Box>
      )}
      {note !== "X" && (
        <Box>
          <Typography variant="body2" component="h3">
            Result
          </Typography>
          <Typography sx={{ marginTop: "4px" }}>
            {note}
            {displayChordName()} chord is: {ingredients.join(", ")}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
