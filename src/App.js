import { useState } from 'react';
import './App.css';
import { Controls } from "./component/controls";

import { Keyboard } from "./component/keyboard";
import { Note } from "./component/note";
import { Scale } from "./component/scale";

function App() {
  const [note, setNote] = useState("X");
  const [blackKeyMode, setBlackKeyMode] = useState("sharped");
  const [keyboardMuted, setKeyboardMuted] = useState(false);

  const pressedKey = (newNote) => {
    setNote(newNote);
  };

  const sharpOrFlat = (sign) => {
    setBlackKeyMode(sign);
  };

  const muteSounds = () => {
    setKeyboardMuted(!keyboardMuted);
  };

  return (
    <div>
      {/* <Scale note={note} /> */}
      <Note note={note} />
      <Controls sharpOrFlat={sharpOrFlat} muteSounds={muteSounds} />
      <Keyboard
        pressedKey={pressedKey}
        blackKeyMode={blackKeyMode}
        keyboardMuted={keyboardMuted}
      />
    </div>
  );
}

export default App;
