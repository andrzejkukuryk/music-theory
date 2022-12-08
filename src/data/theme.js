import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#006D77",
      light: "#EDF6F9",
    },
    text: {
      primary: "rgba(0, 0, 0, 1)",
    },
  },
  typography: {
    fontFamily: '"Open Sans","Roboto","Helvetica","Arial"',
    body2: {
      fontSize: "0.6rem",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    button: {
      fontWeight: 700,
      fontSize: "1rem",
      textTransform: "none",
    },
  },
});
theme.shadows.push("0px 6px 16px 0px rgba(0,109,119,0.09)");
