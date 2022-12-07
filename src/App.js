import { useState } from "react";
import { Controls } from "./component/controls";
import { ChooseMode } from "./component/chooseMode";
import { Keyboard } from "./component/keyboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006D77",
      light: "#EDF6F9",
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

function App() {
  const [note, setNote] = useState("X");
  const [modus, setModus] = useState("major");
  const [chordType, setChordType] = useState("major");
  const [chordAdditional, setChordAdditional] = useState("none");
  const [blackKeyMode, setBlackKeyMode] = useState("sharped");
  const [appMode, setAppMode] = useState("note");

  const pressedKey = (newNote) => {
    setNote(newNote);
  };

  const sharpOrFlat = (sign) => {
    setBlackKeyMode(sign);
  };

  const selectModus = (majorOrMinor) => {
    setModus(majorOrMinor);
  };

  const selectChord = (type) => {
    setChordType(type);
  };

  const selectChordAdditional = (added) => {
    setChordAdditional(added);
  };

  const selectMode = (mode) => {
    setNote("X");
    setAppMode(mode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Controls
        sharpOrFlat={sharpOrFlat}
        selectModus={selectModus}
        selectChord={selectChord}
        selectChordAdditional={selectChordAdditional}
        selectMode={selectMode}
        appMode={appMode}
      />

      <ChooseMode
        appMode={appMode}
        note={note}
        modus={modus}
        chordType={chordType}
        chordAdditional={chordAdditional}
      />

      <Keyboard pressedKey={pressedKey} blackKeyMode={blackKeyMode} />
    </ThemeProvider>
  );
}

export default App;
