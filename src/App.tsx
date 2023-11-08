import React from 'react';
import './App.css';
import ColorEditor from './Components/ColorEditor';

function App() {
  return (
    <div className="App">
      <h1>Color Editor</h1>
      <ColorEditor close={(color:any) => console.log(`Selected color: ${color}`)} />
    </div>
  );
}

export default App;
