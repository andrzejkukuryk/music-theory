import { useState } from 'react';
import './App.css';
import { Controls } from "./component/controls";
import { ChooseMode } from "./component/chooseMode";
import { Keyboard } from "./component/keyboard";
// import { Note } from "./component/note";
// import { Scale } from "./component/scale";

function App() {
  const [note, setNote] = useState("X");
  const [modus, setModus] = useState("major");
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

  const muteSounds = () => {
    setKeyboardMuted(!keyboardMuted);
  };

  const selectMode = (mode) => {
    setNote("X");
    setAppMode(mode);
  };

  return (
    <div>
      <ChooseMode appMode={appMode} note={note} modus={modus} />
      <Controls
        sharpOrFlat={sharpOrFlat}
        selectModus={selectModus}
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
