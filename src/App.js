import { useState } from 'react';
import './App.css';

import { Keyboard } from './component/keyboard';
import { Note } from './component/note';
import { Scale } from './component/scale';



function App() {
  const [note, setNote] = useState('X');

  const pressedKey = (newNote) => {
    setNote(newNote);

  };

  return (
    <div>
      <Scale note={note} />
      {/* <Note note={note} /> */}
      <Keyboard pressedKey={pressedKey} />
    </div>
  );
}

export default App;
