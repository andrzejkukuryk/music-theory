import { useState } from "react";
import { Controls } from "./component/controls";
import { ChooseMode } from "./component/chooseMode";
import { Keyboard } from "./component/keyboard";

function App() {
  const [note, setNote] = useState("X");
  const [modus, setModus] = useState("major");
  const [chordType, setChordType] = useState("major");
  const [blackKeyMode, setBlackKeyMode] = useState("sharped");
  const [keyboardMuted, setKeyboardMuted] = useState(false);
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

  const muteSounds = () => {
    setKeyboardMuted(!keyboardMuted);
  };

  const selectMode = (mode) => {
    setNote("X");
    setAppMode(mode);
  };

  return (
    <div>
      <ChooseMode
        appMode={appMode}
        note={note}
        modus={modus}
        chordType={chordType}
      />
      <Controls
        sharpOrFlat={sharpOrFlat}
        selectModus={selectModus}
        selectChord={selectChord}
        muteSounds={muteSounds}
        selectMode={selectMode}
        appMode={appMode}
      />
      <Keyboard
        pressedKey={pressedKey}
        blackKeyMode={blackKeyMode}
        keyboardMuted={keyboardMuted}
      />
    </div>
  );
}

export default App;
