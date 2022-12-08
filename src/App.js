import { useState } from "react";
import { Controls } from "./component/controls";
import { ChooseMode } from "./component/chooseMode";
import { Keyboard } from "./component/keyboard";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./data/theme";

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
        chordType={chordType}
        chordAdditional={chordAdditional}
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
