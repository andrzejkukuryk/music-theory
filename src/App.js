import { useState } from 'react';
import './App.css';

import { Keyboard } from './component/keyboard';
import { Note } from './component/note';



function App() {
  const [note, setNote] = useState(null);

  return (
    <div>
      <Note note={note ? note : 'X'} /> 
      <Keyboard setNote={setNote} />
    </div>
  );
}

export default App;
