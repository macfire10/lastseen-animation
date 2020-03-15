import React from 'react';
import './App.css';
import { LetterBlock } from './LetterBlock';

function App() {
  return (
    <div className="App">
      <LetterBlock itemIndex={1} letterAmount={10} />
      <LetterBlock itemIndex={2} letterAmount={100}/>
      <LetterBlock itemIndex={3} letterAmount={400} />
    </div>
  );
}

export default App;
