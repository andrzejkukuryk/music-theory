import './App.css';

import { Keyboard } from './component/keyboard';



function App() {
  return (
    <Keyboard>
      {/* <div className='diatonicKeys'>
        {diatonic.map((note, index) => <Key key={index} tone={note} type='white' />)} 
      </div>
      <div className='chromaticKeys'>
        {sharped.map((note, index) => <Key key={index} tone={note} type='black' />)}
      </div> */}
    </Keyboard>
  );
}

export default App;
